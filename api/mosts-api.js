import axios from "axios";

export async function getInitMosts() {
  const response = await axios.get("/init");
  return response.data;
}

export async function getMosts(id) {
  const response = await axios.get("/tarin/" + id);
  return response.data;
}

// TODO: update this to send array
export async function putMostsVote(checkedId, sid) {
  const response = await axios.put("/" + sid + "/tarin", {
    tarin_id: checkedId,
  });
  // Body:
  // {
  //   tarin_id: ['--ID1--', '--ID2--', '--ID3--']
  // }
  return response.data;
}
