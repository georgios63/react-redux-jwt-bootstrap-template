const initialState = {
  loading: false,
  spacesById: null,
};

export default function spacesById(state = initialState, action) {
  switch (action.type) {
    case "spaces/set_space_by_id": {
      return {
        ...state,
        loading: false,
        spacesById: action.payload,
      };
    }

    case "spaces/create_story": {
      return {
        ...state,
        loading: false,
        spacesById: action.payload,
      };
    }

    case "spaces/delete_story": {
      return {
        ...state,
        loading: false,
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
