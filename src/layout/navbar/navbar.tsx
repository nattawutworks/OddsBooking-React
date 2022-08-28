import React from "react";
import { Link } from "react-router-dom";
import '../layout.scss';
import logo from "../../@assets/images/logo2.svg";

const Navbar : React.FC = () => {
    return (<>
    <div className="navber-container">
        <Link to={''} className="navber-logo">
            <img src={logo} alt="" />
        </Link>
        <div className="navber-right">
            <Link to={''}>
                Logout
            </Link>
        </div>
    </div>
    </>);
}

export default Navbar;