import React from 'react'
import { connect } from 'react-redux'

import { mapDataFetch } from '../../redux/map-data/actions'
import MapComponent from '../../components/Map/MapComponent'

const mapStateToProps = state => ({
    mapData: state.mapData.points,
})

const mapDispatchToProps = dispatch => ({
    getMapData: () => dispatch(mapDataFetch()),
})

function MapInfoPage({ mapData = [], getMapData }) {
    //TODO: Remove when can apply filters
    const data = mapData.length > 50 ? mapData.slice(0, 50) : mapData

    return (
        <div>
            <MapComponent points={data} fetchTrigger={getMapData}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MapInfoPage)
