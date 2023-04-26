import axios from "axios";

import { URL } from "@/api/endpoints";
import getAccessToken from "@/utils/Spotify";

const Home = () => {
  return <div>Home</div>;
};

export default Home;

export async function getStaticProps() {
  const { access_token: accessToken } = await getAccessToken();

  const response = await axios.get(URL.GET_AVAILABLE_GENRE_SEEDS, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { data } = response;

  return {
    redirect: {
      destination: `/${data.genres[0]}`,
      permanent: false,
    },
  };
}
