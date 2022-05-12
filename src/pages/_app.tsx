import GlobalStyles from "~/styles/GlobalStyles";
import { tokenColors } from "~/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={tokenColors}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
