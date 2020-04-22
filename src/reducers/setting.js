import { SET_USERNAME, SET_DARK_MODE } from '../actions/index';

const initialState = {
  currentUser: { name: 'Guest' },
  darkMode: false,
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return Object.assign({}, state, {
        currentUser: { name: action.name },
      });

    case SET_DARK_MODE:
      return Object.assign({}, state, {
        darkMode: action.value,
      });

    default:
      return state;
  }
};

export default settingReducer;
