'use client';

import { StudentsUnionIcon } from '@/icons/StudentsUnionIcon';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface NavbarItem {
  name: string;
  href: string;
}

const navbarItems: NavbarItem[] = [
  {
    name: 'Aktualności',
    href: '/',
  },
  {
    name: 'Posiedzenia',
    href: '/meetings',
  },
  {
    name: 'Uchwały',
    href: '/resolutions',
  },
  {
    name: 'Struktura organizacyjna',
    href: '/structure',
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed flex flex-row w-screen px-8 py-4 lg:px-16 lg:py-6">
      <div>
        <Link href={'/'}>
          <StudentsUnionIcon size={80} />
        </Link>
      </div>

      <div className="flex ml-auto justify-center items-center">
        <div className="lg:flex hidden">
          <div className="flex flex-row gap-8 uppercase font-bold text-gray-700">
            {navbarItems.map((item) => (
              <Link href={item.href} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
          <div></div>
        </div>
        <div className="lg:hidden flex">
          <svg width="48" height="48">
            <motion.path>
              {isMenuOpen ? (
                <X size={48} onClick={() => setIsMenuOpen(false)} />
              ) : (
                <Menu size={48} onClick={() => setIsMenuOpen(true)} />
              )}
            </motion.path>
          </svg>
        </div>
      </div>
    </nav>
  );
};
