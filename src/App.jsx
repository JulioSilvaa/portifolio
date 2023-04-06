import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/header/Header';
import Router from './routes/Router';
import { darkTheme, lightTheme } from './style/ColorTheme';
import Container from './style/Container';
import GlobalStyles from './style/Global';

function App() {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'light';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'dark' : 'light');
  };
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Container>
        <Router />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
