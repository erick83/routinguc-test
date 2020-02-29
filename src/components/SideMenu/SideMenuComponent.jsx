import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, makeStyles, ListItemIcon, ListItemText } from '@material-ui/core'

import { closeSideMenu } from '../../redux/ui-states/actions'
import { ListAltRounded } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    container: {
        width: '250px',
        paddingTop: '20px',
    },
    link: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
    },
    itemText: {
        fontSize: '18px',
        fontWeight: '00',
    }
}))

const mapStateToProps = state => ({
    show: state.ui.sideMenu.show
})

const mapDispatchToProps = { closeSideMenu }

function SideMenuComponent({show, closeSideMenu}) {

    const classes = useStyles()

    return (
        <Drawer open={show} onClose={closeSideMenu}>
            <div
                className={classes.container}
                role="presentation"
                onClick={closeSideMenu}
            >
                <List>
                    <Link to="/user-list" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon><ListAltRounded fontSize="large" /></ListItemIcon>
                            <ListItemText primary={<span className={classes.itemText}>User List</span>} />
                        </ListItem>
                    </Link>
                    <Link to="/map-info" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon><ListAltRounded fontSize="large" /></ListItemIcon>
                            <ListItemText primary={<span className={classes.itemText}>Map Info</span>} />
                        </ListItem>
                    </Link>
                </List>
            </div>
        </Drawer>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent)
