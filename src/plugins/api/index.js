import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://registry.npmjs.org/-/v1/",
});

export default ApiClient;
