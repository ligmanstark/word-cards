'use client';
import { useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
import { useStoreDispatch } from '../store/store';
import { getWord, InitialBDState } from '../store/slices/dictionarySlice';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { db } from '../../firebase';
import { Search } from '@/components/Search/Search';
import { CardContent } from '@/components/CardContent/CardContent';
const Home = () => {
  const cards = useSelector((state: RootState) => state.wordReducer.cards);
  const dispatch = useStoreDispatch();
  const docRef = doc(db, 'words-db', 'YjyBEnL1VvlOmJmTHmuJ');
  const docSnap = getDoc(docRef);

  const handleAddDataInDB = async () => {
    try {
      console.log(docRef);
      console.log(cards);
      console.log((await docSnap).data());

      await updateDoc(docRef, {
        cards: cards
      });
      console.log('Document written with ID: ', docRef);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFetch = (text: any) => {
    dispatch(getWord(text));
  };

  useEffect(() => {
    const init = async () => {
      const init = (await docSnap).data();
      dispatch(InitialBDState(init));
    };
    init();
  }, []);
  return (
    <main>
      <GlobalStyles />
      <>
        <Header />
        <Container style={{ marginTop: '1rem' }}>
          <Search onSubmit={handleFetch} />
          <CardContent />
          <button onClick={handleAddDataInDB}>Добавить в БД</button>
        </Container>
        <Footer />
      </>
    </main>
  );
};

export default Home;
