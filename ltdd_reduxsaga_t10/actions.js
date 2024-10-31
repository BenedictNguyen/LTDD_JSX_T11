export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';
export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const addItemRequest = (user) => ({ type: ADD_ITEM_REQUEST, payload: user });
export const deleteItemRequest = (id) => ({
  type: DELETE_ITEM_REQUEST,
  payload: id,
});
export const deleteItemSuccess = (id) => ({ type: DELETE_ITEM_SUCCESS, payload: id });

