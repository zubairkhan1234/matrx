import '../App.css';
import QuestionCard from './components/QuestionCard';
import { MainApp } from './components/PageElements/MainApp';
import { theme } from './data/AppTheme'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.surface1};
    color: ${({ theme }) => theme.text1};
    font-size: clamp(1rem, 8vw, 1.3rem);
    > * {
      transition: 0.25s ease all;
    }
  }
  h1{
    font-size: clamp(1.2rem, 8vw, 2.8rem);
  }
`
function Quiz() {

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <Header />
      </div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainApp className="app">
          <QuestionCard />
        </MainApp>
      </ThemeProvider>
    </>
  );
}

export default Quiz;
