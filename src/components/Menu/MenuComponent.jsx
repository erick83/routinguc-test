import React from 'react'
import { useLocation, Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppBar, BottomNavigation, BottomNavigationAction, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ListAltRounded, Map } from '@material-ui/icons';

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
        flexGrow: 0,
    },
    titleFull: {
        flexGrow: 1,
    },
    navigator: {
        flexGrow: 1,
        background: 'none',
        justifyContent: 'flex-end',
        paddingRight: '40px'
    },
    navigatorChild: {
        color: '#fff',
        maxWidth: '135px',
    },
    navigatorChildSelected: {
        color: '#eee !important'
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

function MenuComponent({ logged, logoutHandler }) {
    const classes = useStyles()
    const location = useLocation()
    const history = useHistory()

    const [innerRoute, setInnerRoute] = React.useState('/')

    const handleChange = (event, newValue) => {
        setInnerRoute(newValue)
        history.push(newValue)
    }

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
            <Typography variant="h6" className={logged ? classes.title : classes.titleFull}>
                RoutingUC TEST
            </Typography>
            {logged && (
                <BottomNavigation value={innerRoute} onChange={handleChange} className={classes.navigator}>
                    <BottomNavigationAction
                        label="Map Info"
                        value="/map-info"
                        icon={<Map />}
                        classes={{
                            root: classes.navigatorChild,
                            selected: classes.navigatorChildSelected,
                        }}
                    />
                    <BottomNavigationAction
                        label="Lista de Usuarios"
                        value="/user-list"
                        icon={<ListAltRounded />}
                        classes={{
                            root: classes.navigatorChild,
                            selected: classes.navigatorChildSelected,
                        }}
                    />
                </BottomNavigation>
            )}

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
