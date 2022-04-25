import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "Styles/GlobalStyles";
import { MainTheme } from "Styles/Theme";
import { Landing } from "pages/Landing";

export const App = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyles />

      <Landing />
    </ThemeProvider>
  );
};
