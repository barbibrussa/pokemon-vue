import * as axios from 'axios';

const config: axios.AxiosRequestConfig = {
  baseURL: 'https://pokeapi.co/api/v2/',
};

export default axios.default.create(config);
