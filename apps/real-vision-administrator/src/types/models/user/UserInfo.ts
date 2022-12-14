type Payment = {
    bank: string;
    account: string;
    type: string;
}

export interface UserInfo{
    uuid: string;
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
    payment: Payment;
    age: number;
    createdAt:  string;
    updatedAt: string;
}

export interface User {
    user: UserInfo;
    loading: boolean;
    success: boolean;
    error: string;
}