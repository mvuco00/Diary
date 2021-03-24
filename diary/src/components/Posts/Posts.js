import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return (
    <div className={classes.posts}>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
