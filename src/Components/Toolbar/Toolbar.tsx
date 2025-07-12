'use client';

import { useState, useEffect } from 'react';
import styles from './Toolbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    <div className={styles.toolbar}>
      <div className={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input
          className={styles.input}
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className={styles.select}
      >
        <option value="">Filter by Region</option>
        {regions.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
    </div>
  );
}
