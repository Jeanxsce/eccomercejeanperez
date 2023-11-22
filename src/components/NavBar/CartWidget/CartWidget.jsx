import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div className='containerCart '>
            <div className='buttons'>
                <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
                <img className='cart ' src={cart} alt="cart-widget" />
                { totalQuantity }
                </Link>
            </div>
        </div>
    )
}

export default CartWidget