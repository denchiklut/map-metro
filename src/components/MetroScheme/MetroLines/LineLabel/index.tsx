import React, { Component } from 'react'
import cn from 'classnames'

import { Circle, Path, Shapes, Text } from '../../../../data/moscow/schemeData'

import styles from './LineLabel.module.css'

interface IProps {
    lineLabels: (Circle|Text)[]
    isHovered: boolean
}

class LineLabel extends Component<IProps> {
    render() {
        const { lineLabels, isHovered } = this.props

        return lineLabels.map((item: Path|Circle|Text, index: number): JSX.Element | null => {
            switch (item.type) {
                case Shapes.Circle: return (
                    <circle
                        key={ index }
                        className={ cn( styles.label, { [styles.hovered]: isHovered })}
                        { ...item }
                    />)
                case Shapes.Text: return (
                    <text
                        key={ index }
                        className={ styles.label }
                        { ...item }
                    >
                        { item.name }
                    </text>)
                default: return null;
            }
        })
    }
}

export default LineLabel
