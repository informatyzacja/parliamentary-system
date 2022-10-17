import Link from 'next/link';
import React from 'react';
import { Navbar as FlowbiteNavbar } from 'flowbite-react';

export default function Navbar() {
    return (<>
        <FlowbiteNavbar
            fluid={true}
            rounded={true}
        >
            <FlowbiteNavbar.Brand>
                <Link href="/">
                    <img
                        src="/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Logo samorządu"
                        style={{minHeight: '36px'}}
                    />
                </Link>
            </FlowbiteNavbar.Brand>
            <FlowbiteNavbar.Toggle />
            <FlowbiteNavbar.Collapse>
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="/aktualnosci" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Aktualności</Link>
                    </li>
                    <li>
                        <Link href="/posiedzenia" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Posiedzenia</Link>
                    </li>
                    <li>
                        <Link href="/uchwaly" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Uchwały</Link>
                    </li>
                    <li>
                        <Link href="/struktura" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Struktura organizacyjna</Link>
                    </li>
                    <li className='hidden'>
                        <Link href="/sprawozdania" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sprawozdania z prac</Link>
                    </li>
                </ul>
            </FlowbiteNavbar.Collapse>
        </FlowbiteNavbar>
    </>);
}
