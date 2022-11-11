import { createTheme } from '@mui/material/styles'
import type {} from '@mui/lab/themeAugmentation'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    normal: true
    background: true
  }
}

declare module '@mui/lab/TimelineDot' {
  interface TimelineDotPropsVariantOverrides {
    job: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    property: true
    propertyHeadline: true
  }
}

export const MyTheme = createTheme({
  palette: {
    primary: {
      main: '#695D6F'
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
    fontFamily: [
      'Merienda',
      'Merienda-Bold'
    ].join(','),
    h4: {
      color: '#281F1B'
    }
  },
  components: {
    MuiTimelineDot: {
      variants: [
        {
          props: { variant: 'job' },
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
          props: { variant: 'normal' },
          style: {
            backgroundColor: '#DDCECD'
          }
        },
        {
          props: { variant: 'background' },
          style: {
            backgroundColor: '#EEE5E5'
          }
        }
      ]
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'property' },
          style: {
            color: '#695D6F',
            fontFamily: 'Merienda'
          }
        },
        {
          props: { variant: 'propertyHeadline' },
          style: {
            color: '#695D6F',
            fontSize: '3rem',
            fontFamily: 'Merienda'
          }
        }
      ]
    }
  }
})
