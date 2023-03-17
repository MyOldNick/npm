import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://registry.npmjs.org/-/v1/",
});

export default ApiClient;


// инверсия зависимости для http клиента, что бы в будущем можно было подменить реализацию и уменьшить связанность
// axios частично "мусорная" библиотека и возможно лучше  использовать абстракцию над fetch, но это долго 
