export interface Certification {
  name: string;
  nameEn: string;
  date: string;
  issuer: string;
  issuerEn: string;
  url?: string;
  highlight?: boolean;
  category: "security" | "kubernetes" | "general";
}

export interface Award {
  title: string;
  titleEn: string;
  issuer: string;
  issuerEn: string;
  date: string;
  highlight?: boolean;
}

export const certifications: Certification[] = [];

export const awards: Award[] = [];
