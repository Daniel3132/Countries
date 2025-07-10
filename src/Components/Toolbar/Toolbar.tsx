'use client';

import { useState, useEffect } from 'react';

type Props = {
  onSearch: (query: string) => void;
  onRegionChange: (region: string) => void;
};

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function CountryToolbar({ onSearch, onRegionChange }: Props) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    onSearch(query);
  }, [query]);

  useEffect(() => {
    onRegionChange(region);
  }, [region]);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
      <input
        className="w-full md:w-1/2 px-4 py-2 rounded shadow bg-white text-black dark:bg-gray-700 dark:text-white"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="px-4 py-2 rounded shadow bg-white text-black dark:bg-gray-700 dark:text-white"
      >
        <option value="">Filter by Region</option>
        {regions.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
    </div>
  );
}
