import { getSession } from "next-auth/react";

export default async function getBasicHeaders() {
  const session = await getSession();
  if (session === null) return null;

  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + "access-token-from-cookie-or-something",
  };
}
