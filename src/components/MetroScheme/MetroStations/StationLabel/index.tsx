import React, { Component } from 'react'
import { LabelBg, LabelText, Shapes } from '../../../../data/moscow/schemeData'

interface Iprops {
    isSelected: boolean
    isHovered: boolean
    labels: (LabelText|LabelBg)[]
}

class StationLabel extends Component<Iprops> {
    renderBg = () => {
        const { labels, isSelected, isHovered } = this.props
        if (isHovered||isSelected) {
            return labels.map((item: LabelText|LabelBg, index: number) => {
                if (item.type === Shapes.Rect) {
                    return (
                        <rect
                            key={ index }
                            { ...item }
                            fill={ isHovered ? '#dcdad8':  '#5a5a5a'}
                        />
                    )
                }

                return null
            })
        }
    }

    render() {
        const { labels, isSelected, isHovered } = this.props

        return (
            <>
                { this.renderBg() }

                { !isSelected && (
                    <text
                        fill='black'
                        stroke='white'
                        strokeOpacity={ 0.9 }
                        strokeWidth={ 4 }
                        fontFamily='Roboto'
                        fontSize={ 20 }
                        letterSpacing='0em'
                    >
                        { labels.map((item: LabelText|LabelBg, index: number) => {
                            if (item.type === Shapes.Text) {
                                return (
                                    <tspan key={ index } { ...item }>
                                        { item.name }
                                    </tspan>
                                )
                            }

                            return null
                        }) }
                    </text>
                ) }

                <text
                    fill={ isSelected && isHovered ? 'black' : isSelected ? 'white' : 'black'}
                    fontFamily='Roboto'
                    fontSize={ 20 }
                    letterSpacing='0em'

                >
                    { labels.map((item: (LabelText|LabelBg), index: number) => {
                        if (item.type === Shapes.Text) {
                            return (
                                <tspan key={ index } { ...item }>
                                    { item.name }
                                </tspan>
                            )
                        }

                        return null
                    }) }

                </text>
            </>
        )
    }
}

export default StationLabel
