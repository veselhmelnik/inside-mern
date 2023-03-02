import { useContext } from "react"
import { NavLink } from "react-router-dom"
import AuthContext from "../context/AuthContext"

const Navbar = () => {
    const auth = useContext(AuthContext);

    const logoutHandler = e => {
        e.preventDefault();
        auth.logout();
    }
  return (
    <nav>
    <div className="nav-wrapper blue darken-1" style={{padding: '0.2rem'}}>
      <span className="brand-logo">Сокращение ссылок</span>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/links">Links</NavLink></li>
        <li><a href="/" onClick={logoutHandler}>LogOut</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar