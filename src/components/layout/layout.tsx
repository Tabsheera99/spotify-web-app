import { Box, Stack, styled } from "@mui/material";
import React, { ReactNode } from "react";
import Sidebar from "../sidebar";
import Header from "../header";

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
  backgroundColor: theme.palette.secondary.light,
}));

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Stack direction="row" height="100vh">
      <Sidebar />
      <Stack direction="column" width="100%" minWidth={1024}>
        <Header />
        <StyledContainer
          height="100%"
          overflow="auto"
          width="100%"
          maxWidth={1440}
        >
          {children}
        </StyledContainer>
      </Stack>
    </Stack>
  );
};

export default Layout;
