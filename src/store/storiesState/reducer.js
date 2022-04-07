const initialState = {
  loading: false,
  stories: [],
};

export default function stories(state = initialState, action) {
  switch (action.type) {
    case "stories/set_stories": {
      return {
        ...state,
        loading: false,
        stories: action.payload,
      };
    }

    case "stories/start_loading": {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
}
