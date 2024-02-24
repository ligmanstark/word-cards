import * as S from './style';
import { FC } from 'react';
interface Props {
  text: string;
  pos: string;
  ts: string;
  tr: [
    {
      text: string;
      pos: string;
      gen: string;
      fr: number | null;
    }
  ];
}
export const ItemWords: FC<Props> = ({ tr }) => {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Text>Найденые слова:</S.Text>
        <S.SubBox>
          <S.FindWords>
            {tr && tr.map((el) => <li key={el.text}>{el.text}</li>)}
          </S.FindWords>
        </S.SubBox>
      </S.Box>
    </S.Wrapper>
  );
};
