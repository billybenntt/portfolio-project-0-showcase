'use client';
import DBorder from "@/components/DBorder";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import MobileMenu from "@/components/MobileMenu";

function Navbar() {

    const pathname = usePathname()

    const text = `\{\(\) \=\> MyPortfolio\}`

    return (
        <nav className="navbar">
            <div className="navbar-center">

                <Link href={"/"}>
                    <DBorder>
                        <div className="navbar__logo">
                            <span>{text}</span>
                        </div>
                    </DBorder>

                </Link>


                <div className="navbar__menu desktop">
                    <div className="navbar__menu-center">
                        <Link href={"/"} className={`menu__item ${pathname === '/' ? 'active' : ''}`}>
                            <span>Home</span>
                        </Link>
                        <Link href={"/projects"} className={`menu__item ${pathname === '/projects' ? 'active' : ''}`}>
                            <span>Projects</span>
                        </Link>
                        <Link href={"/faq"} className={`menu__item ${pathname === '/faq' ? 'active' : ''}`}>
                            <span>FAQ</span>
                        </Link>
                        <Link href={"/about"} className={`menu__item ${pathname === '/about' ? 'active' : ''}`}>
                            <span>About Me</span>
                        </Link>
                        <Link href={"/contact"} className={`menu__item ${pathname === '/contact' ? 'active' : ''}`}>
                            <span>Contact Me</span>
                        </Link>
                    </div>
                </div>

                <MobileMenu/>

            </div>
        </nav>
    )
}

export default Navbar
