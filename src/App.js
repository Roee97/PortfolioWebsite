
import "./App.css";
import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Introduction from "./components/Introduction.tsx";
import { MyTheme } from "./theme.tsx";
import { ThemeProvider } from '@mui/material/styles';
import UpSwitchAnimation from './components/UpSwitchAnimation.tsx'
import DownSwitchAnimation from './components/DownSwitchAnimation.tsx'
import ExperienceTimeline from './components/ExperienceTimeline.tsx'

const theme = MyTheme

function App () {
    const classes = {
      mainPaper: {
        flexDirection: 'column', 
        flexFlow: 'column',
        minHeight: '100vh',
        // backgroundImage: `linear-gradient(to bottom, #eee5e5, #e7dcdc, #e0d3d2, #dacac9, #d3c1c0, #d3c1c0, #d3c1c0, #d3c1c0, #dacac9, #e0d3d2, #e7dcdc, #eee5e5)`
        backgroundImage: `radial-gradient(circle, #eee5e5, #e7dcdc, #e0d3d2, #dacac9, #d3c1c0, #d3c1c0, #d3c1c0, #d3c1c0, #dacac9, #e0d3d2, #e7dcdc, #eee5e5);`
      }
    }
    return (
      <ThemeProvider theme={theme}>
        <Paper sx={classes.mainPaper}
          variant={'background'}
          >
          <DownSwitchAnimation 
          upperChild={<Introduction/>}
          duringAnimationUpperChild={<Introduction initialAnimation={false} />}
          lowerChild={<ExperienceTimeline />}
          initialComponent='upper'
          >
          </DownSwitchAnimation>
          {/* <ExperienceTimeline /> */}
        </Paper>           
        </ThemeProvider>
    );

}



export default App;
