import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/child" id='testchild'>Children</Link></li>
            <li><Link to='/medicine'>Medicine</Link></li>
          </ul>
        </nav>
    )
}

export default Admin