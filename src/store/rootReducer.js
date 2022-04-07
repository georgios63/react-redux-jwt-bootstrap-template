import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaces from "./spaceState/reducer";
import stories from "./storiesState/reducer";

export default combineReducers({
  appState,
  user,
  spaces,
  stories,
});
