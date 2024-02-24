'use client';
import { Footer } from '@/Layout/Footer/Footer';
import { ListWords } from '@/components/ListWords/ListWords';
import { GlobalStyles } from '@/styled/GlobalStyles';
import { Container } from '@/styled/components';

const Saved = () => {
  return (
    <main>
      <GlobalStyles />
      <Container>
        <ListWords />
        <Footer />
      </Container>
    </main>
  );
};

export default Saved;
