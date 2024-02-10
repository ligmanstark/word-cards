'use client';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
const Home = () => {
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
