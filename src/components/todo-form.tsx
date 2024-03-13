import React, { useRef } from 'react';
import * as S from '../styles/styled';
import { CreateToDo } from 'services/create-todo-service';
import { useHistory } from 'react-router-dom';

export function TodoForm() {
  const history = useHistory();
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!titleRef.current || !descriptionRef.current) {
      return;
    }

    const newToDo = await CreateToDo({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    });

    if (newToDo.id) history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <S.CardContainer>
        <S.Label htmlFor="title">
          Title
          <S.Input type="text" ref={titleRef} />
        </S.Label>

        <S.Label htmlFor="description">
          Description
          <S.Input type="text" ref={descriptionRef} />
        </S.Label>
        <S.Button defaultValue={'100%'} theme={'#5e8edf'} type="submit">
          Create
        </S.Button>
      </S.CardContainer>
    </form>
  );
}
