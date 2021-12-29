import React from "react";
import { Typography, Box, Grid, Divider } from "@mui/material";
import { fontFamily } from "@mui/system";

const Header = () => {
  return (
    <>
      <Box p={4}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={8}>
            <Box ml={10} mt={5}>
              <Typography variant="h4" color="secondary">
                Hello,
              </Typography>
              <Typography variant="h2" color="primary">
                I am{" "}
                <span
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "5rem",
                    letterSpacing: "0.3rem",
                  }}
                >
                  Sabrina Gujral
                </span>{" "}
                and I am a Full Stack Web Developer.
              </Typography>
            </Box>
            <Divider sx={{ color: "#fff" }} orientation="horizontal" />
          </Grid>
          <Grid item sm={4}>
            <Box></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
