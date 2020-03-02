import React from 'react'
import E404 from '../../assets/404.jpg'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    container: {
        display: 'flex',
        width: '100%',
    },
    image: {
        margin: 'auto',
    }
})

function NotFoundPage() {
    const classes = useStyle()

    return (
        <div className={classes.container}>
            <img className={classes.image} src={E404} alt="404"/>
        </div>
    )
}

export default NotFoundPage
