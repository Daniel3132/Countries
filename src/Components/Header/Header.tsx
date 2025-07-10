'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem('theme');
    const isDark = stored !== 'light'; // default: dark
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
    <header className="flex justify-between items-center p-4 shadow bg-white text-black dark:bg-gray-800 dark:text-white">
      <Link href="/" className="text-lg font-bold">
        Where in the world?
      </Link>      <button onClick={toggle} className="text-sm hover:underline">
        {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}
