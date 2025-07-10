const BASE_URL = 'https://restcountries.com/v3.1';

export async function fetchAllCountries(fields = 'name,capital,flags,cca3,region') {
  const res = await fetch(`${BASE_URL}/all?fields=${fields}`);
  if (!res.ok) throw new Error('Failed to fetch countries');
  return res.json();
}

export async function fetchCountryByCode(code: string) {
  const res = await fetch(`${BASE_URL}/alpha/${code}`);
  if (!res.ok) throw new Error('Country not found');
  return res.json();
}

export async function searchCountryByName(name: string) {
  const res = await fetch(`${BASE_URL}/name/${name}`);
  if (!res.ok) return [];
  return res.json();
}

export async function fetchCountriesByRegion(region: string) {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  if (!res.ok) throw new Error('Region not found');
  return res.json();
}
