import { NavLink } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";

function Header() {
  
  const { logout, isLoggedIn } = useAuth();

  return(
    <header>
      <nav>
        <menu>
                  
            <li><NavLink to="/">Home</NavLink></li>
                  
            {
              isLoggedIn &&
              <li><button onClick={logout}>Log out</button></li>
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