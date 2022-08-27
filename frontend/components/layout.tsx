import React from 'React';
import Navbar from './navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
      <>
        <Navbar />
        <div className="container px-2 sm:px-4">{children}</div>
      </>
    )
  }
