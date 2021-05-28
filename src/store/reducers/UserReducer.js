const initialState = null;

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return action.payload;
    case "CLEAR":
      return null;
    default:
      return state;
  }
};

export default UserReducer;
