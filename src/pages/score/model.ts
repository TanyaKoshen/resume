
export interface ICategory{
    id: string;
    metric: string;
    description: string;
    score: number[] | never[];
    comments: string;
    average: number;
}
