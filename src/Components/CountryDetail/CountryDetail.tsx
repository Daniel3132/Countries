export default function CountryDetail({ country }: { country: any; }) {
  return (
    <div>
      <img src={country.flags.svg} alt={country.flags.alt} className="w-64 mb-4" />
      <h1 className="text-2xl font-bold">{country.name.official}</h1>
      <p className="mt-2"><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Code:</strong> {country.cca3}</p>
    </div>
  );
}
