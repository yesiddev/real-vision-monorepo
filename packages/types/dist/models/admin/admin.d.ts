declare type Payment = {
    bank: string;
    account: string;
    type: string;
};
export interface Admin {
    name: string;
    middlename: string;
    lastname: string;
    middlelastname: string;
    username: string;
    identification: string;
    email: string;
    phone: string;
    status: string;
    password: string;
    photo: string;
    position: string;
    location: string;
    birthday: string;
    pyment: Payment;
    age: number;
    createdAt: string;
    updatedAt: string;
}
export {};
