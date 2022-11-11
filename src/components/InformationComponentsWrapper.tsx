import { Box, Typography } from '@mui/material'
import React from 'react'
import AboutMe from './AboutMe'
import Footer from './Footer'

export default function InformationComponentsWrapper (): JSX.Element {
  const classes = {
    borders: {
      width: '60vw',
      marginTop: '15vh',
      marginBottom: '10vh',
      height: '65vh',
      display: 'flex',
      flexDirection: 'column'
    },
    container: {
      display: 'grid',
      flexGrow: 1,
      'grid-template-columns': '15% 5% 80%',
      'grid-template-rows': '20% 80%'
    },
    healine: {
      gridColumnStart: 2,
      gridColumnEnd: 4,
      paddingBottom: '10vh'
    },
    menu: {
      gridRowStart: 2,
      gridColumnStart: 1
    },
    content: {
      gridRowStart: 2,
      gridColumnStart: 3
    }
  }
  return (
    <Box sx={classes.borders}>
        <Box sx={classes.container}>
            <Box sx={classes.healine}>
                <Typography variant={'propertyHeadline'}>About Me</Typography>
            </Box>
            <Box sx={classes.menu}>
                <Typography>Menu</Typography>
            </Box>
            <Box sx={classes.content}>
            <AboutMe />
            </Box>
        </Box>
        <Footer />
        </Box>
  )
}
