'use client';

import {useState} from "react";
import DBorder from "@/components/DBorder";
import Link from "next/link";

function Navbar() {

    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen((prevState) => {
            return !prevState
        });
    }

    const text = `\{\(\) \=\> MyPortfolio\}`

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <DBorder>
                    <div className="navbar__logo">
                        <span>{text}</span>
                    </div>
                </DBorder>

                <div className="navbar__menu desktop">
                    <div className="navbar__menu-center">
                        <Link href={"/"}>
                            <div>Home</div>
                        </Link>
                        <Link href={"/projects"}>
                            <div>Projects</div>
                        </Link>
                        <Link href={"/faq"}>
                            <div>FAQ</div>
                        </Link>
                        <Link href={"/about"}>
                            <div>About Me</div>
                        </Link>
                        <Link href={"/contact"}>
                            <div>Contact Me</div>
                        </Link>
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
