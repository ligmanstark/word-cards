'use client';
import * as S from './style';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/Button/Button';
export const Footer: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleSaveWords = () => {
    setTimeout(() => {
      if (pathname === '/') {
        router.push('saved');
      } else {
        router.push('/');
      }
    }, 100);
  };
  return (
    <>
      <S.Wrapper>
        <Container>
          <Button onClick={handleSaveWords}>
            {pathname === '/'
              ? 'Перейти к сохраненным словам'
              : 'Вернуться на главную'}
          </Button>
        </Container>
      </S.Wrapper>
    </>
  );
};
