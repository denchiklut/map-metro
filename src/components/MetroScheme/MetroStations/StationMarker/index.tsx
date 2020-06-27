import React, { Component } from 'react'
import { Circle } from '../../../../data/moscow/schemeData'

interface Iprops {
    markers: Circle[]
}

class StationMarker extends Component<Iprops> {
    render() {
        const { markers } = this.props

        return markers.map((marker: Circle) =>  (
            <>
                <circle
                    fill='white'
                    r={ 8 }
                    cx={ marker.cx }
                    cy={ marker.cy }
                />

                <circle
                    fill={ marker.fill }
                    r={ marker.r }
                    cx={ marker.cx }
                    cy={ marker.cy }
                />
            </>
        ))
    }
}

export default StationMarker
