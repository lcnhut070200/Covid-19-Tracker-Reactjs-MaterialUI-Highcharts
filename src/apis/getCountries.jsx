import axios from "axios";

const getCountries = () => axios.get("https://api.covid19api.com/countries");
export default getCountries;
