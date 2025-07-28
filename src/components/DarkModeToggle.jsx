import React, { useEffect } from 'react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add('dark') : html.classList.remove('dark');
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full shadow-md hover:scale-105 transition"
    >
      {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
    </button>
  );
}
