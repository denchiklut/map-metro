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
            <text
                key={ index }
                className={ styles.stationName }
                { ...station }
                onClick={ this.onStationClick(station) }
            >
                { station.labels?.map((item: Label, index: number) => (
                    <tspan key={ index } { ...item.label }>
                        { item.label.name }
                    </tspan>
                )) }

            </text>
        ))
    }
}

export default MetroStation
