import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import wordReducer, { GET_WORD, getWordSaga } from './slices/dictionarySlice';
import { takeEvery } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';

import modalReducer from './slices/modalSlice';

function* sagas() {
  // eslint-disable-next-line
  //@ts-ignore
  yield takeEvery(GET_WORD, getWordSaga);
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
