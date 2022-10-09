type Comment = {
    body: string;
    name: string;
    createdAt: string;
}

export interface SoftwarePost{
    uuid: string;
    title: string;
    slug: string;
    category: string;
    image: string;
    views: number;
    description: string;
    content: string;
    comments: Comment[];
    likes: number;
    user_photo: string;
    user_name: string;
    status: string;
    language: string;
    createdAt: string;
    updatedAt: string;
}