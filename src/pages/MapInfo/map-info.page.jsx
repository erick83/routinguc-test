import React from 'react'
import { connect } from 'react-redux'
import { Container, makeStyles } from '@material-ui/core'

import { mapDataFetch } from '../../redux/map-data/actions'
import MapComponent from '../../components/Map/MapComponent'

const useStyles = makeStyles({
    container: {
        height: '800px',
        width: '1200px',
    }
})

const mapStateToProps = state => ({
    points: state.mapData.points,
    max: state.mapData.max,
    statusFilter: state.mapData.statusFilter,
})

const mapDispatchToProps = dispatch => ({
    getMapData: () => dispatch(mapDataFetch()),
})

function MapInfoPage({ points, max, statusFilter, getMapData }) {
    const classes = useStyles()

    return (
        <Container>
            <MapComponent className={classes.container} points={points} max={max} statusFilter={statusFilter} fetchTrigger={getMapData}/>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MapInfoPage)
