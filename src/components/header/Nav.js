import { NavLink } from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";

export default function FuntoNavbar() {
    return(
        <div className="navbar-nav navbar-nav-scroll my-2 my-lg-0">            
            <NavDropdown className="ft-dd" title="Contact" id="Contact">
                <NavLink to="/contact">Contact Us</NavLink>
            </NavDropdown>

            

            <NavDropdown className="ft-dd" title="Admin" id="Admin">
                <NavLink to="/start">Dashboard</NavLink>
                <NavLink to="/notifications">Notifications</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </NavDropdown>
            <NavDropdown className="ft-dd" title="User" id="User">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/live-bids">Live Bids</NavLink>
                <NavLink to="/my-collection">My Collection</NavLink>
                <NavLink to="/my-wallet">My Wallet</NavLink>
                <NavLink to="/notifications">Notifications</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </NavDropdown>

            

            <NavLink to="/help-center">Help Center</NavLink>
        </div>
    )
}