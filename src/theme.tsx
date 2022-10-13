import { createTheme } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      normal: true;
    }
  }



export const MyTheme = createTheme({
    palette: {
        primary: {
            main: '#5E747F'
        },
        secondary: {
            main: '#C4C7AB'
        }
    },
    components: {
        MuiPaper: {
            variants: [
                {
                    props: {variant: 'normal'},
                    style: {
                        backgroundColor: '#C4C7AB'
                    }
                }
            ]
        }
    }
})