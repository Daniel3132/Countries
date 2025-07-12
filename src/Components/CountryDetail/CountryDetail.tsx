import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function CountryDetail({ country }: { country: any; }) {
  const nativeNameObj = Object.values(country.name.nativeName || {})[0] as {
    common: string;
  } | undefined;

  const nativeName = nativeNameObj?.common ?? 'N/A';
  const population = country.population?.toLocaleString() || 'N/A';
  const tld = country.tld?.join(', ') || 'N/A';
  const currencies = country.currencies
    ? Object.values(country.currencies).map((c: any) => c.name).join(', ')
    : 'N/A';
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';
  const borders = country.borders || [];

  return (
    <div className="space-y-8">
      {/* Back button */}
      <Link
        href="/"
        className="element inline-flex items-center gap-2 px-6 py-2 bg-element text-foreground shadow-md rounded transition hover:brightness-95 dark:hover:brightness-110"
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="text-sm" />
        <span className="text-sm font-light">Back</span>
      </Link>


      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Flag */}
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-full max-w-[500px] object-contain rounded shadow-md"
        />

        {/* Info */}
        <div className="flex-1 space-y-6 text-sm">
          <h1 className="text-3xl font-bold">{country.name.common}</h1>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-12">
            <li><strong>Native Name:</strong> {nativeName}</li>
            <li><strong>Population:</strong> {population}</li>
            <li><strong>Region:</strong> {country.region || 'N/A'}</li>
            <li><strong>Sub Region:</strong> {country.subregion || 'N/A'}</li>
            <li><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</li>
            <li><strong>Top Level Domain:</strong> {tld}</li>
            <li><strong>Currencies:</strong> {currencies}</li>
            <li><strong>Languages:</strong> {languages}</li>
          </ul>

          {/* Borders */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
            <strong className="whitespace-nowrap mb-2 sm:mb-0">Border Countries:</strong>
            <div className="flex flex-wrap gap-2">
              {borders.length > 0 ? (
                borders.map((b: string) => (
                  <span
                    key={b}
                    className="element px-3 py-1 rounded shadow-sm text-xs"
                  >
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
