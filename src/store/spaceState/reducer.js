const initialState = {
  loading: false,
  spaces: [],
};

export default function spaces(state = initialState, action) {
  switch (action.type) {
    case "spaces/set_spaces": {
      return {
        ...state,
        loading: false,
        spaces: action.payload,
      };
    }

    case "spaces/start_loading": {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
}
