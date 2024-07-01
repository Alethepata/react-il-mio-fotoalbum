import { NavLink } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";

function Header() {
  
  const { isLoggedIn } = useAuth();

  return(
    <header>
      <nav>
        <menu className="d-flex gap-2">
                  
            <li><NavLink to="/">Home</NavLink></li>
                  
            {
              isLoggedIn &&
              <li><NavLink to="/dashboard/">Dashborad</NavLink></li>
            }
                  
            {
              !isLoggedIn &&
              <li><NavLink to="/login">Log In</NavLink></li>
            }

          
        </menu>
      </nav>
    </header>
  )
}

export default Header