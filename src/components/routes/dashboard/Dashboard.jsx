import React from "react";
import NewCoinTable from "../../tables/NewCoinTable";
import { Summary } from "../../tables/Summary";
import { SingleCoinSummary } from "../singleCoin/SingleCoinSummary";
import NewPairTable from "../../tables/NewPairTable";
import MCROCTable from "../../tables/MCTable";
import Vol24HrTable from "../../tables/Vol24HourTable";
import { Container, Grid, Typography } from "@mui/material";
import DashboardHeader from "@/components/ui/DashboardHeader";

function Dashboard() {
  return (
    <>
      <div>
        <DashboardHeader  />
      </div>
      <div className="main-container">
        <Container maxWidth="xl" sx={{ padding: "0", margin: "0" }}>
          <Grid
            container
            spacing={3}
            gap={3}
            p={2}
            sx={{
              minHeight: "300px",
              flexWrap: { xs: "wrap", md: "nowrap" },
              alignContent: "center",
              justifyContent: "center",
              width: "100%",
              margin: "0",
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              sx={{ minHeight: "300px", padding: "20px", width: "100%" }}
              className="simple-border"
            >
              <NewCoinTable />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              sx={{ minHeight: "300px", padding: "20px", width: "100%" }}
              className="simple-border"
            >
              <NewPairTable />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              sx={{ minHeight: "300px", padding: "20px", width: "100%" }}
              className="simple-border"
            >
              <Summary />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              minHeight: "350px",
              flexWrap: { xs: "nowrap" },
              alignContent: "center",
              justifyContent: "center",
              width: "100%",
              margin: "0",
              padding: "0",
            }}
          >
            <Grid item xs={12} p={0} margin={0}>
              <MCROCTable />
            </Grid>
            <Grid item xs={12} p={0} margin={0}>
              <Vol24HrTable />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
