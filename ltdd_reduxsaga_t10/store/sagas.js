import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE } from '../actions';

const apiUrl = 'https://66f4d07977b5e889709a8de9.mockapi.io/chat';

function* addItem(action) {
  try {
    const response = yield call(fetch, apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    
    // Kiểm tra phản hồi
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = yield response.json();
    console.log('Response from API:', data); // Log phản hồi
    yield put({ type: ADD_ITEM_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error while adding item:', error); // Log lỗi
    yield put({ type: ADD_ITEM_FAILURE, error });
  }
}

function* deleteItem(action) {
  try {
    const response = yield call(fetch, `https://66f4d07977b5e889709a8de9.mockapi.io/chat/${action.payload}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete item');
    }

    yield put({ type: DELETE_ITEM_SUCCESS, payload: action.payload });
  } catch (error) {
    console.error('Error while deleting item:', error);
    yield put({ type: DELETE_ITEM_FAILURE, error });
  }
}
export default function* rootSaga() {
  yield takeEvery(ADD_ITEM_REQUEST, addItem);
  yield takeEvery(DELETE_ITEM_REQUEST, deleteItem);
}