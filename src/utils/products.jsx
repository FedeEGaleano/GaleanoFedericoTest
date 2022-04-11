const products = [
    {
        id: 1,
        name: 'Remera 1',
        price: '$1500',
        stock: 4,
        img: 'https://xcx-clothes.000webhostapp.com/images/remera1.png'

    },
    {
        id: 2,
        name: 'Remera 2',
        price: '$1800',
        stock: 10,
        img: 'https://xcx-clothes.000webhostapp.com/images/remera2.png'
    },
    {
        id: 3,
        name: 'Remera 3',
        price: '$1670',
        stock: 4,
        img: 'https://xcx-clothes.000webhostapp.com/images/remera4.png'
    },
    {
        id: 4,
        name: 'Remera 4',
        price: '$1400',
        stock: 15,
        img: 'https://xcx-clothes.000webhostapp.com/images/remera4.png'
    }
];

const product = {
    id: 1,
    name: '"Social Distance"',
    price: '$1500',
    stock: 4,
    img: 'https://xcx-clothes.000webhostapp.com/images/remera1.png',
    imga: './remera1a.jpg',
    imgb: './remera1b.jpg',
    imgc: './remera1c.jpg',
    descr: 'Remera unisex color negro'
};

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};