import React, { Component } from 'react'
import { Circle } from '../../../../data/moscow/schemeData'

interface Iprops {
    isSelected: boolean
    markers: Circle[]
}

class StationMarker extends Component<Iprops> {
    render() {
        const { markers, isSelected } = this.props

        return markers.map((marker: Circle, index: number) =>  (
            <g key={ index }>
                <circle
                    fill={ isSelected ? 'black' : 'white'}
                    r={ 8 }
                    cx={ marker.cx }
                    cy={ marker.cy }
                />

                <circle
                    fill={ isSelected ? 'black' : marker.fill }
                    r={ marker.r }
                    cx={ marker.cx }
                    cy={ marker.cy }
                />
            </g>
        ))
    }
}

export default StationMarker
