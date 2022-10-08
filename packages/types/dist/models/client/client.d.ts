interface Contact {
    note: string;
    createdAt: string;
}
export interface Client {
    uuid: string;
    name: string;
    identification: string;
    phone: string;
    address: string;
    city: string;
    email: string;
    source: string;
    contacts: Contact[];
    createdAt: string;
    updatedAt: string;
}
export {};
