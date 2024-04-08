import axios from 'axios';

export const getToDo = async (todoId: number) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/todos/${todoId}`
  );

  return data;
};
