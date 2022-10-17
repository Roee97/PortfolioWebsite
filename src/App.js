
import "./App.css";
import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Introduction from "./components/Introduction.tsx";
import { MyTheme } from "./theme.tsx";
import { ThemeProvider } from '@mui/material/styles';
import VerticalSwitchAnimation from './components/VerticalSwitchAnimation.tsx'
import ExperienceTimeline from './components/ExperienceTimeline.tsx'
import ParticlesComponent from "./components/ParticleComponent";

const theme = MyTheme

function App () {
    const classes = {
      mainPaper: {
        flexDirection: 'column', 
        flexFlow: 'column',
        minHeight: '100vh',
        //backgroundColor: 'transparent'
        backgroundImage: `linear-gradient(to top, #eee5e5, #e3d6d6, #d8c7c6, #cdb8b7, #c2a9a8, #c2a9a8, #c2a9a8, #c2a9a8, #cdb8b7, #d8c7c6, #e3d6d6, #eee5e5);`
      },
      div: {
        position: 'absolute'
      },
      mainDiv: {
        position: 'relative',
        overflow: 'hidden',
      }
    }

    return (
      <div style={{position: 'relative', overflow: 'hidden', minHeight: '100vh'}}>
      <ThemeProvider theme={theme}>
          <div style={{position: 'absolute'}}>
            <ParticlesComponent />
        </div>
        <Paper sx={classes.mainPaper}
          variant={'background'}
          >
          <VerticalSwitchAnimation 
          upperChild={<Introduction/>}
          duringAnimationUpperChild={<Introduction initialAnimation={false} />}
          lowerChild={<ExperienceTimeline />}
          initialComponent='upper'
          >
          </VerticalSwitchAnimation>
        </Paper>
        </ThemeProvider>
        </div>
        
    );

}



export default App;
