import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "@/components/custom/Header";
import NewCoinsTable from "../../tables/NewCoinsTable";
import NewPairsTable from "../../tables/NewPairsTable";
import { Summary } from "../../tables/Summary";
import MCROCTable from "../../tables/MarketCapTable";
import Vol24HrTable from "../../tables/Vol24HourTable";

function Dashboard() {
  return (
    <>
      <>
        <Header />
        <Container maxWidth="xlg"> 
          <Grid container spacing={3} p={2} sx={{
            minHeight: "300px",
            flexWrap: "wrap", 
            alignContent: "center",
            justifyContent: "center",
            width: "100%",
            m: 0,
          }}>
            <Grid item xs={12} sm={12} md={12} lg={6} sx={{
              minHeight: "300px",
              p: "20px",
              width: "100%"
            }}>
              <NewCoinsTable />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} sx={{
              minHeight: "300px",
              p: "20px",
              width: "100%"
            }}>
              <NewPairsTable />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{
              minHeight: "300px",
              p: "20px",
              width: "100%"
            }}>
              <Summary />
            </Grid>
          </Grid>
        </Container>
      </>
    </>
  );
}

export default Dashboard;
