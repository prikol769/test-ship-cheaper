export type DataUser = DataUserInvoiceAddress & DataUserBank & DataUserContact;

export interface DataUserInvoiceAddress {
    id: string;
    company: string;
    name: string;
    additional: string;
    street: string;
    postalCode: string;
    country: string;
}

export interface DataUserBank {
    IBAN: string;
    BIC: string;
    bankName: string;
}

export interface DataUserContact {
    fax: string;
    email: string;
    birthday: Date;
    homepage: string;
}
