import React, { Component } from 'react'

import { Circle } from '../../data/moscow/schemeData'

import styles from './MetroStation.module.css'

interface IProps {
    stations: Circle[]
}

class MetroStation extends Component<IProps> {
    render() {
        const { stations } = this.props

        return stations.map((station: Circle, index: number):JSX.Element => (
            <circle
                key={ index }
                className={ styles.station }
                { ...station }
            />
        ))
    }
}

export default MetroStation
