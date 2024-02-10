import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import wordReducer, {
  GET_WORD,
  SET_TEXT,
  getWordSaga,
  setTextSaga
} from './slices/dictionarySlice';
import { takeEvery } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';

import modalReducer from './slices/modalSlice';

function* sagas() {
  yield takeEvery(GET_WORD, getWordSaga);
  yield takeEvery(SET_TEXT, setTextSaga);
}
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    wordReducer: wordReducer,
    modalReducer: modalReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
