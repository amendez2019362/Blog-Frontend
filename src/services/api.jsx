import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/blog/v1',
    timeout: 5000
});

export const getPublication = async () => {
    try {
        return await apiClient.get('/publication');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const addPublication = async (data) => {
    try {
        return await apiClient.post('/publication/create', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const addComment = async (data) => {
    try {
        return await apiClient.post('/comment/create', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}