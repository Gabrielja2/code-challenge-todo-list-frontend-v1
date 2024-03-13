import React from 'react';
import { Header } from '../components/header';
import { ToDoList } from 'components/todo-list';
import * as S from '../styles/styled';

export function HomePage() {
  return (
    <S.Container>
      <Header />
      <ToDoList />
    </S.Container>
  );
}
