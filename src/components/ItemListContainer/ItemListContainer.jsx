import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
                console.log(response)
            })
            // .cath(error => {
            //     console.error(error)
            // })
    }, [])
    

    return (
        <div>
            <h1 className="tittleMain">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer