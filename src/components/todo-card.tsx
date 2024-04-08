import React from 'react';

import * as S from '../styles/styled';
import { DeleteToDo } from 'services/delete-todo-service';
import { useHistory } from 'react-router-dom';
import { ToDoProps } from 'types/todo-type';

export function ToDoCard(todo: ToDoProps) {
  const { id, title, description } = todo;
  function confirmDelete() {
    return window.confirm('Deseja deletar esta tarefa?');
  }

  const history = useHistory();
  async function handleDelete() {
    if (confirmDelete()) {
      const response = await DeleteToDo(id);

      response && history.push('/');
    }
  }
  return (
    <S.CardContainer>
      <S.IdContainer>
        <S.Id>{id}</S.Id>
        <S.ButtonClose onClick={handleDelete}>X</S.ButtonClose>
      </S.IdContainer>
      <S.Subtitle>{title}</S.Subtitle>
      <S.Text>{description}</S.Text>
    </S.CardContainer>
  );
}
