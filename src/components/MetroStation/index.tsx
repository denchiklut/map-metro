import React, { Component } from 'react'

import { Circle } from '../../data/moscow/schemeData'

import styles from './MetroStation.module.css'

interface IProps {
    stations: Circle[]
    selectedStations: string[]
    onStationClick: (stationId: string) => void
}

class MetroStation extends Component<IProps> {
    onStationClick = (station: Circle) => () => {
        if (station.stationId) {
            this.props.onStationClick(station.stationId)
        }
    }

    isSelected = (id: string) => {
        const { selectedStations } = this.props

        for (let i = 0; i <= selectedStations.length; i++) {
            if (selectedStations[i] === id) return true
            i++
        }

        return false
    }

    render() {
        const { stations } = this.props

        return stations.map((station: Circle, index: number):JSX.Element => {
            const isSelected = station.stationId && this.isSelected(station.stationId)

            return (
                <g
                    key={ index }
                    className={ styles.station }
                    onClick={ this.onStationClick(station) }
                >
                    <circle
                        fill={ isSelected ? 'black' : 'white'}
                        r={ 8 }
                        cx={ station.cx }
                        cy={ station.cy }
                    />
                    <circle
                        fill={ isSelected ? 'black' :  station.fill }
                        r={ station.r }
                        cx={ station.cx }
                        cy={ station.cy }
                    />
                </g>
            )
        })
    }
}

export default MetroStation
