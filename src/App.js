
import "./App.css";
import React, { useState, useEffect } from 'react'
// import NavBar from "./components/NavBar.tsx";
import Paper from '@mui/material/Paper'
import Introduction from "./components/Introduction.tsx";
import { MyTheme } from "./theme.tsx";
import { ThemeProvider } from '@mui/material/styles';
import styled, {keyframes} from 'styled-components';
import Button from "@mui/material/Button";

const theme = MyTheme

function App () {
  const [upState, setUpState] = useState(false)

  const classes = {
        downAnimation: {
          animation: 'goUp 2s'
        }
  }



    return (
      <ThemeProvider theme={theme}>
        <Paper sx={{
          flexDirection: 'column', 
          flexFlow: 'column',
          // alignItems: 'stretch',
          minHeight: '100vh'
          }}
          variant={'background'}
          >
          {/* <NavBar /> */}
          
          <UpComponent><Introduction /></UpComponent>
          <Button onClick={() => setUpState(true)}>PressMe!</Button>
        </Paper>           
        </ThemeProvider>
    );
    // return (
    //   <ThemeProvider theme={theme}>
    //     <UpComponent>HI</UpComponent>
    //   </ThemeProvider>
    // )

}

const textfade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px);
  }

  100% {
    opacity: 1;
    transform: translateY(-100vh);
  }

  `
  const UpComponent = styled.div`
  animation-name: ${textfade};
  animation-duration: 3s;
  `;

export default App;
