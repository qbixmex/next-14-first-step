'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import navLink from "./navigation.styles";

const Navigation = () => {

  const pathname = usePathname();

  return (
    <nav className="flex justify-end gap-4 p-6">
      <Link
        href="/"
        className={(pathname === '/' && navLink.active) + navLink.hover}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={(pathname === '/about' && navLink.active) + navLink.hover}
      >About</Link>
      <Link
        href="/pricing"
        className={(pathname === '/pricing' && navLink.active) + navLink.hover}
      >Pricing</Link>
      <Link
        href="/contact"
        className={(pathname === '/contact' && navLink.active) + navLink.hover}
      >Contact</Link>
    </nav>
  );
};

export default Navigation;
