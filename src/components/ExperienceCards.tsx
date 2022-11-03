import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material'

interface JobDescription {
  title: string
  desc: string

}

export interface JobInfo {
  role: string
  company: string
  workPeriod: string
  description: JobDescription[]
}

export interface IndexProp {
  index: number
}

export default function SingleJobCard ({ role, company, description, index }: JobInfo & IndexProp): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const classes = {
    box: {
      display: 'flex',
      gap: theme.spacing(2),
      textAlign: 'center',
      flexDirection: index % 2 == 0 ? 'row' : 'row-reverse'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: theme.palette.primary.main
    }
  }

  return (
        <Box sx={classes.box}>
        <Card sx={classes.content}>
            <CardContent>
                {!isOpen
                  ? <><Typography>{role}</Typography>
                <Typography>{company}</Typography></>
                  : <></>}

                <IconButton size={'small'} onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen
                      ? (index % 2 == 0) ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />
                      : (index % 2 == 0) ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />
                    }
                </IconButton>
            </CardContent>
        </Card>
        {isOpen && description.map((desc) =>
            <Card>
                <CardContent>
                    <Typography>{desc.title}</Typography>
                    <Typography>{desc.desc}</Typography>
                </CardContent>
            </Card>
        )}
        </Box>
  )
}
