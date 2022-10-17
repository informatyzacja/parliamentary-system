import React from 'react';
import Navbar from './navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container px-2 sm:px-4 mx-auto"><Navbar />{children}</div>
  )
}
