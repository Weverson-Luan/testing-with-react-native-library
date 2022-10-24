/* eslint-disable prettier/prettier */
import axios from 'axios';



const apiBaseConfig = axios.create({
  baseURL: 'https://63506a0b78563c1d82c12d49.mockapi.io/api/v1',
  timeout: 1000,
});

export {apiBaseConfig}