import React, { Component } from 'react'
import { Circle, Path, Station, Text } from '../../data/moscow/schemeData'

import { renderLines } from '../../helpers'

import MetroStations from './MetroStations'

import styles from './MetroScheme.module.css'

interface IProps {
    size: { width: number, height: number }
    resources: Path[]
    lines: (Path | Circle)[]
    lineLabels: (Circle | Text)[]
    transfers: Path[]
    stations: Station[]
}

interface IState {
    selectedStations: Station[]
}

class MetroScheme extends Component<IProps, IState> {
    state = { selectedStations: [] }

    onStationClick = (station: Station) => {
        console.log(station)
    }


    render() {
        const {
            size,
            resources,
            lines,
            lineLabels,
            transfers,
            stations,
        } = this.props
        const { selectedStations } = this.state

        return (
            <div>
                <svg
                    version='1.1'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={ `0 0 ${ size.width } ${ size.height }` }
                    className={ styles.mapSvg }
                >
                    { renderLines(resources) }
                    { renderLines(lines) }
                    { renderLines(lineLabels) }
                    { renderLines(transfers) }

                    <MetroStations
                        stations={ stations }
                        selectedStations={ selectedStations }
                        onStationClick={ this.onStationClick }
                    />
                </svg>
            </div>
        )
    }
}

export default MetroScheme
