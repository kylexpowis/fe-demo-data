import React from "react";
import { Container, Grid } from "@mui/material";
import Header from "@/components/custom/Header";
import MCROCTable from "../../tables/MarketCapTable";
import Vol24HrTable from "../../tables/Vol24HourTable";

function Rankings() {
    return (
        <>
            <Header />
            <Container maxWidth="xlg">
                <Grid container spacing={2} p={2} sx={{
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
                        <Vol24HrTable />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} sx={{
                        minHeight: "300px",
                        p: "20px",
                        width: "100%"
                    }}>
                        <MCROCTable />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Rankings;