import React from 'react';
import { TodoForm } from 'components/todo-form';
import * as S from 'styles/styled';
import { useHistory } from 'react-router-dom';

export function CreateTodoContent() {
  const history = useHistory();
  async function handleClick() {
    history.push('/');
  }

  return (
    <S.ToDoContainer>
      <S.Title>Criar Tarefa</S.Title>
      <TodoForm />
      <S.Button onClick={handleClick} defaultValue={'100px'} theme={'#df5e5e'}>
        Voltar
      </S.Button>
    </S.ToDoContainer>
  );
}
