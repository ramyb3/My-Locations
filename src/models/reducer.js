function reducer(state = {}, action) {
  switch (action.type) {
    case "LOAD": {
      return action.payload;
    }
    case "addCategory": {
      state.categories.push(action.payload);
      return state;
    }
    case "addLocation": {
      state.locations.push(action.payload);
      return state;
    }
    case "update": {
      if (action.payload[2]) {
        state.categories = state.categories.filter(
          (data) => data !== action.payload[1]
        );
        state.categories.push(action.payload[0]);
      } else {
        state.locations = state.locations.filter(
          (data) => data !== action.payload[1]
        );
        state.locations.push(action.payload[0]);
      }

      return state;
    }
    case "delete": {
      if (action.payload[2] === "categories") {
        state.categories = state.categories.filter(
          (data) => data !== action.payload[0]
        );
      } else {
        state.locations = state.locations.filter(
          (data) => data.name !== action.payload[0]
        );
      }

      return state;
    }

    default:
      return state;
  }
}

export default reducer;
