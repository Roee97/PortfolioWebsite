
import "./App.css";
import React from 'react'
import NavBar from "./components/NavBar.tsx";
import Paper from '@mui/material/Paper'
import Introduction from "./components/Introduction.tsx";
import { Typography } from "@mui/material";
import { MyTheme } from "./theme.tsx"
import { ThemeProvider } from '@mui/material/styles'

const theme = MyTheme

function App () {
    return (
      <ThemeProvider theme={theme}>
        <Paper variant={'normal'} sx={{display: 'flex', flexDirection: 'column', flexFlow: 'column'}}>
          <NavBar />
          <Introduction />
          <Typography>HI!</Typography>
        </Paper>           
        </ThemeProvider>
    );

}

export default App;
