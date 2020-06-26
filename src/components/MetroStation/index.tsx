import React, { Component } from 'react'

import { Circle } from '../../data/moscow/schemeData'

import styles from './MetroStation.module.css'

interface IProps {
    stations: Circle[]
    onStationClick: (stationId: string) => void
}

class MetroStation extends Component<IProps> {
    onStationClick = (station: Circle) => () => {
        if (station.stationId) {
            this.props.onStationClick(station.stationId)
        }
    }

    render() {
        const { stations } = this.props

        return stations.map((station: Circle, index: number):JSX.Element => (
            <g
                key={ index }
                className={ styles.station }
                onClick={ this.onStationClick(station) }
            >
                <circle
                    fill='white'
                    r={ 8 }
                    cx={ station.cx }
                    cy={ station.cy }
                />
                <circle
                    fill={ station.fill }
                    r={ station.r }
                    cx={ station.cx }
                    cy={ station.cy }
                />
            </g>
        ))
    }
}

export default MetroStation
