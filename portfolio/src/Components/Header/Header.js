import React from "react";
import { Typography, Box, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { fontFamily } from "@mui/system";
import "./animatio.scss";
import useStyles from "./HeaderStyles";

const Header = ({ scroll }) => {
  const classes = useStyles();

  return (
    <div className="root">
      <Box p={4} className={classes.root}>
        <Box className={classes.container}>
          <Typography variant="h5" color="secondary">
            Hello
          </Typography>
          <Typography variant="h2" color="primary">
            I am <span className={classes.name}>Sabrina Gujral</span>{" "}
          </Typography>
          <Typography variant="h4" color="secondary">
            <span className={classes.profession}>Web Developer.</span>
          </Typography>
        </Box>

        <Fab className={classes.upIcon} color="secondary" onClick={scroll}>
          <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
      </Box>
    </div>
  );
};

export default Header;
