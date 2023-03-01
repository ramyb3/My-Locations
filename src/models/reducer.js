function reducer(state = {}, action) {
  switch (action.type) {
    case "LOAD": {
      return action.payload;
    }
    case "add": {
      state[action.payload[1] ? "categories" : "locations"].push(
        action.payload[0]
      );
      return state;
    }
    case "update": {
      const type = action.payload[2] ? "categories" : "locations";
      state[type] = state[type].filter((data) => data !== action.payload[1]);
      state[type].push(action.payload[0]);
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
    case "clickedItem": {
      return { ...state, item: action.payload };
    }

    default:
      return state;
  }
}

export default reducer;
