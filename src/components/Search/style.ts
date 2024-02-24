import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const Search = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 10px 10px 10px 16px;
  background-color: var(--search-bg, white);
  display: flex;
  align-items: center;
  box-shadow: var(--search-shadow);
  border-radius: 15px;

  @media (min-width: 767px) {
    padding: 10px 10px 10px 30px;
  }

  & > button {
    flex-shrink: 0;
  }
`;

export const TextField = styled.input`
  padding: 0 10px;
  flex-grow: 5;
  height: 60px;
  max-width: calc(100% - 100px - 20px);
  border: none;
  color: black;
  font-size: 0.75rem;
  line-height: 1.5;

  background-color: var(--search-bg);

  &::placeholder {
    color: var(--search-placeholder-color);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 767px) {
    margin: 0 5px;
    font-size: 1.25rem;
    margin: 0 20px;
  }
`;

export const Error = styled.div`
  position: absolute;
  right: 50%;
  bottom: 5px;
  color: var(--error-color);
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;

  @media (min-width: 767px) {
    right: 120px;
    top: 50%;
    transform: translateY(-50%);
    bottom: unset;
  }
`;

export const SortBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
