import getBasicHeaders from "./auth-headers";

const BASE_URL = "https://our-api-url.com/api/v1/";

// ----------------------- POST
export async function addUser(payload) {
  console.log("requesting to", BASE_URL + "register" + "with body of", user);

  const response = await fetch(BASE_URL + "register", {
    method: "POST",
    headers: getBasicHeaders(),
    body: JSON.stringify(payload),
  });

  if (response.status === 406) {
    throw new Error("کاربر قبلا در سیستم ثبت شده است");
  }
  if (!response.ok) throw new Error("error adding user");

  const data = await response.json();

  console.log("received", data);
  return data;
}
