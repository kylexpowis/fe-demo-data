import React from "react";
import Navbar from "../../custom/Navbar";
import { Typography, Container, Box } from "@mui/material";
import video from "../../../assets/video.mp4";

function LandingPage() {
  return (
    <div className="landing">
      <video
        src={video}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      ></video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          zIndex: 0,
        }}
      ></div>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Navbar />
      </Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "200px",
          }}
        >
          <Typography variant="h1" sx={{ mb: 2 }} color="primary">
            Cutting Edge Analytics.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "1.75rem", fontWeight: "300" }}
          >
            Unlock your data's potential
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default LandingPage;
