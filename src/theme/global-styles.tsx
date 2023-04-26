import { GlobalStyles as MuiGlobalStyles } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const GlobalStyles = ({ children }: IProps) => {
  return (
    <>
      <MuiGlobalStyles
        styles={(theme) => ({
          "::-webkit-scrollbar": {
            width: theme.spacing(1),
            height: theme.spacing(1),
          },
          "::-webkit-scrollbar-track": {
            background: theme.palette.secondary.main,
            borderRadius: 1000,
          },
          "::-webkit-scrollbar-thumb": {
            background: theme.palette.info.light,
            borderRadius: 1000,
          },
        })}
      />
      {children}
    </>
  );
};

export default GlobalStyles;
