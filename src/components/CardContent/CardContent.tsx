import * as S from './style';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { ListWords } from '../ListWords/ListWords';
export const CardContent = () => {
  const cards = useSelector((state: RootState) => state.wordReducer.cards);
  return (
    <S.Wrapper>
      <S.TextBox>
        {cards ? (
          <S.Text>{`Слово которое искали: ${cards.at(-1)?.text ? cards.at(-1)?.text : 'мы пока ничего не искали'}`}</S.Text>
        ) : (
          ''
        )}
      </S.TextBox>
      <S.Box>
        <ListWords />
      </S.Box>
    </S.Wrapper>
  );
};
