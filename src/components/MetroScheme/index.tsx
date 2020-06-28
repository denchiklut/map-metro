import React, { Component } from 'react'
import { LineCircle, LinePath, Path, Station } from '../../data/moscow/schemeData'

import { renderLines } from '../../helpers'
import MetroStations from './MetroStations'
import MetroLines from './MetroLines'

import styles from './MetroScheme.module.css'

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

    onStationClick = (station: Station):void => {
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

    onLineHover = (isHovered: boolean, line: LinePath|LineCircle):void => {
        const { hoveredStations } = this.state

        if (isHovered) {
            this.setState({ hoveredStations: line.stationIds })
        } else if (hoveredStations.length !== 0) {
            this.setState({ hoveredStations: []})
        }
    }

    onLineClick =  (line: LinePath|LineCircle): void => {
        const { stations } = this.props
        const lineStations: Station[] = []

        line.stationIds.forEach((stationId: number) => {
            const foundStation = stations.find(station => station.id === stationId)
            if (foundStation) lineStations.push(foundStation)
        })

        lineStations.forEach((station: Station) => this.onStationClick(station))
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

                    <MetroLines
                        lines={ lines }
                        onLineHover={ this.onLineHover }
                        onLineClick={ this.onLineClick }
                    />

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
