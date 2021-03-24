import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { createPost } from "../../store/actions/posts";
const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6">What happened today?</Typography>

        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="dear diary..."
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          type="submit"
          size="large"
          fullWidth
        >
          submit
        </Button>
        <Button
          className={classes.buttonReset}
          variant="contained"
          onClick={clear}
          size="large"
          fullWidth
        >
          reset
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
