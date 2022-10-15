import { createTheme } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      normal: true;
      background: true;
    }
  }



export const MyTheme = createTheme({
    palette: {
        primary: {
            main: '#5E6F81'
        },
        // background colors
        secondary: {
            main: '#CDBDBC',
            light: '#EEE5E5',
            dark: '#CAB5B4'
        },
        info: {
            main: '#DDE432'
        }
    },
    typography: {
        h4: {
            color: '#281F1B'
        }
    },
    components: {
        MuiPaper: {
            variants: [
                {
                    props: {variant: 'normal'},
                    style: {
                        backgroundColor: '#DDCECD'
                    }
                },
                {
                    props: {variant: 'background'},
                    style: {
                        backgroundColor: '#EEE5E5'
                    }
                }
            ]
        }
    }
})