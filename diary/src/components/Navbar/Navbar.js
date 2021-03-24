import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import logo from "../../images/journal.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <img
        src={logo}
        alt="sun-and-moon"
        className={classes.image}
        height="60"
      />
      <Typography className={classes.heading} variant="h2" align="center">
        Diary
      </Typography>
    </AppBar>
  );
};

export default Navbar;
