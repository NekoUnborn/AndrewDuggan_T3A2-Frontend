import { Link } from "react-router-dom"
import { AdminNav, NavItem } from "./StylingComponents/StyledComponents"
const Admin = () => {
  const style = {
    textDecoration: 'none'
  }
    return (
        <AdminNav>
            <NavItem><Link style={style} id='home' to="/">Home</Link></NavItem>
            {/* <li><Link id='child' to="/child" id='testchild'>Children</Link></li> */}
            <NavItem><Link style={style} id='medicine' to='/medicine'>Medicine</Link></NavItem>
        </AdminNav>
    )
}

export default Admin