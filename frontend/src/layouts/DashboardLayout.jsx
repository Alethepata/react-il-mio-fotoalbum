import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Search from "../components/Search";

function Layout() {
    return (<div className="dashboard vh-100 overflow-hidden">
        <div className="row h-100">
            <div className="col h-100">
                <Menu />
            </div>
            <div className="col-10 h-100 overflow-auto">
                <Search/>
                <Outlet /> 
            </div>
        </div>
    </div>
    )
}

export default Layout;