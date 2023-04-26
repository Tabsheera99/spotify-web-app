import { URL } from "@/api/endpoints";
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from "@/constants/app.constants";

const getAccessToken = async () => {
  const refreshToken = SPOTIFY_REFRESH_TOKEN || "";
  const base64 = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(URL.GET_ACCESS_TOKEN, {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

export default getAccessToken;
