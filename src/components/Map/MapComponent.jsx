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
