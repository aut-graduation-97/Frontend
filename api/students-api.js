import axios from "axios";

// --------------------------------- Get
export async function getAllStudents() {
  const response = await axios.get("/users");
  return response.data;
}

export async function getAllComments(sid) {
  const response = await axios.get(sid + "/comments");
  return response.data;
}

export async function getProfileInfo(sid) {
  const response = await axios.get("/users/" + sid);
  return response.data;
}

// export async function updateContact(payload) {
//   const sid = JSON.parse(localStorage.getItem("user")).student_id;
//   const response = await axios.put("/users/" + sid, JSON.stringify(payload));
//   return response.data;
// }

// -------------------------------- Post
export async function updatePersonalInfo(payload) {
  const sid = JSON.parse(localStorage.getItem("user")).student_id;
  const response = await axios.put("/users/" + sid, JSON.stringify(payload));
  return response.data;
}

export async function postComment(payload, sid) {
  const response = await axios.post(
    "/comments/" + sid,
    JSON.stringify(payload)
  );
  return response.data;
}
