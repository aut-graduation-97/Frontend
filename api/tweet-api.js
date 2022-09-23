import axios from "axios";

// ----------------------- GET
export async function getAllTweets() {
  const response = await axios.get("tweets");
  return response.data;
}

// ----------------------- PATCH
export async function likeTweet(tweetId, isLike) {
  const response = await axios.patch(
    "/tweets/" + tweetId + `${isLike ? "/like" : "/dislike"}`
  );
  return response.data;
}

// ----------------------- POST
export async function postTweet(payload) {
  const response = await axios.post("/tweets", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}
