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
