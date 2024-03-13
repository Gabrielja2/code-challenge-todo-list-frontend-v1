import React from 'react';
import { getToDoList } from 'services/get-todo-list-service';
import { ToDoCard } from 'components/todo-card';
import * as S from '../styles/styled';

export function ToDoList() {
  const [toDos, setToDos] = React.useState<
    { id: number; title: string; description: string }[]
  >([]);

  const todoList = async () => {
    const response = await getToDoList();

    setToDos(response);
  };

  React.useEffect(() => {
    todoList();
  }, []);

  return (
    <S.CardsContainer>
      {toDos.map((todo) => (
        <S.Link href={`/details-todo/${todo.id}`} key={todo.id}>
          <ToDoCard todo={todo} />
        </S.Link>
      ))}
    </S.CardsContainer>
  );
}
