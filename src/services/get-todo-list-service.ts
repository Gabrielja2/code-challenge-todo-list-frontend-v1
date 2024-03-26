import axios from 'axios';

export const getToDoList = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`);

  return data;
};
