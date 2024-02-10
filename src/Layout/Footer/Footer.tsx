'use client';
import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';

export const Footer: FC = () => {
  // const scrollPageUp = (event: React.MouseEvent<HTMLButtonElement>) => {
  // 	event.preventDefault();
  // 	window.scrollTo({
  // 		top: 0,
  // 		left: 0,
  // 		behavior: 'smooth',
  // 	});
  // };
  return (
    <>
      <Wrapper>
        <Container>
          {/* <button onClick={scrollPageUp}>
 						</button> */}
          Footer
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.footer``;
