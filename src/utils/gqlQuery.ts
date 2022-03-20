import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      Country
      CountryCode
      Slug
      NewConfirmed
      TotalConfirmed
      NewDeaths
      TotalDeaths
      NewRecovered
      TotalRecovered
      Date
    }
  }
`;

export const GET_GLOBAL = gql`
  query {
    global {
      NewConfirmed
      TotalConfirmed
      NewDeaths
      TotalDeaths
      NewRecovered
      TotalRecovered
    }
  }
`;