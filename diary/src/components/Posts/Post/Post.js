import React from "react";
import moment from "moment";
import useStyles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Post = ({ post }) => {
  const classes = useStyles();
  console.log(post);
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
          <Box> {moment(post.createdAt).fromNow()}</Box>
        </Box>

        <CardContent>{post.message}</CardContent>
      </CardContent>
    </Card>
  );
};

export default Post;
