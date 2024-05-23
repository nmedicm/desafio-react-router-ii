import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logo from "/src/assets/logo.png"

const Menu = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "activo" : "noActivo");
    return(        
        <Navbar className="menu">
            <NavLink className={setActiveClass} to="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top"></img>
            </NavLink>
            <div className="menu-options">
            <NavLink className={setActiveClass} to="/">
                Home
            </NavLink>
            <NavLink className={setActiveClass} to="/pokemones">
                Pokemones
            </NavLink>
            </div>
        </Navbar>
    )
}

export default Menu