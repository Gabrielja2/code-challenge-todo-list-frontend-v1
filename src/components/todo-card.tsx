import React from 'react';
import { ToDoProps } from 'types/todo-type';
import * as S from '../styles/styled';
import { DeleteToDo } from 'services/delete-todo-service';
import { useHistory } from 'react-router-dom';

export function ToDoCard({ todo }: ToDoProps) {
  const history = useHistory();
  async function handleDelete() {
    if (window.confirm('Deseja deletar esta tarefa?')) {
      const response = await DeleteToDo(todo.id);

      if (response) history.push('/');
    }
  }
  return (
    <S.CardContainer>
      <S.IdContainer>
        <S.Id>{todo.id}</S.Id>
        <S.ButtonClose onClick={handleDelete}>X</S.ButtonClose>
      </S.IdContainer>
      <S.Subtitle>{todo.title}</S.Subtitle>
      <S.Text>{todo.description}</S.Text>
    </S.CardContainer>
  );
}
