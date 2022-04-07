import axios from "axios";
import { apiUrl } from "../../config/constants";

// action to set loading to true
export function loading() {
  return {
    type: "spaces/start_loading",
  };
}

export async function fetchSpaces(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/spaces`);
    dispatch({ type: "spaces/set_spaces", payload: response.data });
  } catch (error) {
    console.error(error.message);
  }
}
