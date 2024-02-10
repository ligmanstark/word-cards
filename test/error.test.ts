import axios from "axios";
 import { BASE_URL, EN_RU, SEARCH_WORD } from '../src/utils/consts';

const api = '';
const FULL_URL = BASE_URL + api + EN_RU + SEARCH_WORD;

test('get 403', () => {
     axios.get(FULL_URL+'bar').catch((error) => {
      expect(error).toBe('AxiosError: Request failed with status code 403');
       });
  });
