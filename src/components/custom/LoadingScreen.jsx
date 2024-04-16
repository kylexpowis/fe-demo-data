import React from "react";
import {
  Container,
  Box,
  Stack,
  LinearProgress,
  keyframes,
  Typography,
} from "@mui/material";

const fadeIn = keyframes`
    from {
    opacity: 0;
    } to {
    opacity: 1;
    }
`;

function LoadingScreen() {
  return (
    <Container
      maxWidth="true"
      disableGutters={true}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        animation: `${fadeIn} 1s ease-in-out forwards`,
        color: "inherit"
      }}
    >
      <Box sx={{ width: "100%", h: "100%" }}>
        <Stack
          sx={{ width: "100%", h: "100%", color: "primary", display: "flex" }}
          spacing={2}
        >
          <Typography
            variant="h1"
            color="primary"
            sx={{ fontWeight: 300, alignSelf: "center", pb: "15px" }}
          >
            Loading
          </Typography>
          <LinearProgress color="secondary" />
        </Stack>
      </Box>
    </Container>
  );
}

export default LoadingScreen;
