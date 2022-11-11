import './App.css'
import React from 'react'
import Paper from '@mui/material/Paper'
import Introduction from './components/Introduction.tsx'
import { MyTheme } from './theme.tsx'
import { ThemeProvider } from '@mui/material/styles'
import VerticalSwitchAnimation from './components/VerticalSwitchAnimation.tsx'
import ExperienceTimeline from './components/ExperienceTimeline.tsx'
import BackgroundAninmation from './components/BackgroundAnimation.tsx'
import InformationComponentsWrapper from './components/InformationComponentsWrapper'
// import WebFont from 'webfontloader'

const theme = MyTheme

function App () {
  const classes = {
    mainPaper: {
      flexDirection: 'column',
      minHeight: '100vh',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between'
    }
  }

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ['Merienda']
  //     }
  //   })
  // }, [])

  return (
      <ThemeProvider theme={theme}>
        <Paper sx={classes.mainPaper}
          variant={'background'}
          >
            <div style={{ marginRight: '15vw' }}></div>
          <VerticalSwitchAnimation
          // upperChild={<Introduction/>}
          upperChild={<InformationComponentsWrapper />}
          duringAnimationUpperChild={<Introduction initialAnimation={false} />}
          lowerChild={<ExperienceTimeline />}
          initialComponent='upper'
          >
          </VerticalSwitchAnimation>
          <BackgroundAninmation />
        </Paper>
        </ThemeProvider>
        // </div>

  )
}

export default App
