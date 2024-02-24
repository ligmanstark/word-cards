import * as S from './style';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { ItemWords } from '@/components/ItemWords/ItemWords';
import { usePathname } from 'next/navigation';
import { ItemWordsSave } from '../ItemWordsSave/ItemWordsSave';
export const ListWords = () => {
  const pathname = usePathname();
  const cards = useSelector((state: RootState) =>
    state.wordReducer.cards.at(-1)
  );
  const saveCards = useSelector((state: RootState) => state.wordReducer.cards);
  console.log(saveCards);
  return (
    <S.Wrapper>
      <S.Box>
        <S.SubBox>
          {pathname === '/' && cards ? (
            <ItemWords
              tr={cards.tr}
              text={cards.text}
              pos={cards.pos}
              ts={cards.ts}
            />
          ) : pathname === '/saved' && saveCards ? (
            saveCards.map((el) => <ItemWordsSave key={el.text} {...el} />)
          ) : (
            ''
          )}
        </S.SubBox>
      </S.Box>
    </S.Wrapper>
  );
};
