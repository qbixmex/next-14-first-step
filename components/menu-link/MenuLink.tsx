'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../navbar/Navbar.module.css';
import { ReactNode } from 'react';

type Props = {
  path: string,
  label?: string,
  children?: ReactNode,
};

const ActiveLink = (props: Props) => {

  const { path, label, children } = props;
  const pathname = usePathname();

  return (
    <Link
      key={path}
      href={path}
      className={
        `${styles.link} ${(pathname === path) ? styles.activeLink : ''}`.trim()
      }
    >
      {children}{label}
    </Link>
  );

};

export default ActiveLink;