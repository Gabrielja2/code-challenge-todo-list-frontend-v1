import axios from 'axios';

export const getToDo = async (todoId: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/todos/${todoId}`
  );

  return response.data;
};
