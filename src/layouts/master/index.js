import React from "react";
import NavbarComponent from "../../components/navbar";

function MasterLayout({ children }) {
    return (
        <React.Fragment>
            <NavbarComponent />
            {children}
        </React.Fragment>
    );
}

export default MasterLayout;