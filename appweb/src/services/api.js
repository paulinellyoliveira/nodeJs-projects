import axios from "axios";

const api = axios.create({baseURL: "http://localhost:3001/api"});

export default api;

//"https://rocketseat-node.herokuapp.com/api"