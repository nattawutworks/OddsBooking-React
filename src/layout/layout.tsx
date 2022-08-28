import React from "react";
import './layout.scss';
import Navbar from "./navbar/navbar";

interface LayoutProps {
    children : React.ReactNode;
}

const Layout : React.FC<LayoutProps> = ({children}) => {
    return (
    <div className="layout">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main-layout">
            {children}
        </div>
    </div>);
}

export default Layout;