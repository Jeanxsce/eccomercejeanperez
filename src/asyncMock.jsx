const products = [
    {
        id: '1',
        name: 'Mesa generica',
        price: 1500,
        category: 'Mesas',
        img: 'https://f.fcdn.app/imgs/dcc027/www.nyr.com.uy/nyruy/9fbe/original/catalogo/MB-MESACOMEDOR-RINNOCH_AMD_1/2000-2000/mesa-de-comedor-rinno-chica-140-almendra.jpg',
        stock: 20,
        description: 'Descripcion de Mesa Generica'
    },
    { id: '2', name: 'Silla Generica', price: 1000, category: 'Sillas', img: 'https://f.fcdn.app/imgs/dd8ab1/www.divino.com.uy/div/5fa8/original/catalogo/247467001_0/1500-1500/silla-de-comedor-madera-natural-beige-thonet.jpg', stock: '15', description: 'Descripcion de Silla Generica'},
    { id: '3', name: 'Lampara Generica', price: 1200, category: 'lamparas', img: 'https://www.tulampara.es/media/product/132599/354x354/toleda-lampara-colgante-h3569160-0.jpg', stock: '12', description: 'Descripcion de Lampara Generica'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.find(prod => prod.id === productId)) 
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}