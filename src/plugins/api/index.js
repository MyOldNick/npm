import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://registry.npmjs.org/-/v1/",
});

export default ApiClient;


// Здесь мы делаем инверсию зависимости для http клиента, что бы в будущем можно было подменить реализацию и уменьшить связанность
