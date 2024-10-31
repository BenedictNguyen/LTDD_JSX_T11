import { ADD_ITEM_SUCCESS, DELETE_ITEM_SUCCESS } from './actions';

const initialState = {
  addedItemId: null,
  loading: false,
  error: null,
  job: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
      return { ...state, addedItemId: action.payload.id };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.filter(job => job.id !== action.payload), // Xóa mục khỏi danh sách
      };
    default:
      return state;
  }
};

export default reducer;
