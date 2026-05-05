import { NavLink } from "react-router"
import logo from "../../public/logo.svg"
import "./Header.css"

export default function Header () {
    return (
        <div className="header-container">
            <div className="header-logo-container">
                <img src={logo} alt="Logo" />
            </div>
            <div className="header-pages-container">
                <NavLink to="/" className={({isActive}) => isActive ? "header-page-active" : "header-page-inactive"}>Home</NavLink>
                <NavLink to="/dns-lookup" className={({isActive}) => isActive ? "header-page-active" : "header-page-inactive"}>DNS Lookup</NavLink>
                <NavLink to="/ip-info" className={({isActive}) => isActive ? "header-page-active" : "header-page-inactive"}>IP Info</NavLink>
                <NavLink to="/port-checker" className={({isActive}) => isActive ? "header-page-active" : "header-page-inactive"}>Port Checker</NavLink>
            </div>
        </div>
    )
}