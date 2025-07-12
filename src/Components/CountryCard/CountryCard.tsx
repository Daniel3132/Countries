import Link from "next/link";
import styles from "./CountryCard.module.scss";

type Props = {
  country?: any;
  loading?: boolean;
};

export default function CountryCard({ country, loading = false }: Props) {
  if (loading) {
    return (
      <div
        className="animate-pulse rounded overflow-hidden element"
        style={{ height: 320 }}
        aria-label="Loading country card"
      >
        <div className="h-40 w-full bg-gray-300 dark:bg-gray-600" />
        <div className="p-4 space-y-2">
          <div className="h-4 w-3/4 bg-gray-400 dark:bg-gray-600 rounded" />
          <div className="h-3 w-1/2 bg-gray-400 dark:bg-gray-600 rounded" />
          <div className="h-3 w-2/3 bg-gray-400 dark:bg-gray-600 rounded" />
          <div className="h-3 w-1/3 bg-gray-400 dark:bg-gray-600 rounded" />
        </div>
      </div>
    );
  }

  return (
    <Link href={`/country/${country.cca3.toLowerCase()}`}>
      <div className={styles.card}>
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className={styles.flag}
        />
        <div className={styles.info}>
          <h2>{country.name.common}</h2>
          <ul>
            <li>
              <span>
                <strong>Population:</strong>{" "}
              </span>
              <span>{country.population?.toLocaleString() || "N/A"}</span>
            </li>
            <li>
              <span>
                <strong>Region:</strong>{" "}
              </span>
              <span>{country.region || "N/A"}</span>
            </li>
            <li>
              <span>
                <strong>Capital:</strong>{" "}
              </span>
              <span>{country.capital?.[0] || "N/A"}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
