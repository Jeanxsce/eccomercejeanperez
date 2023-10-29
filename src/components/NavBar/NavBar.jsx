import CartWidget from "./CartWidget/CartWidget"
import 'bootstrap/dist/css/bootstrap.css'
import './styles/NavBar.css'

const NavBar = () => {
    return (
        
        <div className="container">
            <nav>
                <h3>Eccomerce Jean Perez</h3>
                <div >
                    <button className="buttons">Mesas</button>
                    <button className="buttons">Sillas</button>
                    <button className="buttons">Lamparas</button>

                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar