import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../styles/styled';

export function Header() {
  const history = useHistory();

  function handleClick() {
    history.push('/create-todo');
  }
  return (
    <S.Header>
      <S.Title>ToDo List</S.Title>
      <S.Button defaultValue={'100px'} theme={'#5e8edf'} onClick={handleClick}>
        Add
      </S.Button>
    </S.Header>
  );
}
