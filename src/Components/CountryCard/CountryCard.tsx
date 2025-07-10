import Link from 'next/link';

export default function CountryCard({ country }: { country: any; }) {
  return (
    <Link href={`/country/${country.cca3.toLowerCase()}`}>
      <div className="p-4 border rounded hover:shadow">
        <img src={country.flags.svg} alt={country.flags.alt} className="h-24 w-full object-cover" />
        <h2 className="mt-2 font-bold">{country.name.common}</h2>
        <p className="text-sm">{country.capital?.[0]}</p>
      </div>
    </Link>
  );
}
