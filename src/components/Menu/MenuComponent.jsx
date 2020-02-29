import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { openSideMenu } from '../../redux/ui-states/actions'
import { userLogout } from '../../redux/user/actions'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    mutateButton: {
        textDecoration: 'none',
        color: '#fff',
    }
}));

const mapStateToProps = store => ({
    logged: store.user.logged
})

const mapDispatchToProps = dispatch => ({
    openSideMenuHandler: () => dispatch(openSideMenu()),
    logoutHandler: () => dispatch(userLogout()),
})

function MenuComponent({ logged, openSideMenuHandler, logoutHandler }) {
    const classes = useStyles()
    const location = useLocation()

    let route = ''
    let text = ''

    if (location.pathname === '/login') {
        route = '/signup'
        text = 'Signup'
    } else if (location.pathname === '/signup') {
        route = '/login'
        text = 'Login'
    }

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" onClick={openSideMenuHandler} className={classes.menuButton} color="inherit" aria-label="menu" disabled={!logged}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                RoutingUC TEST
            </Typography>

            {logged ?
                <Button color="inherit" onClick={() => logoutHandler()}>Loguot</Button> :
                <Link to={route} className={classes.mutateButton}>
                    <Button color="inherit">{text}</Button>
                </Link>
            }
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
