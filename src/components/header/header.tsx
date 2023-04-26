import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  minHeight: theme.spacing(72 / 8),
  padding: `${theme.spacing(20 / 8)} ${theme.spacing(6)}`,
  display: "flex",
}));

const Header = () => {
  return (
    <HeaderContainer>
      <Image src="/spotify.png" alt="spotify-icon" width={24} height={24} />
      <Typography paddingLeft={1} fontWeight={800}>
        Spotify Recommendations
      </Typography>
    </HeaderContainer>
  );
};

export default Header;
