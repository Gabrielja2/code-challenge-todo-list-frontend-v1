import axios from 'axios';

export const DeleteToDo = async (todoID: number) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_BASE_URL}/todos/${todoID}`
  );

  return data;
};
