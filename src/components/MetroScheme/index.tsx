import React, { Component } from 'react'
import { LineCircle, LinePath, Path, Station } from '../../data/moscow/schemeData'

import { renderLines } from '../../helpers'

import MetroStations from './MetroStations'

import styles from './MetroScheme.module.css'
import MetroLines from './MetroLines'

interface IProps {
    size: { width: number, height: number }
    resources: Path[]
    lines: (LinePath|LineCircle)[]
    transfers: Path[]
    stations: Station[]
}

interface IState {
    selectedStations: Station[]
    hoveredStations: number[]
}

class MetroScheme extends Component<IProps, IState> {
    state:IState = {
        selectedStations: [],
        hoveredStations: []
    }

    onStationClick = (station: Station) => {
        const { selectedStations } = this.state
        const index = selectedStations.indexOf(station)

        if (index !== -1) {
            selectedStations.splice(index, 1)
        } else  {
            selectedStations.push(station)
        }

        this.setState({ selectedStations })
        console.log(station)
    }

    onLineHover = (isHovered: boolean, line: LinePath|LineCircle) => {
        const { hoveredStations } = this.state

        if (isHovered) {
            this.setState({ hoveredStations: line.stationIds })
        } else if (hoveredStations.length !== 0) {
            this.setState({ hoveredStations: []})
        }
    }

    render() {
        const {
            size,
            resources,
            lines,
            transfers,
            stations,
        } = this.props
        const { selectedStations, hoveredStations } = this.state

        return (
            <div>
                <svg
                    version='1.1'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={ `0 0 ${ size.width } ${ size.height }` }
                    className={ styles.mapSvg }
                >
                    { renderLines(resources) }

                    <MetroLines lines={ lines } onLineHover={ this.onLineHover } />

                    { renderLines(transfers) }

                    <MetroStations
                        stations={ stations }
                        selectedStations={ selectedStations }
                        hoveredStations={ hoveredStations }
                        onStationClick={ this.onStationClick }
                    />
                </svg>
            </div>
        )
    }
}

export default MetroScheme
