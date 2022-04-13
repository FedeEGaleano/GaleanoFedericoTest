const products = [
    {
        id: 1,
        name: 'REMERA "Social Distance"',
        price: '1500',
        stock: 14,
        img: './remera1.png',
        imga: './remeraA.png',
        category: 'Remera'

    },
    {
        id: 2,
        name: 'REMERA "Cute Baphomet"',
        price: '1800',
        stock: 30,
        img: './remera2.png',
        imga: './remeraB.png',
        category: 'Remera'
    },
    {
        id: 3,
        name: 'REMERA "Reading Is Fun"',
        price: '1670',
        stock: 16,
        img: './remera3.png',
        imga: './remeraC.png',
        category: 'Remera'
    },
    {
        id: 4,
        name: 'REMERA "Black MEOWGIC"',
        price: '1400',
        stock: 5,
        img: './remera4.png',
        imga: './remeraD.png',
        category: 'Remera'
    },
    {
        id: 5,
        name: 'BUZO "Cute Hail Satan"',
        price: '3500',
        stock: 4,
        img: './buzo1.png',
        imga: './buzo5.png',
        category: 'Buzo'

    },
    {
        id: 6,
        name: 'BUZO "Gatito Pentagrama"',
        price: '3800',
        stock: 12,
        img: './buzo2.png',
        imga: './buzo6.png',
        category: 'Buzo'
    },
    {
        id: 7,
        name: 'BUZO "Rayuela"',
        price: '3900',
        stock: 7,
        img: './buzo3.png',
        imga: './buzo7.png',
        category: 'Buzo'
    },
    {
        id: 8,
        name: 'BUZO "My Three Moods"',
        price: '3400',
        stock: 25,
        img: './buzo4.png',
        imga: './buzo8.png',
        category: 'Buzo'
    },

];

const product = {
    id: 1,
    name: '"Social Distance"',
    price: '1500',
    stock: 4,
    img: './remera1.png',
    imga: './remera1a.jpg',
    imgb: './remera1b.jpg',
    imgc: './remera1c.jpg',
    descr: 'Remera unisex color negro'
};

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};