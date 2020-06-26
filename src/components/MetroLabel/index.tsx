import React, { Component } from 'react'

import { Label, Text } from '../../data/moscow/schemeData'

import styles from './MetroLabel.module.css'

interface IProps {
    labels: Text[]
    selectedStations: string[]
    onStationClick: (stationId: string) => void
}

class MetroStation extends Component<IProps> {
    onStationClick = (station: Text) => () => {
        if (station.id) {
            this.props.onStationClick(station.id)
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
        const { labels } = this.props

        return labels.map((station: Text, index: number):JSX.Element => {
            const isSelected = station.id && this.isSelected(station.id)

            return (
                <g key={ index }  className={ styles.stationName }>
                    <text
                        fill='black'
                        stroke={ isSelected ? 'black' : 'white' }
                        strokeOpacity={ 0.9 }
                        strokeWidth={ isSelected ? 1 : 4 }
                        fontFamily='Roboto'
                        fontSize={ 20 }
                        letterSpacing='0em'
                        onClick={ this.onStationClick(station) }
                    >
                        { station.labels?.map((item: Label, index: number) => (
                            <tspan key={ index } { ...item }>
                                { item.name }
                            </tspan>
                        )) }
                    </text>

                    <text
                        fill='black'
                        fontFamily='Roboto'
                        fontSize={ 20 }
                        letterSpacing='0em'
                        onClick={ this.onStationClick(station) }
                    >
                        { station.labels?.map((item: Label, index: number) => (
                            <tspan key={ index } { ...item }>
                                { item.name }
                            </tspan>
                        )) }

                    </text>
                </g>
            )
        })
    }
}

export default MetroStation
