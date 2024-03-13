import axios from 'axios';

export const getToDoList = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`);

  return response.data;
};
