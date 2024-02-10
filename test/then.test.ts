import axios from 'axios';
import { BASE_URL, EN_RU, SEARCH_WORD } from '../src/utils/consts';

const api =process.env.REACT_APP_API_TEST_KEY

const FULL_URL = BASE_URL + api + EN_RU + SEARCH_WORD;

test('get 200', () => {
  axios.get(FULL_URL + 'bar').then((data) => {
    expect(data.data.def[0].text).toMatch('bar');
  });
});


