'use client';

import { useEffect, useState } from 'react';
import { fetchAllCountries, fetchCountriesByRegion } from '@/api/countries';
import CountryCard from '@/Components/CountryCard/CountryCard';
import CountryToolbar from '@/Components/Toolbar/Toolbar';

export default function HomePage() {
  const [allCountries, setAllCountries] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);

  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    fetchAllCountries().then(setAllCountries);
  }, []);

  useEffect(() => {
    async function init() {

      let result = allCountries;

      if (region) {
        result = result.filter((c) => c.region?.toLowerCase() === region.toLowerCase())
      }

      if (query) {
        result = result.filter((c) =>
          c.name.common.toLowerCase().includes(query.toLowerCase())
        );
      }

      setFiltered(result);
    }

    init();
  }, [allCountries, query, region]);

  return (
    <main className="p-4">
      <CountryToolbar onSearch={setQuery} onRegionChange={setRegion} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {filtered.map((c) => (
          <CountryCard key={c.cca3} country={c} />
        ))}
      </div>
    </main>
  );
}
