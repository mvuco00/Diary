import React, { useEffect } from "react";
import { Container, Grid, Grow, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
import { getPosts } from "../../store/actions/posts";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Form />
          <Posts />
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
