'use client'
import { IMenu } from '@/_types_';
import { menus } from '@/constants';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarHeader() {
    return (
        <div className="bg-white w-full flex justify-between items-center lg:h-16 md:h-18 sm:h-30 fixed top-0 z-50">
            <Navbar expand="lg" className="px-3 md:w-2/5">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-xs font-medium font-sans">
                        {menus.map((item: IMenu) => (
                            <li key={item.title}>
                                <Nav.Link
                                    href="/"
                                    className="px-0.5 hover:shadow-md hover:font-bold hover:bg-slate-100"
                                >
                                    {item.title}
                                </Nav.Link>
                            </li>
                        ))}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <Navbar.Brand href="/" className="flex justify-center md:w-1/5">
                <img src="/logo.jpg" className="h-12" alt="logo" />
            </Navbar.Brand>
            <div className="flex justify-end md:w-2/5 pr-3">
                <Nav.Link href="/" className="md:w-1/8 ">
                    <img src="/search.png" className="h-4" alt="search" />
                </Nav.Link>
            </div>

        </div>
    )
}