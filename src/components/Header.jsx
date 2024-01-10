
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
const Header = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to='/' className="nav_logo">
                <img src={logo} alt="nav_logo"  />
            </Link>
            <ul className="nav_menu">
                <li><Link to='/profile'>Mostakem</Link></li>
                <li><Link to='/create'>Create Post</Link></li>
                <li><Link to='/authors'>Authors</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
            </ul>
            <button className="nav_toggle_btn">
                <AiOutlineClose/>
            </button>

        </div>

    </nav>
  )
}

export default Header