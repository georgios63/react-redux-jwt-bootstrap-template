import axios from "axios";
import { apiUrl } from "../../config/constants";

export function loading() {
  return {
    type: "spaces/start_loading",
  };
}

export const fetchSpaceById = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const token = state.user.token;

    //how to pass the token to the front end
    const response = await axios.get(`${apiUrl}/spaces/mySpace`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: "SET_USER_SPACE", payload: response.data });
    dispatch({ type: "spaces/set_space_by_id", payload: response.data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createStory =
  ({ name, content, imageUrl, spaceId }) =>
  async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;

    console.log(name, content, imageUrl, spaceId);
    const response = await axios.post(
      `${apiUrl}/spaces/mySpace`,
      {
        name,
        content,
        imageUrl,
        spaceId,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: "spaces/create_story", payload: response.data });
    dispatch(fetchSpaceById());
  };

export const updateSpace =
  ({ title, description, backgroundColor, color, id }) =>
  async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;

    const response = await axios.put(
      `${apiUrl}/spaces/mySpace`,
      {
        title,
        description,
        backgroundColor,
        color,
        id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: "spaces/update_space", payload: response.data });
    dispatch(fetchSpaceById());
  };

export const deleteStory = (id) => async (dispatch, getState) => {
  const state = getState();
  const token = state.user.token;

  await axios.delete(`${apiUrl}/spaces/mySpace`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: { id },
  });

  dispatch({ type: "spaces/delete_story" });
  dispatch(fetchSpaceById());
};
