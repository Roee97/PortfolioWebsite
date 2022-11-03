import React from 'react'
import { Paper, useTheme } from '@mui/material'

interface ContentBoxProps {
  children: React.ReactNode
}
export default function ContentBox ({ children }: ContentBoxProps): JSX.Element {
  const theme = useTheme()
  const classes = {
    navigation: {
      display: 'grid',
      flexGrow: 1,
      height: '60vh',
      maxWidth: '80vh',
      'grid-template-columns': '16% 39% 5% 40%',
      'grid-template-rows': '14% 14% 14% 17% 8% 17% 14%'
    },
    paper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(20),
      paddingBottom: theme.spacing(10),
      backgroundColor: 'transparent'
    }
  }

  return (
        <Paper variant='normal' sx={classes.paper}>
           {children}
        </Paper>
  )
}
