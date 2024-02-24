import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dictionaryAPIState } from '../../types/typesState';
import { put } from 'redux-saga/effects';
import axios from 'axios';
import { BASE_URL, RU_EN, SEARCH_WORD } from '../../utils/consts';
const api = process.env.REACT_APP_API_KEY;
const FULL_URL = BASE_URL + api + RU_EN + SEARCH_WORD;
const initialState: dictionaryAPIState = {
  cards: [],
 
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* getWordSaga(text: { payload: string }): object {
  const payload = yield axios.get(FULL_URL + text.payload).catch((error) => console.log('ERROR:=> ' + error));

  yield put(getWordAction(payload));
}
 
export const dictionarySlice = createSlice({
  name: 'dictionarySlice',
  initialState,
  reducers: {
    getWordAction: (state, action) => {
      state.cards.push(action.payload.data.def[0]);
      console.log(action.payload);
    },
    setTextAction: (state, action: PayloadAction<[]>) => {
      state.cards = action.payload;
    }
  }
});

export const GET_WORD = 'word/getWord';
export const SET_TEXT = 'word/setText';
export const getWord = createAction(GET_WORD);
export const setText = createAction(SET_TEXT);
export const { getWordAction, setTextAction } = dictionarySlice.actions;
export default dictionarySlice.reducer;
