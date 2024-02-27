import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {Grip} from 'lucide-react';
import Link from "next/link";
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation'
import {jetBrainsMono} from "@/styles/fonts/fonts";

function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname()

    function toggleMenu() {
        setMenuOpen(prevState => !prevState);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    useEffect(() => {
        function handleResize() {
            closeMenu();
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className={`mobile-menu mobile`}>
            <DropdownMenu.Root
                modal={true}
                open={menuOpen}
                onOpenChange={toggleMenu}>
                <DropdownMenu.Trigger asChild>
                    <button aria-label="Customise options">
                        <Grip/>
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        sideOffset={18}
                        hideWhenDetached={true}
                        sticky="partial"
                        className={`menu-content  ${jetBrainsMono.className}`}>

                        <DropdownMenu.Item className="mobile-menu_item">
                            <Link href="/" onClick={closeMenu} className={`menu__item ${pathname === '/' ? 'active' : ''}`}>
                                <span>Home</span>
                            </Link>
                        </DropdownMenu.Item>


                        <DropdownMenu.Item className="mobile-menu_item">
                            <Link href="/projects" onClick={closeMenu} className={`menu__item ${pathname === '/projects' ? 'active' : ''}`}>
                                <span>Projects</span>
                            </Link>
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className="mobile-menu_item">
                            <Link href="/faq" onClick={closeMenu} className={`menu__item ${pathname === '/faq' ? 'active' : ''}`}>
                                <span>FAQ</span>
                            </Link>
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className="mobile-menu_item">
                            <Link href="/about" onClick={closeMenu} className={`menu__item ${pathname === '/about' ? 'active' : ''}`}>
                                <span>About</span>
                            </Link>
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className="mobile-menu_item">
                            <Link href="/contact" onClick={closeMenu} className={`menu__item ${pathname === '/contact' ? 'active' : ''}`}>
                                <span>Contact</span>
                            </Link>
                        </DropdownMenu.Item>


                        {/* Other menu items */}
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>
    );
}

export default MobileMenu;
