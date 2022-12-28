import axios from "axios";

const URL = "http://127.0.0.1:8000/getprodbycat/";

export function GetAllProdsByCategory(id) {
  return new Promise((resolve) =>
    axios.get(URL+ id +"/").then((res) => resolve({ data : res.data}))
  );
}
