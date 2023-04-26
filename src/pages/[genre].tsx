import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { createContext, useEffect } from "react";
import { Grid, Typography, styled } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";

import { URL } from "@/api/endpoints";
import Layout from "@/components/layout";
import Track from "@/components/track";
import getAccessToken from "@/utils/Spotify";
import { capitalizeFirstLetter, replaceHyphens } from "@/utils/general";
import { ITrack } from "@/types/types";

const PageTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main,
  fontSize: theme.spacing(26 / 8),
  fontWeight: 800,
  marginBottom: theme.spacing(2),
}));

export const GenreContext = createContext<string[]>([]);

interface IProps {
  genres: string[];
  genre: string;
  tracks: ITrack[];
}

const Genre = ({ genres, genre, tracks }: IProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document?.getElementById("top")?.scrollIntoView();
    };
    router.events.on("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <GenreContext.Provider value={genres}>
      <Head>
        <title>Spotify Recommendations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/spotify.png" />
      </Head>

      <Layout>
        <PageTitle id="top">
          {replaceHyphens(capitalizeFirstLetter(genre))}
        </PageTitle>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {tracks.map((track) => (
            <Grid key={track.id} item xs={3}>
              <Track track={track} />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </GenreContext.Provider>
  );
};

export default Genre;

export const getStaticPaths: GetStaticPaths = async () => {
  const { access_token: accessToken } = await getAccessToken();

  const response = await axios.get(URL.GET_AVAILABLE_GENRE_SEEDS, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { data } = response;

  const paths = data.genres.map((genre: string) => ({ params: { genre } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { access_token: accessToken } = await getAccessToken();

  const response = await axios.get(URL.GET_AVAILABLE_GENRE_SEEDS, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { data } = response;

  const recommendations = await axios.get(URL.GET_RECOMMENDATIONS, {
    params: {
      seed_genres: params?.genre,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { data: trackList } = recommendations;

  return {
    props: {
      genres: data.genres,
      genre: params?.genre,
      tracks: trackList.tracks,
    },
  };
};
