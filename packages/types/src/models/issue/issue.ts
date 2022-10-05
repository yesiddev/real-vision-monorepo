export interface Issue{
    uuid: string;
    type: string;
    code: number;
    title: string;
    description: string;
    priority: string;
    status: string;
    assigness: string[];
    reporter: string;
    estimate: number;
    project: string;
}