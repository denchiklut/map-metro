import React, { Component } from 'react'
import { Circle, Path, Text } from '../../data/moscow/schemeData'

import { renderLines } from '../../helpers'

import MetroStation from '../MetroStation'
import MetroLabel from '../MetroLabel'

import styles from './MetroScheme.module.css'

interface IProps {
    size: { width: number, height: number }
    resources: Path[]
    lines: (Path | Circle)[]
    lineLabels: (Circle | Text)[]
    transfers: Path[]
    stations: Circle[]
    labels: Text[]
}

interface IState {
    selectedStations: string[]
}

class MetroScheme extends Component<IProps, IState> {
    state = { selectedStations: [] }

    onStationClick = (stationId: string) => {
        const { selectedStations } = this.state

        this.props.labels.forEach((label: Text) => {
            if (label.id === stationId) {
                this.setState({ selectedStations: [...selectedStations, stationId] })
            }
        })
    }


    render() {
        const {
            size,
            resources,
            lines,
            lineLabels,
            transfers,
            stations,
            labels
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

                    <MetroStation
                        stations={ stations }
                        selectedStations={ selectedStations }
                        onStationClick={ this.onStationClick }
                    />
                    <MetroLabel
                        labels={ labels }
                        selectedStations={ selectedStations }
                        onStationClick={ this.onStationClick }
                    />
                </svg>
            </div>
        )
    }
}

export default MetroScheme
