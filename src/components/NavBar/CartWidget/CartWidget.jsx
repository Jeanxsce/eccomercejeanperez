import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div className='containerCart '>
            <div className='buttons'>
                <img className='cart' src={cart} alt="cart-widget" />
                0
            </div>
        </div>
    )
}

export default CartWidget