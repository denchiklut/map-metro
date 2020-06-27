import React, { Component } from 'react'
import { Label } from '../../../../data/moscow/schemeData'

interface Iprops {
    isSelected: boolean
    labels: Label[]
}

class StationLabel extends Component<Iprops> {
    render() {
        const { labels, isSelected } = this.props

        return (
            <>
                <text
                    fill='black'
                    stroke={ isSelected ? 'black' : 'white' }
                    strokeOpacity={ 0.9 }
                    strokeWidth={ isSelected ? 1: 4 }
                    fontFamily='Roboto'
                    fontSize={ 20 }
                    letterSpacing='0em'
                >
                    { labels.map((item: Label, index: number) => (
                        <tspan key={ index } { ...item }>
                            { item.name }
                        </tspan>
                    )) }
                </text>

                <text
                    fill='black'
                    fontFamily='Roboto'
                    fontSize={ 20 }
                    letterSpacing='0em'

                >
                    { labels.map((item: Label, index: number) => (
                        <tspan key={ index } { ...item }>
                            { item.name }
                        </tspan>
                    )) }

                </text>
            </>
        )
    }
}

export default StationLabel
