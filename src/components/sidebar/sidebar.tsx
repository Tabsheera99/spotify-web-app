import { Box, styled } from "@mui/material";
import { useContext } from "react";

import NavItem from "../nav-item";
import { GenreContext } from "@/pages/[genre]";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.info.main,
  padding: `${theme.spacing(3)} ${theme.spacing(1)} ${theme.spacing(
    3
  )} ${theme.spacing(3)}`,
  width: theme.spacing(260 / 8),
  minWidth: theme.spacing(160 / 8),
  height: "100vh",
}));

const StyledTitle = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(1)} 0 ${theme.spacing(4)}`,
  fontWeight: 600,
  fontSize: 24,
}));

const Sidebar = () => {
  const genres = useContext(GenreContext);

  return (
    <StyledBox>
      <StyledTitle>Genres</StyledTitle>

      <Box sx={{ height: "85%", overflowY: "auto", overflowX: "hidden" }}>
        {genres?.map((item) => (
          <NavItem key={item} data={item} />
        ))}
      </Box>
    </StyledBox>
  );
};

export default Sidebar;
