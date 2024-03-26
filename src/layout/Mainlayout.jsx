import { Outlet } from "react-router-dom";
import './Mainlayout.css'
import Mainsidebar from "../components/mainSidebar/Mainsidebar";
const Mainlayout = () => {
    return (
        <div className="main-layout">
            <div >
             <Mainsidebar/>

            </div>
            <div className="content">
                <Outlet />
            </div>
         
        </div>
    );
};

export default Mainlayout;