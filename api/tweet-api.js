import getBasicHeaders from "./auth-headers";

const BASE_URL = "https://our-api-url.com/api/v1/";

// ----------------------- GET
export async function getAllTweets() {
  console.log("requesting to", BASE_URL + "/tweets");
  const response = await fetch(BASE_URL + "/tweets", {
    method: "GET",
    headers: getBasicHeaders(),
  });

  const data = await response.json();
  console.log("received", data);
  return data;
}

// ----------------------- PATCH
export async function likeTweet(tweetId, isLike) {
  console.log("requesting to", BASE_URL + "/tweets/" + tweetId + "/like");
  try {
    const response = await fetch(
      BASE_URL + "/tweets/" + tweetId + `${isLike ? "/like" : "/dislike"}`,
      {
        method: "PATCH",
        headers: getBasicHeaders(),
      }
    );
  } catch (e) {
    console.log("catched error", e);
    throw new Error(e);
  }

  const data = await response.json();

  console.log("received", data);
  return data;
}
