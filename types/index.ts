export type Post = {
    id: number;
    user_id: number;
    title: string;
    body: string;
}

export type Comment = {
    post_id: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export type User = {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
};
