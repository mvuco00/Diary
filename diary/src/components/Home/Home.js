import React, { useEffect } from "react";

import { Container, Grid, AppBar, Grow, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
import logo from "../../images/journal.png";
import { getPosts } from "../../store/actions/posts";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
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
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
