import React, { Component } from 'react'

import { Station } from '../../../data/moscow/schemeData'
import MetroStation from './MetroStation'

interface IProps {
    stations: Station[]
    selectedStations: string[]
    onStationClick: (station: Station) => void
}

class MetroStations extends Component<IProps> {
    onStationClick = (station: Station): void => {
        this.props.onStationClick(station)
    }

    isSelected = (id: string): boolean => {
        const { selectedStations } = this.props

        for (let i = 0; i <= selectedStations.length; i++) {
            if (selectedStations[i] === id) return true
            i++
        }

        return false
    }

    render() {
        const { stations } = this.props

        return stations.map((station: Station, index: number):JSX.Element => {

            return (
                <MetroStation
                    onStationClick={ this.onStationClick }
                    isSelected={ false }
                    station={ station }
                />
            )
        })
    }
}

export default MetroStations
