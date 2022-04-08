import axios from "axios";
import { apiUrl } from "../../config/constants";

export function loading() {
  return {
    type: "stories/start_loading",
  };
}

export const fetchStories = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/spaces/stories/${id}`);
    console.log(response.data);

    dispatch({ type: "stories/set_stories", payload: response.data });
  } catch (error) {
    console.error(error.message);
  }
};
