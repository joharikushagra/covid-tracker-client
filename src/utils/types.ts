export type CountryType = {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed?: number;
  TotalConfirmed: number;
  NewDeaths?: number;
  TotalDeaths: number;
  NewRecovered?: number;
  TotalRecovered: number;
  Date: Date;
  Premium?: any;
};

export type GlobalType = {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: Date;
}