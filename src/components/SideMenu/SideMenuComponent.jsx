import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, makeStyles } from '@material-ui/core'

import { closeSideMenu } from '../../redux/ui-states/actions'

const useStyles = makeStyles({
    container: {
        width: '250px'
    }
})

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
                    <ListItem>User List</ListItem>
                    <ListItem>Map Info</ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent)