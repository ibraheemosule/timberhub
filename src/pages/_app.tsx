import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import GlobalStyle from "../assets/styles/GlobalStyle";
import { Context } from "../assets/utils/Context";
import { useState } from "react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [modal, setModal] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider
        value={{
          modal,
          setModal,
        }}
      >
        <Component {...pageProps} />
        <GlobalStyle />
      </Context.Provider>
    </ThemeProvider>
  );
};

export default App;
