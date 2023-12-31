import React, { useState } from "react"
import ItemCounter from './ItemCounter.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }


    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="containerOfBuy">
            <div className="incrementButton">
                <button className="buttons" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="buttons" onClick={increment}>+</button>
            </div>
            <div>
                <button className="buttons" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al Carrito </button>
            </div>
        </div>
    )
}

export default ItemCount
