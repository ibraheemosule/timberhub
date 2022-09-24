import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Layout from "../components/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
