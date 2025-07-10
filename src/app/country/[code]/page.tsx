import { fetchCountryByCode } from '@/api/countries';
import CountryDetail from '@/Components/CountryDetail/CountryDetail';

export default async function CountryPage({ params }: { params: Promise<{ code: string; }>; }) {
  const { code } = await params;
  const [country] = await fetchCountryByCode(code);

  return (
    <main className="p-4">
      <CountryDetail country={country} />
    </main>
  );
}
