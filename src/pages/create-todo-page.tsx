import React from 'react';
import { CreateTodo } from 'components/create-todo';
import * as S from 'styles/styled';

export function CreateToDoPage() {
  return (
    <S.Container>
      <CreateTodo />
    </S.Container>
  );
}
