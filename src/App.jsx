import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";

import themes from "./styles/themes";

import GitHubProfileCard from "./components/GitHubProfileCard";
import {useState} from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [theme, setTheme] = useState('light')

  function handleChangeTheme() {
    console.log('click');
    setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Container>
        <GitHubProfileCard username="nicolasteofilo" onChangeTheme={handleChangeTheme} theme={theme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
