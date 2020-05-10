export enum STATUS {
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface BasicError {
    property: string;
    message: string;
}

export interface Response<T> {
    status: STATUS;
    data?: T;
    errors?: BasicError[];
}
