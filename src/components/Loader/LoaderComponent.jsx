import React from 'react'
import { makeStyles, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1,
    },
    child: {
        margin: 'auto',
    },
})

function LoaderComponent({visible}) {
    const classes = useStyles()

    return (
        <div className={classes.container} style={{display: visible ? 'flex' : 'none'}}>
            <div className={classes.child}><CircularProgress size={80}/></div>
        </div>
    )
}

export default LoaderComponent
