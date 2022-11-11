import React from 'react'
import Icon from '@mdi/react'
import { mdiAccountSchoolOutline, mdiCodeBracesBox, mdiAccountGroup, mdiSonyPlaystation, mdiAirballoon } from '@mdi/js'
import Box from '@mui/material/Box'
import { Typography, useTheme } from '@mui/material'

interface Property {
  icon: string
  description: string
}

const data: Property[] = [
  {
    icon: mdiAccountSchoolOutline,
    description: 'Computer Science Student at the Technion, Haifa'
  },
  {
    icon: mdiAccountGroup,
    description: 'peoples’ person, team worker'
  },
  {
    icon: mdiCodeBracesBox,
    description: 'Programmer'
  },
  {
    icon: mdiSonyPlaystation,
    description: 'love playing card, board and video games '
  },
  {
    icon: mdiAirballoon,
    description: 'enjoy traveling, exploring new places and meet new people'
  }

]

export default function AboutMe (): JSX.Element {
  const theme = useTheme()

  const classes = {
    property: {
      display: 'flex',
      gap: theme.spacing(3),
      fontFamily: 'Merienda',
      FontFace: {
        fontFamily: 'Merienda',
        src: 'url(./fonts/Merienda.ttf)'
      }
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(5)
    }
  }
  return (
        <Box sx={classes.container}>
        {
            data.map((property, index) =>
            <Box sx={classes.property} style={{ paddingLeft: theme.spacing(index + 1) }}>
                <Icon path={property.icon} size={1} color={theme.palette.primary.main} />
                <Typography variant={'property'}>{property.description}</Typography>
                </Box>
            )
        }
        </Box>
  )
}
