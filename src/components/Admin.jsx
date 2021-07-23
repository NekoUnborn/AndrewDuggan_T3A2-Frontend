import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <nav>
          <ul>
            <li><Link id='home' to="/">Home</Link></li>
            <li><Link id='child' to="/child" id='testchild'>Children</Link></li>
            <li><Link id='medicine' to='/medicine'>Medicine</Link></li>
          </ul>
        </nav>
    )
}

export default Admin