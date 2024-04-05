export type FormData = {
    name: string;
    phone: string;
    date: string;
};

export type ErrorsObject = Record<keyof FormData, string>;