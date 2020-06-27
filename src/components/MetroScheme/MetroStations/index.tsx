import React, { Component } from 'react'

import { Station } from '../../../data/moscow/schemeData'
import MetroStation from './MetroStation'

interface IProps {
    stations: Station[]
    selectedStations: Station[]
    hoveredStations: number[]
    onStationClick: (station: Station) => void
}

class MetroStations extends Component<IProps> {
    onStationClick = (station: Station): void => {
        this.props.onStationClick(station)
    }

    checkHovered = (id: number): boolean => {
        const { hoveredStations } = this.props

        return hoveredStations.includes(id)
    }

    render() {
        const { stations, selectedStations } = this.props

        return stations.map((station: Station, index: number):JSX.Element => (
            <React.Fragment key={ index }>
                <MetroStation
                    onStationClick={ this.onStationClick }
                    isSelected={ selectedStations.includes(station) }
                    isHovered={ this.checkHovered(station.id) }
                    station={ station }
                />
            </React.Fragment>
        ))
    }
}

export default MetroStations
