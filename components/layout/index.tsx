'use client'
import { Menu } from '../../lib/types';
import data from '../../lib/data.json';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarHeader() {
    return (
        // <nav className="bg-white">
        //     <div className="flex items-center p-4 justify-between">
        //         <button
        //             data-collapse-toggle="navbar-default"
        //             type="button"
        //             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //             aria-controls="navbar-default"
        //             aria-expanded="false"
        //         >
        //             <span className="sr-only">Open main menu</span>
        //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        //             </svg>
        //         </button>
        //         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        //             <ul className="flex gap-3 text-xs md:w-1/3-700">
        //                 {data.menu.map((item: Menu) => (
        //                     <li key={item.title}>
        //                         <Link
        //                             href="/"
        //                             className=""
        //                         >
        //                             {item.title}
        //                         </Link>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //         <div className="flex justify-center md:w-1/3">
        //             <img src="/logo.jpg" className="h-8" alt="logo" />
        //         </div>
        //         <div className="flex justify-end md:w-1/3">
        //             <img src="/search.png" className="h-4" alt="search" />
        //         </div>
        //     </div>
        // </nav>
        <div className="bg-white w-full flex justify-between items-center">
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