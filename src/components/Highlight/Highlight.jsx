import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

const Highlight = ({ report }) => {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirm",
    },
    {
      title: "Số ca khỏi",
      count: data.Recovered,
      type: "recover",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map((item, index) => {
        return (
          <Grid item sm={4} xs={12} key={index}>
            <HighlightCard
              title={item.title}
              count={item.count}
              type={item.type}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Highlight;
