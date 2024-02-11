'use client';
import { useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
import { useStoreDispatch } from '../store/store';
import { getWord } from '../store/slices/dictionarySlice';
import { doc, updateDoc } from 'firebase/firestore';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { db } from '../../firebase';
const Home = () => {
  const cards = useSelector((state: RootState) => state.wordReducer.cards);
  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch(getWord());
  }, [dispatch]);

  const handleAddDataInDB = async () => {
    try {
      const docRef = doc(db, 'words-db', 'YjyBEnL1VvlOmJmTHmuJ');
      console.log(docRef);
      console.log(cards);
      await updateDoc(docRef, {
        cards: cards
      });
      console.log('Document written with ID: ', docRef);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <main>
      <GlobalStyles />
      <>
        <Header />
        <Container>
          <>Hello World!</>
          <button onClick={handleAddDataInDB}>Click</button>
        </Container>
        <Footer />
      </>
    </main>
  );
};

export default Home;
