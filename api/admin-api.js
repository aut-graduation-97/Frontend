// ----------------------- POST
import axios from "axios";

export async function addUser(payload) {
  console.log(payload);
  const response = await axios.post("/register", JSON.stringify(payload));
  return response.data;
}

export async function postImage(payload) {
  const response = await axios.post("/tweets", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}
