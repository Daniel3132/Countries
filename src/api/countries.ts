import { showToast } from '@/lib/toast';

const BASE_URL = 'https://restcountries.com/v3.1';

const fetchJson = async (url: string) => {
  try {
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    return res.json();
  } catch (err) {
    const msg = (err as Error).message || 'Unknown error';
    showToast(msg);
    throw err;
  }
};

export async function fetchAllCountries(fields = 'name,flags,population,region,cca3,capital') {
  return fetchJson(`${BASE_URL}/all?fields=${fields}`);
}

export async function fetchCountryByCode(code: string) {
  return fetchJson(`${BASE_URL}/alpha/${code}`);
}

export async function searchCountryByName(name: string) {
  try {
    return await fetchJson(`${BASE_URL}/name/${name}`);
  } catch {
    showToast('No countries found with that name');
    return [];
  }
}

export async function fetchCountriesByRegion(region: string) {
  return fetchJson(`${BASE_URL}/region/${region}`);
}
