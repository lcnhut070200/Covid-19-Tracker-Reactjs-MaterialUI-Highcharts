import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis/getApis";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import Highlight from "./components/Highlight/Highlight";
import Summary from "./components/Summary/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);

      setSelectedCountryID("vn");
    });
  }, []);

  const handleOnchange = (e) => {
    setSelectedCountryID(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryID) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryID
      );

      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryID]);

  return (
    <>
      <CountrySelector
        countries={countries}
        handleOnchange={handleOnchange}
        value={selectedCountryID}
      />
      <Highlight report={report} />
      <Summary report={report} selectedCountryID={selectedCountryID} />
    </>
  );
}

export default App;
