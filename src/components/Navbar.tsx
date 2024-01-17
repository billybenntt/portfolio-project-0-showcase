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
        <nav className="navbar">
            <div className="navbar-center show-box">
                <DBorder>
                    <div className="navbar__logo">
                        <span>{text}</span>
                    </div>
                </DBorder>

                <div className="navbar__menu desktop">
                    <div className="navbar__menu-center">
                        <div>Home</div>
                        <div>About Me</div>
                        <div>Projects</div>
                        <div>FAQ</div>
                        <div>Contact</div>
                    </div>
                </div>

                <div className={`navbar__toggle mobile`} onClick={handleToggle}>
                    <div className="menu-container">
                        <div className={`menu-icon ${open ? "open" : ""}`}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar
