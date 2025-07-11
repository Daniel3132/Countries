'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem('theme');
    const isDark = stored !== 'light';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    sessionStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        Where in the world?
      </Link>
      <button onClick={toggle} className={styles.toggle}>
        {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}
