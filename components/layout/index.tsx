'use client'
import { Menu } from '../../lib/types';
import data from '../../lib/data.json';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarHeader() {
    return (
        <div className="bg-white w-full flex justify-between items-center fixed top-0 z-50">
            <Navbar expand="lg" className="px-3 md:w-2/5">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-xs">
                        {data.menu.map((item: Menu) => (
                            <li key={item.title}>
                                <Nav.Link
                                    href="/"
                                    className="px-0.5"
                                >
                                    {item.title}
                                </Nav.Link>
                            </li>
                        ))}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <Navbar.Brand href="/" className="flex justify-center md:w-1/5">
                <img src="/logo.jpg" className="h-8" alt="logo" />
            </Navbar.Brand>
            <Navbar.Brand href="/" className="flex justify-end md:w-2/5 px-3">
                <img src="/search.png" className="h-4" alt="search" />
            </Navbar.Brand>
        </div>
    )
}