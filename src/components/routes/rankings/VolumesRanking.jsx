import React from 'react'
import { Container, Grid } from "@mui/material";
import Header from "@/components/custom/Header";
import Vol24HrTable from "../../tables/Vol24HourTable";

function VolumesRanking() {
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
                    p: 0,
                    pt: '15px'
                }}>
                    <Grid item xs={12} sm={12} md={12} lg={10} sx={{
                        minHeight: "300px",
                        p: "20px",
                        width: "100%"
                    }}>
                        <Vol24HrTable />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default VolumesRanking;