import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import ContactIconButtons from './ContactButtons'
import Icon from '@mdi/react'
import { mdiAccountHardHat } from '@mdi/js'
import { useTheme } from '@mui/material'

export default function Footer (): JSX.Element {
  const theme = useTheme()
  const classes = {
    container: {
      paddingRight: '5vw',
      paddingLeft: '5vw'
    },
    seperator: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    cc: {
      display: 'flex',
      alignItems: 'end',
      gap: theme.spacing(1.5)
    }
  }
  return (
        <Box sx={classes.container}>
            <Box sx={classes.seperator} />
            <Box sx={classes.footerContent}>
                <ContactIconButtons class={{}} />
                <Box sx={classes.cc}>
                    <Icon path={mdiAccountHardHat} size={1} color={theme.palette.primary.main} />
                    <Typography variant='property'>This website was created by me!</Typography>
                </Box>
            </Box>
        </Box>
  )
}
