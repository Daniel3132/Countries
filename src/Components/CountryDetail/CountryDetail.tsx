import Link from 'next/link';

export default function CountryDetail({ country }: { country: any; }) {
  const nativeNameObj = Object.values(country.name.nativeName || {})[0] as NativeName | undefined;
  const nativeName = nativeNameObj?.common ?? 'N/A'

  const population = country.population?.toLocaleString() || 'N/A';
  const tld = country.tld?.join(', ') || 'N/A';
  const currencies = country.currencies ? Object.values(country.currencies).map((c: any) => c.name).join(', ') : 'N/A';
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  const borders = country.borders || [];

  return (
    <div className="space-y-8">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 shadow rounded w-fit">
        <span className="text-lg">←</span>
        <span>Back</span>
      </Link>

      {/* Flag + details container */}
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        {/* Flag */}
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full max-w-[500px] object-contain"
        />

        {/* Country Info */}
        <div className="flex-1 space-y-6">
          {/* Name */}
          <h1 className="text-3xl font-bold">{country.name.common}</h1>

          {/* Info list */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-12 text-sm">
            <li><strong>Native Name:</strong> {nativeName}</li>
            <li><strong>Population:</strong> {population}</li>
            <li><strong>Region:</strong> {country.region}</li>
            <li><strong>Sub Region:</strong> {country.subregion}</li>
            <li><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</li>
            <li><strong>Top Level Domain:</strong> {tld}</li>
            <li><strong>Currencies:</strong> {currencies}</li>
            <li><strong>Languages:</strong> {languages}</li>
          </ul>

          {/* Border Countries */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-4">
            <strong className="whitespace-nowrap mb-2 sm:mb-0">Border Countries:</strong>
            <div className="flex flex-wrap gap-2">
              {borders.length > 0 ? (
                borders.map((b:any ) => (
                  <span key={b} className="px-3 py-1 bg-white dark:bg-gray-700 shadow rounded text-sm">
                    {b}
                  </span>
                ))
              ) : (
                <span className="text-sm">None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
