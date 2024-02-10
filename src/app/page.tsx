'use client';
import { useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
import { useStoreDispatch } from '../store/store';
import { getWord } from '../store/slices/dictionarySlice';
const Home = () => {
  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch(getWord());
  }, [dispatch]);
  return (
    <main>
      <GlobalStyles />
      <>
        <Header />
        <Container>
          <>Hello World!</>
        </Container>
        <Footer />
      </>
    </main>
  );
};

export default Home;
