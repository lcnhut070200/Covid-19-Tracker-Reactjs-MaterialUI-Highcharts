import { useEffect, useState } from "react";
import getCountries from "./apis/getCountries";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import Highlight from "./components/Highlight/Highlight";
import Summary from "./components/Summary/Summary";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      // console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  return (
    <>
      <CountrySelector countries={countries} />
      <Highlight />
      <Summary />
    </>
  );
}

export default App;
