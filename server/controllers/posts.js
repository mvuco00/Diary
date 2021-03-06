// sva logika za rute da ne bude pretrpano
import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  // post request has access to req.body
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  // provjera je li dobiveni id stvarno mongoose objekt
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted sucessfully" });
};
