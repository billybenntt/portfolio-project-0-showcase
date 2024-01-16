'use client';

import {useState} from "react";
import DBorder from "@/components/DBorder";

function Navbar() {

    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen((prevState) => {
            return !prevState
        });
    }

    const text = `\{\(\) \=\> Bill\}`

    return (
        <nav className="navbar show-box">
            <div className="navbar-center">
                <DBorder>
                    <div className="navbar__logo">
                        <span>{text}</span>
                    </div>
                </DBorder>

                <div className="navbar__menu desktop show-box">
                    <span>hola</span>
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
