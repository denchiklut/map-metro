import React, { Component } from 'react'

import { Label, Text } from '../../data/moscow/schemeData'

import styles from './MetroLabel.module.css'

interface IProps {
    labels: Text[]
}

class MetroStation extends Component<IProps> {
    onStationClick = (station: Text) => () => {
        console.log(station)
    }

    render() {
        const { labels } = this.props

        return labels.map((station: Text, index: number):JSX.Element => (
            <g key={ index }  className={ styles.stationName }>
                <text
                    fill='black'
                    stroke='white'
                    strokeOpacity={ 0.9 }
                    strokeWidth={ 4 }
                    fontFamily='Roboto'
                    fontSize={ 20 }
                    letterSpacing='0em'
                    onClick={ this.onStationClick(station) }
                >
                    { station.labels?.map((item: Label, index: number) => (
                        <tspan key={ index } { ...item.label }>
                            { item.label.name }
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
                        <tspan key={ index } { ...item.label }>
                            { item.label.name }
                        </tspan>
                    )) }

                </text>
            </g>
        ))
    }
}

export default MetroStation
