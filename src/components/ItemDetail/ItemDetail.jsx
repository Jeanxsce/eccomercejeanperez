import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetails from './ItemDetail.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd =(quantity) => {
        setQuantityAdded(quantity)
    }

    return (
        <div className="containerItem">
            <article className="cardTittle">
                <header >
                    <h2>
                        {name}
                    </h2>
                </header>
                <picture >
                    <img className="ImgItem" src={img} alt="name" />
                </picture>
                <section >
                    <p>
                        Categoria: {category}
                    </p>
                    <p>
                        Descripción: {description}
                    </p>
                    <p>
                        Precio: {price}
                    </p>
                </section>
                <footer className="cardFooter">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option'>Terminar compra</Link>
                            ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            ) 
                        }
                </footer>
            </article>
        </div>
    )
}

export default ItemDetail