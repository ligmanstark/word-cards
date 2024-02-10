'use client';
import styled from '@emotion/styled';
import { Container } from '../../styled/components';
import Link from 'next/link';

export const Wrapper = styled.header``;

export const MyContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled(Link)`
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  svg {
    transition: fill 0.3s;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`;
