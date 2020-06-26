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
            <g key={ index } className={ styles.station }>
                <circle
                    fill='white'
                    r={ 8 }
                    cx={ station.cx }
                    cy={ station.cy }
                />
                <circle { ...station } />
            </g>
        ))
    }
}

export default MetroStation
