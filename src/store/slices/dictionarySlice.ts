import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dictionaryAPI } from '../../types/types';
import { put } from 'redux-saga/effects';
import axios from 'axios';
import { BASE_URL, EN_RU, SEARCH_WORD } from '../../utils/consts';
const initialState: dictionaryAPI = {
  text: '',
  pos: '',
  tr: [
    {
      fr: null,
      gen: '',
      pos: '',
      text: ''
    }
  ],
  ts: ''
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* getWordSaga(text:any): object {
  const payload = yield axios.get(
    BASE_URL + process.env.REACT_APP_API_KEY + EN_RU + SEARCH_WORD + text
  );
  yield put(getWordAction(payload));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* setTextSaga(text: any): object {
  yield put(setTextAction(text));
}
export const dictionarySlice = createSlice({
  name: 'dictionarySlice',
  initialState,
  reducers: {
    getWordAction: (state: dictionaryAPI, action) => {
      state.tr = action.payload.tr;
    },
    setTextAction: (state: dictionaryAPI, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const GET_WORD = 'word/getWord';
export const SET_TEXT = 'word/setText';
export const getWord = createAction(GET_WORD);
export const setText = createAction(SET_TEXT);
export const { getWordAction, setTextAction } = dictionarySlice.actions;
export default dictionarySlice.reducer;
