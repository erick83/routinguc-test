import React from 'react'
import PropTypes from 'prop-types'

import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

class UserListComponent extends React.Component {

    static propTypes = {
        users: PropTypes.array
    }

    static defaultProps = {
        users: []
    }

    constructor(props) {
        super(props)

        this.state = {
            test: true,
        }
    }

    render() {
        const { users } = this.props
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Created at</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        )
    }
}

export default UserListComponent
