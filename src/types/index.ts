

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
};

interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
};

interface IAddress {
    city: string;
    geo: {
        lat: string;
        lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
};

export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
    company: ICompany;
    address: IAddress
};