import React, { Component } from 'react'

import { LineCircle, LinePath } from '../../../data/moscow/schemeData'

import MetroLine from './MetroLine'

interface IProps {
    lines: (LinePath|LineCircle)[]
    onLineClick: (line: LinePath|LineCircle) => void
    onLineHover: (isHovered: boolean, line: LinePath|LineCircle) => void
}

class MetroLines extends Component<IProps> {
    render() {
        const { lines, onLineHover, onLineClick } = this.props
        return lines.map((item: LinePath|LineCircle, index: number): JSX.Element | null => {
            return (
                <React.Fragment key={ index  }>
                    <MetroLine
                        line={ item }
                        onLineHover={ onLineHover }
                        onLineClick={ onLineClick }
                    />
                </React.Fragment>
            )
        })
    }
}

export default MetroLines
