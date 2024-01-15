'use client';

import {useState} from "react";

function Navbar() {

    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen((prevState) => {
            return !prevState
        });
    }


    return (
        <nav className="navbar">
            <div className="navbar-center">

                <div className="navbar__logo">
                </div>

                <div className={`navbar__toggle mobile`} onClick={handleToggle}>
                    <div className={`toggle-btn ${open ? "open" : ""}`}>
                        <span className="toggle-icon-line"></span>
                        <span className="toggle-icon-line"></span>
                        <span className="toggle-icon-line"></span>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
