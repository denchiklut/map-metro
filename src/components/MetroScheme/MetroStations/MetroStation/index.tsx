import React, { Component } from 'react'
import cn from 'classnames'

import { Station } from '../../../../data/moscow/schemeData'
import StationLabel from '../StationLabel'
import StationMarker from '../StationMarker'

import styles from './MetroStation.module.css'

interface IProps {
    isSelected: boolean
    isHovered: boolean
    station: Station
    onStationClick: (station: Station) => void
}

interface IState {
    isLocalHovered: boolean
}

class MetroStation extends Component<IProps, IState> {
    state: IState = { isLocalHovered: false }

    onStationClick = (): void => {
        const { station, onStationClick } = this.props

        onStationClick(station)
    }

    handleHover = (): void => {
        this.setState(prevState => ({ isLocalHovered: !prevState.isLocalHovered }))
    }

    render() {
        const { station, isSelected, isHovered } = this.props
        const { isLocalHovered } = this.state

        return (
            <g
                onMouseEnter={ this.handleHover }
                onMouseLeave={ this.handleHover }
                className={ styles.stationWrapper }
                onClick={ this.onStationClick }
            >
                <g className={ styles.stationMarker }>
                    <StationMarker markers={ station.markers } isSelected={ isSelected } />
                </g>

                <g className={ cn(styles.stationName) }>
                    <StationLabel
                        labels={ station.labels }
                        isSelected={ isSelected }
                        isHovered={ isHovered||isLocalHovered }
                    />
                </g>
            </g>
        )
    }
}

export default MetroStation
