import React from 'react';
import * as S from '../styles/styled';
import { useHistory, useParams } from 'react-router-dom';
import { ToDoCard } from './todo-card';
import { getToDo } from 'services/get-todo-service';
import { ToDoProps } from 'types/todo-type';

export function DetailsTodo() {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const [toDo, setToDo] = React.useState<ToDoProps>({
    id: 0,
    title: '',
    description: '',
  });

  React.useEffect(() => {
    getToDo(Number(id)).then(setToDo);
  }, [id]);

  async function handleClick() {
    history.push('/');
  }

  return (
    <S.ToDoContainer>
      <S.Title>Detalhes da Tarefa</S.Title>
      <ToDoCard {...toDo} />
      <S.Button onClick={handleClick} defaultValue={'100px'} color={'#df5e5e'}>
        Voltar
      </S.Button>
    </S.ToDoContainer>
  );
}
