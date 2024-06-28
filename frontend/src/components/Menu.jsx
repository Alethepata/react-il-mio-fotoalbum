import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Menu() {
  
    const { logout} = useAuth();
  
    return(
        <nav>
            <menu>
                    
                <li><NavLink to="/">Sito</NavLink></li>
            
                <li><NavLink to="/dashboard">Home</NavLink></li>
                
                <li><NavLink to="create">Crea</NavLink></li>
                
                <li><button onClick={logout}>Log out</button></li>
                
            </menu>
        </nav>
    )
  }
  
  export default Menu