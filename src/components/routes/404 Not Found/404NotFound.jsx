import React from "react";
import Navbar from "../../custom/Navbar";
import { Typography, Container, Box } from "@mui/material";
import video from "../../../assets/video.mp4";

function NotFound() {
  return (
    <div className="notfoundauthorised" style={{ position: "relative" }}>
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
          zIndex: -2,
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
          zIndex: -1,
        }}
      ></div>

      <Box sx={{ zIndex: 1, position: "relative" }}>
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
          zIndex: 2,
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
            404 Not Found
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
export default NotFound;
