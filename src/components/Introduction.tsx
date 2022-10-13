import { Box, Paper, Theme, Typography } from "@mui/material";
import React from "react";

// const useStyles = makeStyles({
//     navigation : {
//         backgroundColor: '#1456ff'
//     }
// })

const classes = {
    navigation: {
        display: 'grid',
        backgroundColor: 'theme.palette.secondary.main',
        flexGrow: 1,
        height: '60vh',
        "grid-template-columns": '1fr 1fr 1fr',
        "grid-template-rows": '1fr 10fr auto 10fr 10fr'
    }
}


export default function Introduction() {

    return (
        <Box sx={classes.navigation}>
            <Paper variant={'normal'} sx={{gridColumnStart: 2, gridColumnEnd: 4, gridRowStart: 2, gridRowEnd: 4}}>
            <Typography >MyNAME</Typography>
        </Paper>    
        </Box>
        
    )
    
}