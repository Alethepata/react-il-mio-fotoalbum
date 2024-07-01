import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";



import { MdDashboard } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import { BiMessageSquareDetail, BiCategory, BiExit  } from "react-icons/bi";

function Menu() {
    const { logout } = useAuth();
    
    return(
        <nav>
            <menu>
                    
                <li><NavLink to="/"><TbWorld />Sito</NavLink></li>
            
                <li className="my-2"><NavLink to="/dashboard"><MdDashboard />Home</NavLink></li>
                
                <li><NavLink to="photos/create"><CiSquarePlus />Crea</NavLink></li>

                <li className="my-2"><NavLink to="categories"><BiCategory />Categorie</NavLink></li>

                <li><NavLink to="messages"><BiMessageSquareDetail />Messaggi</NavLink></li>
                
                <li className="my-2"><button onClick={logout}><BiExit />Log out</button></li>
                
            </menu>
        </nav>
    )
  }
  
  export default Menu