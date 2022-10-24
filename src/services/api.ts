/* eslint-disable prettier/prettier */
import { apiBaseConfig } from './config.axios';
const URL = 'https://63506a0b78563c1d82c12d49.mockapi.io/api/v1';


export interface IUserProps {
  id: string;
  name: string;
  avatar: string;
  star: number;
  createdAt: string;
}


async function getUsers(): Promise<IUserProps[]> {
  const response = await apiBaseConfig.get<IUserProps[]>(`${URL}/users`);

  return response.data;
}


async function updateUserName(userId: string, name: string): Promise<IUserProps> {
  const response = await apiBaseConfig.put<IUserProps>(`${URL}/users/${userId}`,  {name});

  return response.data;
}

export const api = {
  updateUserName,
  getUsers,
};
