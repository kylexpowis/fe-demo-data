import React, { useState } from "react";
import { Container, Grid, Collapse, Button, Typography, Box } from "@mui/material";
import Header from "@/components/custom/Header";
import NewCoinsTable from "../../tables/NewCoinsTable";
import NewPairsTable from "../../tables/NewPairsTable";
import { Summary } from "../../tables/Summary";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Dashboard() {
  const [open, setOpen] = useState(true);

  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2} p={3} sx={{
          minHeight: "300px",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          width: "100%",
          p: 2
        }}>
          <Grid item xs={12} sx={{
            width: "100%",
            display: 'flex',
            justifyContent: 'flex-end', 
          }}>
            <Button onClick={handleCollapse} sx={{backgroundColor: 'transparent', border: 'none', color: '#6b6b6b'}}>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              <Typography variant="button" >
                {open ? "Hide Tables" : "Show Tables"}
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Collapse in={open}>
              <Box sx={{
                minHeight: "300px",
                width: "100%"
              }}>
                <NewCoinsTable />
              </Box>
            </Collapse>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Collapse in={open}>
              <Box sx={{
                minHeight: "300px",
                width: "100%"
              }}>
                <NewPairsTable />
              </Box>
            </Collapse>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{
            minHeight: "300px",
            width: "100%"
          }}>
            <Summary />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Dashboard;
