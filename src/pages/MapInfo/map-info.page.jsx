import React from 'react'
import { connect } from 'react-redux'
import { Container, makeStyles } from '@material-ui/core'

import { MapComponent, MapControlComponent, LoaderComponent } from '../../components'
import { mapDataFetch, updateLimit as _updateLimit, updateStatus as _updateStatus } from '../../redux/map-data/actions'

const useStyles = makeStyles({
    container: {
        height: '800px',
        width: '1200px',
    }
})

const mapStateToProps = store => ({
    loading: store.request.loading,
    points: store.mapData.points,
    limit: store.mapData.limit,
    status: store.mapData.status,
})

const mapDispatchToProps = dispatch => ({
    getMapData: (payload) => dispatch(mapDataFetch(payload)),
    updateLimit: payload => dispatch(_updateLimit(payload)),
    updateStatus: payload => dispatch(_updateStatus(payload)),
})

function MapInfoPage({ points, status, limit, loading, updateLimit, updateStatus, statusFilter, getMapData }) {
    const classes = useStyles()

    return (
        <Container>
            <LoaderComponent visible={loading} />
            <MapControlComponent status={status} limit={limit} reload={getMapData} updateLimit={updateLimit} updateStatus={updateStatus} />
            <MapComponent className={classes.container} points={points} max={limit} statusFilter={statusFilter} fetchTrigger={getMapData}/>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MapInfoPage)
