import axios from "axios";

export async function getInitMosts() {
  const response = await axios.get("/init");
  return response.data;
}

export async function getMosts(id) {
  const response = await axios.get("/tarin/" + id);
  return response.data;
}

export async function putMostsVote(payload, sid) {
  const response = await axios.put("/" + sid + "/tarin", payload);

  return response.data;
}
