import "@/styles/globals.css";
import GlobalStyles from "@/theme/global-styles";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </ThemeProvider>
  );
}
