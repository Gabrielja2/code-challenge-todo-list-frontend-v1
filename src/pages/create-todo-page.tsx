import React from 'react';
import { CreateTodoContent } from 'components/create-todo-content';
import * as S from 'styles/styled';

export function CreateToDoPage() {
  return <S.Container>{<CreateTodoContent />}</S.Container>;
}
