import axios from "axios";

export async function getAllStudents() {
  const response = await axios.get("users");
  return response.data;
}
