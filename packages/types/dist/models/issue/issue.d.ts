declare type User = {
    name: string;
    photo: string;
    item: string;
};
export interface Issue {
    uuid: string;
    type: string;
    code: number;
    title: string;
    description: string;
    priority: string;
    status: string;
    assigness: User[];
    reporter: User;
    estimate: number;
    project: string;
}
export {};
