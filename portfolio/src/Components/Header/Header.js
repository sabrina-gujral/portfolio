import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { fontFamily } from "@mui/system";
import "./animatio.scss";
import useStyles from "./HeaderStyles";

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box p={4} className={classes.root}>
        <Box className={classes.container}>
          <Typography variant="h5" color="secondary">
            Hello,
          </Typography>
          <Typography variant="h2" color="primary">
            I am <span className={classes.name}>Sabrina Gujral</span>{" "}
          </Typography>
          <Typography variant="h4" color="primary">
            <span className={classes.profession}>Web Developer.</span>
          </Typography>
        </Box>
        <IconButton className={classes.upIcon} color="primary">
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Header;
