import React, { useCallback } from 'react';
import * as S from '../styles/styled';
import { useHistory, useParams } from 'react-router-dom';
import { ToDoCard } from './todo-card';
import { getToDo } from 'services/get-todo-service';

export function DetailsTodoContent() {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const [toDo, setToDo] = React.useState<{
    id: number;
    title: string;
    description: string;
  }>({
    id: 0,
    title: '',
    description: '',
  });

  const todoById = useCallback(async () => {
    const response = await getToDo(Number(id));

    setToDo(response);
  }, [id]);

  React.useEffect(() => {
    todoById();
  }, [todoById]);
  async function handleClick() {
    history.push('/');
  }

  return (
    <S.ToDoContainer>
      <S.Title>Detalhes da Tarefa</S.Title>
      <ToDoCard todo={toDo} />
      <S.Button onClick={handleClick} defaultValue={'100px'} theme={'#df5e5e'}>
        Voltar
      </S.Button>
    </S.ToDoContainer>
  );
}
