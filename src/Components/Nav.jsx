import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
          {if token[username="admin"]}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul>
          {else}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul>
          {end}
        </nav>
    )
}

export default Nav