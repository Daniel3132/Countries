"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CountrySearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) router.push(`/country/${query.toLowerCase()}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="border px-2 py-1 rounded w-full"
        placeholder="Search country (name or code)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
