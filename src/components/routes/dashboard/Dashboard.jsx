import React from "react";
import { Container, Grid } from "@mui/material";
import Header from "@/components/custom/Header";
import NewCoinsTable from "../../tables/NewCoinsTable";
import NewPairsTable from "../../tables/NewPairsTable";
import { Summary } from "../../tables/Summary";
import MCROCTable from "../../tables/MarketCapTable";
import Vol24HrTable from "../../tables/Vol24HourTable";

function Dashboard() {
  return (
    <>
      <Header />
      <Container maxWidth="xlg" sx={{ p: 0, m: 0 }}>
        <Grid container spacing={3} gap={3} p={2} sx={{
          minHeight: "300px",
          flexWrap: { xs: "wrap", md: "nowrap" },
          alignContent: "center",
          justifyContent: "center",
          width: "100%",
          m: 0,
        }}>
          <Grid item xs={12} sm={4} md={4} lg={5} sx={{
            minHeight: "300px",
            p: "20px",
            width: "100%"
          }} className="simple-border">
            <NewCoinsTable />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={5} sx={{
            minHeight: "300px",
            p: "20px",
            width: "100%"
          }} className="simple-border">
            <NewPairsTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
