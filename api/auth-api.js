import axios from "axios";

export async function forgotPassword(payload) {
  const response = await axios.post(
    "/forgot_password",
    JSON.stringify(payload)
  );
  return await response.data;
}

export async function deActiveToken() {
  const response = await axios.post("/logout");
}
