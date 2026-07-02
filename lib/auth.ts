import { headers } from "next/headers";
import { verifyToken } from "./jwt";

export async function getCurrentAdmin() {
  const headerStore = await headers();
  const authorization = headerStore.get("authorization");

  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }

  const token = authorization.slice(7);
  // console.log("HEADER TOKEN:", token);

  const admin = verifyToken(token);
  // console.log("VERIFY RESULT:", admin);

  return admin;
}