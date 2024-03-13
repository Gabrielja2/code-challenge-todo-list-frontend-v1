import axios from 'axios';

export const CreateToDo = async (todo: { title: string; description: string }) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/todos`, {
    title: todo.title,
    description: todo.description,
  });

  return response.data;
};
