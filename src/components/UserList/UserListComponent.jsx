import React from 'react'
import PropTypes from 'prop-types'

import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

class UserListComponent extends React.Component {

    static propTypes = {
        users: PropTypes.array,
        fetchTrigger: PropTypes.func,
    }

    static defaultProps = {
        users: [],
        fetchTrigger: () => {}
    }

    constructor(props) {
        super(props)

        this.state = {
            test: true,
        }
    }

    componentDidMount() {
        this.props.fetchTrigger()
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
                    <TableBody>
                        {users.map(row => (
                            <TableRow key={`user-list-${row.email}`}>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.created_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default UserListComponent
