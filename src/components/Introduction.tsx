import { ThemeProvider } from "@emotion/react";
import { Box, Button, Paper, Theme, Typography, useTheme } from "@mui/material";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import { ContactIconButtons } from "./ContactButtons";
import { SvgFilterHoverIn, SvgFilterHoverOut, SvgFilterStart } from "./ImageAnimations";


interface IntroductionProps {
    initialAnimation: boolean
}

export default function Introduction({initialAnimation=true}: IntroductionProps) {
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [isPageStart, setPageStart] = useState(true)
    
    const theme = useTheme()
    
    const classes = {
    navigation: {
        display: 'grid',
        flexGrow: 1,
        height: '60vh',
        maxWidth: '80vh',
        "grid-template-columns": '16% 39% 5% 40%',
        "grid-template-rows": '14% 14% 14% 17% 8% 17% 14%'
    },
    profilePic: {
        gridColumnStart: 4,
        gridRowStart: 2, 
        gridRowEnd: 8,
        width: '100%',
        maxHeight: '100%',
        borderRadius: 13,
        filter: (isPageStart && initialAnimation) ? `url(#startFilter)` : (isHovering ? `url(#hoverInFilter)` : `url(#hoverOutFilter)`)
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundImage: `linear-gradient(#EEE5E5, ${theme.palette.secondary.dark}, #EEE5E5)`
    },
    contactIcons: {
        gridRowStart: 5,
        gridColumnStart: 2
    }
}

    useEffect(() => {
        setTimeout(() => {
            setPageStart(false)
        }, 1000)
    }, [])

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    useEffect(() => {
        setIsHovering(false)
    }, [])

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    return (
        <Paper variant='normal' sx={classes.paper}>
            <Box sx={classes.navigation}>
                {isPageStart ? <SvgFilterStart /> : <></>}
                {isHovering ? <SvgFilterHoverIn /> : <SvgFilterHoverOut />}
                <Box component={'img'} src={'profile2.jpg'} sx={classes.profilePic}
                onMouseOver={() => handleMouseOver()}
                onMouseLeave={() => handleMouseLeave()}
                />
                <Typography sx={{
                    gridRowStart: 3,
                    gridRowEnd: 3,
                    gridColumnStart: 1,
                    gridColumnEnd: 3
                }}
                variant={'h4'}>Hi! My name is Roee, and I'm a Software Developer
                </Typography>
                <ContactIconButtons class={classes.contactIcons} />
               

            </Box>
        </Paper>
    )
    
}