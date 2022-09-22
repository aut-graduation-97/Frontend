import getBasicHeaders from "./auth-headers";

const BASE_URL = "https://our-api-url.com/api/v1/";

// ----------------------- GET
export async function getAllTweets() {
  console.log("requesting to", BASE_URL + "/tweets");
  const response = await fetch(BASE_URL + "/tweets", {
    method: "GET",
    headers: getBasicHeaders(),
  });
  if (!response.ok) throw new Error("error fetching tweets");

  const data = await response.json();
  console.log("received", data);
  return data;
}

// ----------------------- PATCH
export async function likeTweet(tweetId, isLike) {
  console.log("requesting to", BASE_URL + "/tweets/" + tweetId + "/like");

  const response = await fetch(
    BASE_URL + "/tweets/" + tweetId + `${isLike ? "/like" : "/dislike"}`,
    {
      method: "PATCH",
      headers: getBasicHeaders(),
    }
  );
  if (!response.ok) throw new Error("error fetching tweets");

  const data = await response.json();

  console.log("received", data);
  return data;
}
