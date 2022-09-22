import getBasicHeaders from "./auth-headers";

const BASE_URL = "our-api-url";

export const getAllTweets = async () => {
  const response = await fetch(BASE_URL + "/tweets", {
    method: "GET",
    headers: getBasicHeaders(),
  });
  if (!response.ok) throw new Error("Could not fetch tweets");
  const data = await response.json();
  console.log("requested to", BASE_URL + "/tweets");
  console.log("received", data);
  return data;
};

export const likeTweet = async (tweetId, isLike) => {
  const response = await fetch(
    BASE_URL + "/tweets/" + tweetId + `${isLike ? "/like" : "/dislike"}`,
    {
      method: "PATCH",
      headers: getBasicHeaders(),
      // body: JSON.stringify({userId: userId})
    }
  );
  if (!response.ok) throw new Error("Could not like tweet");
  const data = await response.json();
  console.log("requested to", BASE_URL + "/tweets/" + tweetId + "/like");
  console.log("received", data);
  return data;
};