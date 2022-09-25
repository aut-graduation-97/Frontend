import axios from "axios";

export async function getAllStudents() {
  const response = await axios.get("/users");
  return response.data;
}

// export async function updateContact(payload) {
//   const sid = JSON.parse(localStorage.getItem("user")).student_id;
//   const response = await axios.put("/users/" + sid, JSON.stringify(payload));
//   return response.data;
// }

export async function updatePersonalInfo(payload) {
  const sid = JSON.parse(localStorage.getItem("user")).student_id;
  const response = await axios.put("/users/" + sid, JSON.stringify(payload));
  return response.data;
}
