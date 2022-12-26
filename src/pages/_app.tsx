import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import S_global from "../components/others/reusable-styles/S_global";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <S_global />
  </ThemeProvider>
);

export default App;
