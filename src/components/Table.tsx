import { ReactElement, ReactNode } from "react";
import { CountryType } from "../utils/types";

import "../styles/Table.css";

interface ITableProps {
  countries: CountryType[];
  searchResults: CountryType[];
  isSearching: boolean;
  changeHandler: (e: any) => void;
}

function Table({
  countries,
  searchResults,
  isSearching,
  changeHandler,
}: ITableProps) {
  return (
    <div className="container">
      {!countries.length ? (
        <div>Loading.....</div>
      ) : (
        <>
          <h2 className="container__heading">CountryWise Covid 19 Stats</h2>
          <div className="container__input">
            <input
              type="text"
              placeholder="Search Country"
              onKeyUp={changeHandler}
            />
          </div>
          <div
            className={`${
              isSearching && !searchResults.length
                ? "container__no-result"
                : "container__table"
            }`}
          >
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Total Confirmed Cases</th>
                  <th>Total Recoverd Cases</th>
                  <th>Total Deceased Cases</th>
                </tr>
              </thead>
              <tbody>
                {isSearching
                  ? searchResults.length
                    ? searchResults.map(
                        (country: CountryType, idx: number): ReactElement => {
                          return (
                            <tr key={idx}>
                              <td>{country.Country}</td>
                              <td>{country.TotalConfirmed}</td>
                              <td>{country.TotalRecovered}</td>
                              <td>{country.TotalDeaths}</td>
                            </tr>
                          );
                        }
                      )
                    : "No Results to Display"
                  : countries.map(
                      (country: CountryType, idx: number): ReactNode => {
                        return (
                          <tr key={idx}>
                            <td>{country.Country}</td>
                            <td>{country.TotalConfirmed}</td>
                            <td>{country.TotalRecovered}</td>
                            <td>{country.TotalDeaths}</td>
                          </tr>
                        );
                      }
                    )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Table;
