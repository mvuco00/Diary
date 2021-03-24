import * as api from "../../api/index";

// action creators

export const getPosts = () => async (dispatch) => {
  try {
    // dobije se response objekt s data propertijem
    const { data } = await api.fetchPosts();
    dispatch({
      type: "FETCH_POSTS",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    // dobije se response objekt s data propertijem
    const { data } = await api.createPost(post);
    dispatch({
      type: "CREATE_POST",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
