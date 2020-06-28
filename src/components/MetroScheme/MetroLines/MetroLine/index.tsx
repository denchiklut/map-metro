import React, { Component } from 'react'
import cn from 'classnames'

import { LineCircle, LinePath, Shapes } from '../../../../data/moscow/schemeData'
import LineLabel from '../LineLabel'

import styles from './MetroLine.module.css'

interface IProps {
    line: LinePath|LineCircle
    onLineHover: (isHovered: boolean, line: LinePath|LineCircle) => void
    onLineClick: (line: LinePath|LineCircle) => void
}

interface IState {
    isHovered: boolean
}

class MetroLine extends Component<IProps, IState> {
    state: IState = { isHovered: false }

    handleHover = (): void => {
        const { line, onLineHover } = this.props

        this.setState(prevState => ({ isHovered: !prevState.isHovered }), () => {
            onLineHover(this.state.isHovered, line)
        })
    }

    handleClick = ():void => {
        const { line, onLineClick } = this.props

        onLineClick(line)
    }

    render() {
        const { line } = this.props
        const { isHovered } = this.state

        switch (line.type) {
            case Shapes.Path: return (
                <g
                    onClick={ this.handleClick }
                    onMouseEnter={ this.handleHover }
                    onMouseLeave={ this.handleHover }
                >
                    <path className={ cn(styles.line, { [styles.lineHovered]: isHovered }) }  { ...line } />
                    <LineLabel isHovered={ isHovered } lineLabels={ line.lineLabels }/>
                </g>
            )
            case Shapes.Circle: return (
                <g
                    onClick={ this.handleClick }
                    onMouseEnter={ this.handleHover }
                    onMouseLeave={ this.handleHover }
                >
                    <circle className={ cn(styles.line, { [styles.lineHovered]: isHovered }) } { ...line } />
                    <LineLabel isHovered={ isHovered } lineLabels={ line.lineLabels }/>
                </g>
            )
            default: return null;
        }
    }
}

export default MetroLine
