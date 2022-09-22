import getBasicHeaders from "./auth-headers";

const BASE_URL = "https://our-api-url.com/api/v1/";

export async function addUser(user) {
  console.log("requesting to", BASE_URL + "register" + "with body of", user);
  try {
    const response = await fetch(BASE_URL + "register", {
      method: "POST",
      headers: getBasicHeaders(),
      body: JSON.stringify(user),
    });

    if (response.status === 406) {
      throw new Error("کاربر قبلا در سیستم ثبت شده است");
    }
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }

  const data = await response.json();

  console.log("received", data);
  return data;
}
