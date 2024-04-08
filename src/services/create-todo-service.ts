import axios from 'axios';
import { CreateToDoProps } from 'types/todo-type';

export const CreateToDo = async (todo: CreateToDoProps) => {
  const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/todos`, {
    title: todo.title,
    description: todo.description,
  });

  return data;
};
