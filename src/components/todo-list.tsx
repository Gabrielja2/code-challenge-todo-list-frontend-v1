import React from 'react';
import { getToDoList } from 'services/get-todo-list-service';
import { ToDoCard } from 'components/todo-card';
import * as S from '../styles/styled';
import { ToDoProps } from 'types/todo-type';

export function ToDoList() {
  const [toDos, setToDos] = React.useState<ToDoProps[]>([]);

  React.useEffect(() => {
    const fetchTodoList = async () => {
      const responseTodoList = await getToDoList();
      setToDos(responseTodoList);
    };
    fetchTodoList();
  }, []);

  return (
    <S.CardsContainer>
      {toDos.map((todo) => (
        <S.Link href={`/details-todo/${todo.id}`} key={todo.id}>
          <ToDoCard {...todo} />
        </S.Link>
      ))}
    </S.CardsContainer>
  );
}
