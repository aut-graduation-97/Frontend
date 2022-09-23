// ----------------------- POST
import axios from "axios";

export async function addUser(payload) {
  const response = await axios.post("/register", JSON.stringify(payload));
  return response.data;
}
