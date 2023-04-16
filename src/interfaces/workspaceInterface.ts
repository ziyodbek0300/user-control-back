export interface Workspace {
    title: string;
    shortTitle: string;
    description?: string;
    website?: string;
    category?: string;
    type: "private" | "public";
    photoUrl?: string;
    userId: string;
}

export enum CategoryEnum {
    'Marketing',
    'Engineering-IT',
    'Small Business',
    'Education',
    'Operations',
    'Human Resources',
    'Sales CRM',
    'Other'
};