import React from 'react'
import PropTypes from 'prop-types'

class MapComponent extends React.Component {
    static propTypes = {
        points: PropTypes.array,
        fetchTrigger: PropTypes.func,
    }

    static defaultProps = {
        points: [],
        fetchTrigger: () => {}
    }

    static getDerivedStateFromProps(props, state) {
        if(props.points.length > 0) {
            const position = [props.points[0].origin_latitude, props.points[0].origin_longitude]
            if (JSON.stringify(position) !== JSON.stringify(state.position)) {
                return position
            }
        }
        return null
    }

    constructor(props) {
        super(props)

        this.setState = {
            position: [0,0],
        }
    }

    componentDidMount() {
        this.props.fetchTrigger()
    }

    render() {
        console.log('MapComponent', this.props.points)
        return(
            <div>Map</div>
        )
    }
}

export default MapComponent
