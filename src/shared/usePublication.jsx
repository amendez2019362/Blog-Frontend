import { useState } from "react";
import toast from "react-hot-toast";
import { getPublication as getPublicationRequest } from "../services/api";
import { addPublication as addPublicationRequest } from "../services/api";

export const usePublication = () => {

    const [publication, setPublication] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPublication = async () => {
        const publicationData = await getPublicationRequest();

        if (publicationData.error) {
            return toast.error(
                publicationData.e?.response?.data || 'Ocurrió un error al leer los canales'
            );
        }

        setPublication(publicationData.data.publication);
    };

    const addPublication = async (title, description, img, author, url) => {

        setIsLoading(true)

        const response = await addPublicationRequest({
            title,
            description,
            img,
            author,
            url
        })
        setIsLoading(false)

        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar, intenta de nuevo')
        }

        const { userDetails } = response.data
        localStorage.setItem('publication', JSON.stringify(userDetails))
        toast.success('Task added successfully');
        window.location.reload();
    }

    return {
        getPublication,
        addPublication,
        isFetching: !Boolean(publication),
        allPublication: publication,
        isLoading
    };
};

