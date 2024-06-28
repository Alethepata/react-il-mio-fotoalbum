import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Search from "../components/Search";

function Layout() {
    return (<div className="dashboard">
        <div className="row">
            <div className="col">
                <Menu/>
            </div>
            <div className="col-10">
                <Search/>
                <Outlet /> 
            </div>
        </div>
    </div>
    )
}

export default Layout;