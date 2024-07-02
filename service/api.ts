import axios from 'axios';

const API_URL = 'https://gorest.co.in/public/v2';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
});

export const fetchPosts = async (page: number) => {
    const response = await api.get(`/posts?page=${page}`);
    return response;
};

export const fetchPost = async (id: string) => {
    const response = await api.get(`/posts/${id}`);
    return response;
};

export const fetchComments = async (postId: string) => {
    const response = await api.get(`/posts/${postId}/comments`);
    return response;
};

export const fetchUsers = async (page: number) => {
    const response = await api.get(`/users?page=${page}`);
    return response;
};

export const fetchUser = async (id: number) => {
    const response = await api.get(`/users/${id}`);
    return response;
};

export const createUser = async (data: any) => {
    const response = await api.post('/users', data);
    return response;
};

export const updateUser = async (id: number, data: any) => {
    const response = await api.put(`/users/${id}`, data);
    return response;
};

export const deleteUser = async (id: number) => {
    const response = await api.delete(`/users/${id}`);
    return response;
};
