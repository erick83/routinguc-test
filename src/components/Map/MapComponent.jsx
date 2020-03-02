import React from 'react'
import PropTypes from 'prop-types'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
// import SvgIcon from '../../assets/maps-svg-fill/018-pin-5.svg'
import SvgSuccessIcon from '../../assets/my-icons/success-pin.svg'
import SvgPendingIcon from '../../assets/my-icons/pending-pin.svg'
import SvgErrorIcon from '../../assets/my-icons/error-pin.svg'

import 'leaflet/dist/leaflet.css'
import './MapComponent.css'

export const successIcon = new L.Icon({
    iconUrl: SvgSuccessIcon,
    iconRetinaUrl: SvgSuccessIcon,
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40],
  })

export const pendingIcon = new L.Icon({
    iconUrl: SvgPendingIcon,
    iconRetinaUrl: SvgPendingIcon,
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40],
  })

export const errorIcon = new L.Icon({
    iconUrl: SvgErrorIcon,
    iconRetinaUrl: SvgErrorIcon,
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40],
  })

const iconSelecter = {
    SUCCESS: successIcon,
    PENDING: pendingIcon,
    FAILURE: errorIcon,
}

class MapComponent extends React.Component {
    static propTypes = {
        points: PropTypes.array,
        max: PropTypes.number,
        statusFilter: PropTypes.array,
        fetchTrigger: PropTypes.func,
    }

    static defaultProps = {
        points: [],
        fetchTrigger: () => {}
    }

    constructor(props) {
        super(props)

        this.state = {
            zoom: 13
        }
    }

    componentDidMount() {
        this.props.fetchTrigger()
    }

    getPoints = (points = []) => points.map(this.getLatLng)

    getLatLng = ({lat, lng}) => ([lat, lng])

    getStatus = ({status}) => status

    getFirstPoint = (points = []) => {
        if (points.length > 0) {
            return [points[0].lat, points[0].lng]
        }
        return [51.505, -0.09]
    }

    render() {
        const { zoom } = this.state
        const { points } = this.props

        return(
            <ScopedCssBaseline>
                <Map center={this.getFirstPoint(points)} zoom={zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {points.map((point, key) => {
                        return (
                            <Marker position={this.getLatLng(point)} key={key+JSON.stringify(point)} icon={iconSelecter[point.status]}>
                                <Popup>Status<br />{point.status}</Popup>
                            </Marker>
                        )}
                    )}
                </Map>
            </ScopedCssBaseline>
        )
    }
}

export default MapComponent
