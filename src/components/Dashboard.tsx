import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from '../utils/gqlQuery';
import { CountryType } from "../utils/types"

import Table from "./Table";
import Chartboard from "./Chartboard";
import "../styles/Dashboard.css";

function Dashboard() {

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // FETCHING DATA USING QUERY
  const { loading, data } = useQuery(GET_COUNTRIES);

  const changeHandler = (e: any) => {
    if (e.target.value === "") {
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const filteredArray = data.countries.filter((country: CountryType) =>
      country.Country.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredArray);
  };

  return (
    <div className="dashboard-container">
      <Chartboard />
      <Table
        countries={!loading ? data.countries : []}
        searchResults={searchResults}
        isSearching={isSearching}
        changeHandler={changeHandler}
      />
    </div>
  );
}

export default Dashboard;
