import getBasicHeaders from "./auth-headers";

const BASE_URL = "https://our-api-url.com/api/v1/";

export async function getAllStudents() {
  console.log("requesting to", BASE_URL + "/users");
  const response = await fetch(BASE_URL + "/users", {
    method: "GET",
    headers: getBasicHeaders(),
  });
  if (!response.ok) throw new Error("error fetching students");

  return await response.json();
}
