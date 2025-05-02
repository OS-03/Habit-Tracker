export interface Habit {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    completedDates: Date[];
}

export interface User {
    id: string;
    name: string;
    email: string;
    habits: Habit[];
}