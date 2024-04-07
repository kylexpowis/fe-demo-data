import React from "react";
import NewCoinsTable from "../../tables/NewCoinsTable";
import { Summary } from "../../tables/Summary";
import NewPairsTable from "../../tables/NewPairsTable";
import MCROCTable from "../../tables/MarketCapTable";
import Vol24HrTable from "../../tables/Vol24HourTable";
import { Container, Grid } from "@mui/material";
import Header from "@/components/custom/Header";

function Dashboard() {
  return (
    <>
      <div>
        <Header/>
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
              <NewCoinsTable />
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
              <NewPairsTable />
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
