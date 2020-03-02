import React from 'react'
import { connect } from 'react-redux'
import { Container, makeStyles } from '@material-ui/core'

import { mapDataFetch, updateLimit as _updateLimit, updateStatus as _updateStatus } from '../../redux/map-data/actions'
import MapComponent from '../../components/Map/MapComponent'
import MapControlComponent from '../../components/MapControl/MapControlComponent'

const useStyles = makeStyles({
    container: {
        height: '800px',
        width: '1200px',
    }
})

const mapStateToProps = state => ({
    points: state.mapData.points,
    limit: state.mapData.limit,
    status: state.mapData.status,
})

const mapDispatchToProps = dispatch => ({
    getMapData: (payload) => dispatch(mapDataFetch(payload)),
    updateLimit: payload => dispatch(_updateLimit(payload)),
    updateStatus: payload => dispatch(_updateStatus(payload)),
})

function MapInfoPage({ points, status, limit, updateLimit, updateStatus, statusFilter, getMapData }) {
    const classes = useStyles()

    return (
        <Container>
            <MapControlComponent status={status} limit={limit} reload={getMapData} updateLimit={updateLimit} updateStatus={updateStatus} />
            <MapComponent className={classes.container} points={points} max={limit} statusFilter={statusFilter} fetchTrigger={getMapData}/>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MapInfoPage)
