import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-navbar">
        <span className="logo">
            <Link to="/">
                <div className="logo-inside">INSIDE</div>
                <div className="logo-workBoard">Work Board</div>
            </Link></span>
        <ul> 
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/coordinator">Coordinator</NavLink></li>
        <li><NavLink to="/">Users</NavLink></li>
        <li><NavLink to="/">Statistic</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar