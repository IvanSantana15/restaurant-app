import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { StyledContainer } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles";

const theme = {
  colors: {
    mainColor:"#46f2c8",
    secondColor:"#f24670",
    white:"#fff",

  },
  mobilePaddingX: "0 1.5rem"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      
        
        <StyledContainer>
          <Header/>
          
        </StyledContainer>

      
        <GlobalStyles />
    </ThemeProvider>


  );
}

export default App;
