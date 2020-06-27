import React, { Component } from 'react'

import { Station } from '../../../../data/moscow/schemeData'
import StationLabel from '../StationLabel'
import StationMarker from '../StationMarker'

import styles from './MetroStation.module.css'

interface IProps {
    isSelected: boolean
    station: Station
    onStationClick: (station: Station) => void
}

class MetroStation extends Component<IProps> {
    onStationClick = () => {
        const { station, onStationClick } = this.props

        onStationClick(station)
    }

    render() {
        const { station } = this.props

        return (
            <g
                className={ styles.stationWrapper }
                onClick={ this.onStationClick }
            >
                <g className={ styles.stationMarker }>
                    <StationMarker markers={ station.markers } />
                </g>

                <g className={ styles.stationName }>
                    <StationLabel labels={ station.labels } />
                </g>
            </g>
        )
    }
}

export default MetroStation
