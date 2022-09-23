import getBasicHeaders from "./auth-headers";

const BASE_URL = "https://our-api-url.com/api/v1/";

export async function forgotPassword(payload) {
  const response = await fetch(BASE_URL + "forgot_password", {
    method: "POST",
    headers: getBasicHeaders(),
    body: JSON.stringify(payload),
  });

  if (response.status === 404) {
    throw new Error("کاربری با شماره دانشجویی وارد شده یافت نشد");
  }
  if (!response.ok) throw new Error("error adding user");

  return await response.json();
}

export async function deActiveToken() {
  const response = await fetch(BASE_URL + "logout", {
    method: "POST",
    headers: getBasicHeaders(),
  });
}
