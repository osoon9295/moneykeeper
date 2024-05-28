const SET_DATA = "SET_DATA";

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

const initialState = {
  data: [],
};

const dataSlice = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataSlice;
