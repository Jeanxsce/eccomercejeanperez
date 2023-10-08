import CartWidget from "./CartWidget/CartWidget"



const NavBar = () =>{
    return (
        <nav>
            <h3>Eccomerce JeanPerez</h3>
            <div>
                <button>Mesas</button>
                <button>Sillas</button>
                <button>Lamparas</button>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar