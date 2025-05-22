export interface Article {
    id: number;
    title: string;
    keyword: string;
    traffic: number;
    words: number;
    createdOn: string;
}

export interface TabOption {
    value: string;
    label: string;
    style?: string;
}