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
