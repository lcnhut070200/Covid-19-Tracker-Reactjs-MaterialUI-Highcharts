import { Grid } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import LineChart from "../Charts/LineChart/LineChart";
import HightMaps from "../Charts/HighMaps/HighMaps";

const Summary = ({ report, selectedCountryID }) => {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectedCountryID) {
      import(
        `@highcharts/map-collection/countries/${selectedCountryID}/${selectedCountryID}-all.geo.json`
      ).then((res) => setMapData(res));
    }
  }, [selectedCountryID]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report} />
      </Grid>
      <Grid item sm={4} xs={12}>
        <HightMaps mapData={mapData} />
      </Grid>
    </Grid>
  );
};

export default Summary;
