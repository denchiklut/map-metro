import React, { Component } from 'react'
import cn from 'classnames'

import { Station } from '../../../../data/moscow/schemeData'
import StationLabel from '../StationLabel'
import StationMarker from '../StationMarker'

import styles from './MetroStation.module.css'

interface IProps {
    isSelected: boolean
    isHovered: boolean
    station: Station
    onStationClick: (station: Station) => void
}

class MetroStation extends Component<IProps> {
    onStationClick = (): void => {
        const { station, onStationClick } = this.props

        onStationClick(station)
    }

    render() {
        const { station, isSelected, isHovered } = this.props

        return (
            <g
                className={ styles.stationWrapper }
                onClick={ this.onStationClick }
            >
                <g className={ styles.stationMarker }>
                    <StationMarker markers={ station.markers } isSelected={ isSelected } />
                </g>

                <g className={ cn(styles.stationName, { [styles.hovered]: isHovered }) }>
                    <StationLabel labels={ station.labels } isSelected={ isSelected } />
                </g>
            </g>
        )
    }
}

export default MetroStation
