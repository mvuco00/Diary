import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { deletePost } from "../../../store/actions/posts";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.box}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {post.title}
          </Typography>
          <Box> {moment(post.createdAt).format("DD/MM/YYYY")}</Box>
        </Box>
        <CardContent>{post.message}</CardContent>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" onClick={() => dispatch(deletePost(post._id))}>
          <ClearIcon className={classes.clearIcon} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
