import { CHANGE_FILTER } from '../actions';

const initialState = {
  filter: 'category',
};

const changeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return {
        ...state,
      };
    }
    default:
      return { ...state };
  }
};

export default changeFilterReducer;
