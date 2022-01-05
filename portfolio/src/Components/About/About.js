import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Sabrina from "./Sabrina.jpg";
import useStyles from "./AboutStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = ({ ref }) => {
  const classes = useStyles();
  return (
    <div ref={ref}>
      <Box p={6} className={classes.root} sx={{ background: "#03011a" }}>
        <Grid
          container
          justifyContent="center"
          spacing={3}
          sx={{ paddingRight: 30, paddingLeft: 30 }}
        >
          <Grid item xs={12} sm={6}>
            <Box>
              <img
                src={Sabrina}
                alt="Sabrina"
                width="350vw"
                height="350vw"
                style={{ borderRadius: "50%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h4" color="primary">
                About Me
              </Typography>
              <Box mt={4}>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  gutterBottom
                  sx={{ marginBottom: 5 }}
                >
                  I am a developer, fluent in both backend and frontend
                  development, with base in JS and Python programming languages,
                  based out of Kolkata, India. I am a complex problem-solver
                  with analytical and driven mindset. I am dedicated to
                  achieving demanding development objectives according to tight
                  schedules while producing impeccable code. I quickly learn and
                  master new technologies while working in both team and
                  self-directed settings.
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="secondary"
                  sx={{ marginBottom: 5 }}
                  gutterBottom
                >
                  You can find me in the water dodging surfers in the crowded
                  pacific ocean trying to catch a couple of waves.
                </Typography>
                <Typography variant="overline" color="primary" gutterBottom>
                  Elsewhere
                </Typography>
              </Box>
              <Grid
                item
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                style={{
                  gap: 20,
                  color: "#fff",
                }}
              >
                <GitHubIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
                <InstagramIcon fontSize="large" />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
