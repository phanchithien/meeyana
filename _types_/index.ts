export interface IMenu {
    title: string;
    path: string;
};

export interface IProduct {
    title: string;
    srcFront: string;
    srcBack: string;
    price: string;
    priceSale?: string;
    color: string[];
}