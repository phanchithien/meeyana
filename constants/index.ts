import { IMenu, IProduct } from '../_types_';

export const menus: IMenu[] = [
    { title: "TRANG CHỦ", path: "/" },
    { title: "SẢN PHẨM", path: "/" },
    { title: "BỘ SƯU TẬP", path: "/" },
    { title: "BẢNG SIZE", path: "/" },
    { title: "VỀ CHÚNG TÔI", path: "/" }
]

export const products: IProduct[] = [
    {
        title: "Red shirt",
        srcFront: "/images/products/red_front.jpg",
        srcBack: "/images/products/red_back.jpg",
        price: "200.000 VNĐ",
        color: [
            "#b46565",
            "blue",
            "yellow",
        ]
    },
    {
        title: "White shirt",
        srcFront: "/images/products/white_front.jpg",
        srcBack: "/images/products/white_back.jpg",
        price: "200.000 VNĐ",
        color: [
            "red",
            "#b46565",
            "yellow",
        ]
    },
    {
        title: "White shirt",
        srcFront: "/images/products/white_front.jpg",
        srcBack: "/images/products/white_back.jpg",
        price: "200.000 VNĐ",
        color: [
            "red",
            "#b46565",
            "yellow",
        ]
    },{
        title: "White shirt",
        srcFront: "/images/products/white_front.jpg",
        srcBack: "/images/products/white_back.jpg",
        price: "200.000 VNĐ",
        color: [
            "red",
            "#b46565",
            "yellow",
        ]
    },{
        title: "White shirt",
        srcFront: "/images/products/white_front.jpg",
        srcBack: "/images/products/white_back.jpg",
        price: "200.000 VNĐ",
        priceSale: "100.000 VNĐ",
        color: [
            "red",
            "#b46565",
            "yellow",
        ]
    },{
        title: "White shirt",
        srcFront: "/images/products/white_front.jpg",
        srcBack: "/images/products/white_back.jpg",
        price: "200.000 VNĐ",
        color: [
            "red",
            "#b46565",
            "yellow",
        ]
    }
    
]