export interface Country {
  name: { common: string; official: string; };
  capital?: string[];
  flags: { svg: string; alt?: string; };
  cca3: string;
}
