import { Box, IconButton, useTheme } from '@mui/material'
import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { SvgFilterHoverIn } from './ImageAnimations'
import ArticleIcon from '@mui/icons-material/Article'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

interface ContactIconButtonsProps {
  class: Object
}

interface StyledIconButtonProps {
  animationName?: string
  children: React.ReactNode
}

function StyledIconButton ({ animationName = '', children }: StyledIconButtonProps): JSX.Element {
  const [isHovering, setIsHovering] = useState(false)
  const classes = {
    icon: {
      '&:hover': {
        borderRadius: '50px',
        backgroundColor: 'transparent',
        filter: `url(#${animationName})`

      }
    }
  }

  const setMouseHover = () => {
    setIsHovering(true)
  }

  const setMouseLeave = () => {
    setIsHovering(false)
  }
  return (
        <IconButton onMouseEnter={() => setMouseHover()} onMouseLeave={() => setMouseLeave()} sx={classes.icon} size={'small'}>
            {isHovering && <SvgFilterHoverIn />}
            {children}
        </IconButton>
  )
}

export default function ContactIconButtons (props: ContactIconButtonsProps): JSX.Element {
  const theme = useTheme()
  const classes = {
    box: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: theme.spacing(1)

    },
    icon: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  }

  return (
        <Box sx={{ ...classes.box, ...props.class }}>
            <StyledIconButton animationName='hoverInFilter'>
                <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/roeeseren', '_blank', 'noopener,noreferrer')} sx={classes.icon} />
            </StyledIconButton>
            <StyledIconButton animationName='hoverInFilter'>
                <WhatsAppIcon sx={classes.icon}/>
            </StyledIconButton>
            <StyledIconButton animationName='hoverInFilter'>
                <EmailIcon href='roee2697@gmail.com' sx={classes.icon} />
            </StyledIconButton>
            <StyledIconButton animationName='hoverInFilter'>
                <ArticleIcon sx={classes.icon} />
            </StyledIconButton>
        </Box>
  )
}
