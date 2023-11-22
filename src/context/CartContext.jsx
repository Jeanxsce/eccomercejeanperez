import { useState, createContext, useContext } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.log('el producto ya esta agregado')
        }
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.price * prod.quantity
        })

        return total
    }

    const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, clearCart, removeItem, isInCart, totalQuantity, total, addItem }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
