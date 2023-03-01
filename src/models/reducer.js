function reducer(state = [], action) {
  switch (action.type) {
    case "LOAD":{
      return [...state, action.payload];
    }
    case "addCategory": {
      state[0][0].push(action.payload);
      return [[state[0][0], state[0][1]]];
    }
    case "addLocation": {
      state[0][1].push(action.payload);
      return [[state[0][0], state[0][1]]];
    }
    case "update": {
      if (action.payload[2] === "categories") {
        const arr = state[0][0].filter((data) => data !== action.payload[1]);
        arr.push(action.payload[0]);
        return [[arr, state[0][1]]];
      }
      if (action.payload[2] === "locations") {
        const arr = state[0][1].filter(
          (data) => data.name !== action.payload[1].name
        );

        arr.push(action.payload[0]);
        return [[state[0][0], arr]];
      }
    }
    case "delete": {
      if (action.payload[2] === "categories") {
        const arr = state[0][0].filter((data) => data !== action.payload[0]);
        return [[arr, state[0][1]]];
      }
      if (action.payload[2] === "locations") {
        const arr = state[0][1].filter(
          (data) => data.name !== action.payload[0]
        );

        return [[state[0][0], arr]];
      }
    }

    default:
      return state;
  }
}

export default reducer;
