import CartWidget from "./CartWidget/CartWidget"
import 'bootstrap/dist/css/bootstrap.css'
import './styles/NavBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (

        <div className="container">
            <nav>
                <Link to='/'>
                    <h3 className="tittleMain">Eccomerce Jean Perez</h3>
                </Link>
                <div >
                    <NavLink to={`category/Mesas`} className= {({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Mesas</NavLink>
                    <NavLink to={`category/Sillas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Sillas</NavLink>
                    <NavLink to={`category/lamparas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Lamparas</NavLink>
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar