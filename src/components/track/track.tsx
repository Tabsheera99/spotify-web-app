import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

import { ITrack } from "@/types/types";

const TrackContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.info.main,
  borderRadius: theme.spacing(4 / 8),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  height: "100%",

  ":hover": {
    opacity: 0.8,
  },
}));

interface IProps {
  track: ITrack;
}

const Track = ({ track }: IProps) => {
  if (!track) return null;

  return (
    <TrackContainer>
      <Box>
        <Box position="relative" height={200} width={200}>
          <Image
            src={track.album.images[0].url}
            alt={track.name}
            style={{ borderRadius: 4 }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            fill
          />
        </Box>
        <Typography textAlign="center" marginTop={2} fontWeight={600}>
          {track?.name}
        </Typography>
        <Typography textAlign="center" fontWeight={400} fontSize={14}>
          {track?.artists.map((artist) => artist.name).join(", ")}
        </Typography>
      </Box>
    </TrackContainer>
  );
};

export default Track;
