import React from 'react'
import { Grid, Slider, Typography, withStyles, Select, MenuItem, Button } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'

const MySlider = withStyles({
    root: {
      color: '#3f51b5',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

const styles = theme => ({
    inline: {
        display: 'inline-box',
        margin: '10px 20px 20px 0',
    },
    status: {
        minWidth: '100px',
    },
    button: {
        float: 'right',
        margin: '20px 10px 0 0',
    }
});

class MapControlComponent extends React.Component {

    handleChange = input => (e, value) => {
        e.preventDefault()

        if (input === 'limit') {
            this.props.updateLimit(value)
        } else {
            this.props.updateStatus(e.target.value)
        }
    }

    handleReload = e => {
        e.preventDefault()
        const { limit, status } = this.props
        this.props.reload({ limit, status })
    }

    render() {
        const { classes, status, limit } = this.props

        return (
            <Grid container>
                <Grid item xs={8}>
                    <Typography id="point-status" className={classes.inline} gutterBottom>
                        Status
                    </Typography>
                    <Select
                        labelId="status-label"
                        id="status-select"
                        className={classes.status}
                        value={status}
                        onChange={this.handleChange('status')}
                        >
                        <MenuItem value="ALL">All</MenuItem>
                        <MenuItem value="SUCCESS">Success</MenuItem>
                        <MenuItem value="PENDING">Pending</MenuItem>
                        <MenuItem value="FAILURE">Failure</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={4}>
                <Button id="reload-map" variant="contained" color="primary" className={classes.button} endIcon={<ReplayIcon />} onClick={this.handleReload}>
                    Reload
                </Button>
                </Grid>
                <Grid item xs={10}>
                    <Typography id="map-limit-slider" gutterBottom>
                        Map Limit
                    </Typography>
                    <MySlider
                        valueLabelDisplay="auto"
                        aria-labelledby="map-limit-slider"
                        value={limit || 10}
                        step={10}
                        marks
                        min={1}
                        max={1000}
                        onChange={this.handleChange('limit')}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(MapControlComponent)
