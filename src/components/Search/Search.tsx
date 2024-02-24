'use client';
import { SearchIcon } from '../../assets/img/index';
import { useRef } from 'react';
import { Button } from '../Button/Button';
import * as S from './style';

interface SearchProps {
  hasError?: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = searchRef.current?.value || '';
    if (text.trim()) {
      onSubmit(text);
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Search>
          <label htmlFor="search" style={{ cursor: 'pointer' }}>
            <SearchIcon />
          </label>
          <S.TextField
            type="text"
            ref={searchRef}
            id="search"
            name="username"
            placeholder="Search yandex dictionary"
          />
          {hasError && <S.Error>No resault</S.Error>}
          <Button>Search</Button>
        </S.Search>
      </S.Wrapper>
    </form>
  );
};
