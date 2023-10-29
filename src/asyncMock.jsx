const products = [
    {
        id: '1',
        name: 'Mesa generica',
        price: 1500,
        category: 'mesas',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tooltyp.com%2F8-beneficios-de-usar-imagenes-en-nuestros-sitios-web%2F&psig=AOvVaw3iplzqzv_jnQtpzXNI8H1s&ust=1698620584891000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDc9PfsmYIDFQAAAAAdAAAAABAEg',
        stock: 20,
        description: 'Descripcion de Mesa Generica'
    },
    { id: '2', name: 'Silla Generica', price: 1000, category: 'sillas', img: '/assets.chair.jpg', stock: '15', description: 'Descripcion de Silla Generica'},
    { id: '3', name: 'Lampara Generica', price: 1200, category: 'Lampara', img: '/assets.lamp.jpg', stock: '12', description: 'Descripcion de Lampara Generica'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}