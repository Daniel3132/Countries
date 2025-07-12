"use client";

import { useEffect, useState } from "react";
import { fetchAllCountries } from "@/api/countries";
import CountryCard from "@/Components/CountryCard/CountryCard";
import CountryToolbar from "@/Components/Toolbar/Toolbar";

export default function HomePage() {
  const [allCountries, setAllCountries] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetchAllCountries()
      .then((data) => {
        setAllCountries(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = allCountries;

    if (region)
      result = result.filter(
        (c) => c.region?.toLowerCase() === region.toLowerCase(),
      );
    if (query)
      result = result.filter((c) =>
        c.name.common.toLowerCase().includes(query.toLowerCase()),
      );

    setFiltered(result);
  }, [allCountries, query, region]);

  const skeletons = Array.from({ length: 8 });

  return (
    <main className="p-4">
      <CountryToolbar onSearch={setQuery} onRegionChange={setRegion} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {loading
          ? skeletons.map((_, i) => <CountryCard key={i} loading />)
          : filtered.map((c) => <CountryCard key={c.cca3} country={c} />)}
      </div>
    </main>
  );
}
