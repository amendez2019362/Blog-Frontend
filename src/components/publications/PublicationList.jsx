import { Card } from "./CardPublication";

export const PublicationList = ({ publication }) => {
    console.log("Datos de posts:", publication);

    return (
        <div className="bg-gray-400">
            {publication.map((publications) => {
                if (!publications._id) {
                    console.error("ID del post no definido:", publications);
                    return null;
                }
                return (
                    <Card
                        key={publications._id}
                        id={publications._id}
                        title={publications.title}
                        description={publications.description}
                        img={publications.img}
                        author={publications.author}
                        url={publications.url}
                        comments={publications.comments}
                    />
                );
            })}
        </div>
    );
};