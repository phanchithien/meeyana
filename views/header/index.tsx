'use client'
import { IMenu } from '@/_types_';
import { menus } from '@/constants';
import Link from 'next/link';
import Toggle from './components/Toggle';

export default function HeaderView() {
    return (
        <div className="bg-white w-full flex justify-between items-center h-16 fixed top-0 z-50">
            <div className="flex justify-start w-full h-full text-xs items-center px-3 md:w-2/5 base:max-lg:hidden">
                {menus.map((item: IMenu) => (
                    <div key={item.title} className='hover:shadow-md hover:font-bold p-2'>
                        <Link
                            href="/"
                            className="px-0.5 "
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="pl-2 md:w-2/5 lg:hidden">
                <Toggle/>
            </div>
            <Link href="/" className="flex justify-center md:w-1/5">
                <img src="/logo.jpg" className="h-12" alt="logo" />
            </Link>
            <div className="flex justify-end md:w-2/5 pr-3">
                <Link href="/" className="md:w-2/8 ">
                    <img src="/search.png" className="h-4" alt="search" />
                </Link>
            </div>

        </div>
    )
}