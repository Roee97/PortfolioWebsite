import { createTheme } from '@mui/material/styles'
import type {} from '@mui/lab/themeAugmentation';
import React from 'react'


declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      normal: true;
      background: true;
    }
  }

declare module '@mui/lab/TimelineDot' {
  interface TimelineDotPropsVariantOverrides {
    job: true;
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
            light: '#FFFFFF',
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
        MuiTimelineDot: {
            variants: [
                {
                    props: {variant: 'job'},
                    style: {
                        backgroundColor: '#5E6F81',
                        borderColor: '#5E6F81'
                    }
                }
            ]
        },
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