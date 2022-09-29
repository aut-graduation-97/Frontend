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

// -------------------------------- Post
export async function updatePersonalInfo(payload, sid) {
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
export async function postProfilePicture(payload, sid) {
  const response = await axios.post("/user/" + sid, payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}
