import { CHANGE_FILTER } from '../actions';

const initialState = {
  filter: '',
};

const changeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const filter = action.payload;
      return {
        ...state, filter,
      };
    }
    default:
      return { ...state };
  }
};

export default changeFilterReducer;
