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
export const ItemWordsSave: FC<Props> = ({ tr, text }) => {
  return (
    <S.Wrapper>
      <S.Box>
        <S.TextBox>
          <S.Text>{`Искомое слово: ${text}`}</S.Text>
        </S.TextBox>
        <S.SubBox>
          <S.FindWords>
            {tr && tr.map((el) => <li key={el.text}>{el.text}</li>)}
          </S.FindWords>
        </S.SubBox>
      </S.Box>
    </S.Wrapper>
  );
};
