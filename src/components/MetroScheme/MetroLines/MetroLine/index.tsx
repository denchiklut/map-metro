import React, { Component } from 'react'
import cn from 'classnames'

import { LineCircle, LinePath, Shapes } from '../../../../data/moscow/schemeData'
import LineLabel from '../LineLabel'

import styles from './MetroLine.module.css'

interface IProps {
    line: LinePath|LineCircle
    onLineHover: (isHovered: boolean, line: LinePath|LineCircle) => void
}

interface IState {
    isHovered: boolean
}

class MetroLine extends Component<IProps, IState> {
    state: IState = {
        isHovered: false
    }

    handleHover = (): void => {
        this.setState(prevState => ({ isHovered: !prevState.isHovered }), () => {
            this.props.onLineHover(this.state.isHovered, this.props.line)
        })
    }

    render() {
        const { line } = this.props
        const { isHovered } = this.state

        switch (line.type) {
            case Shapes.Path: return (
                <g
                    onMouseEnter={ this.handleHover }
                    onMouseLeave={ this.handleHover }
                >
                    <path className={ cn(styles.line, { [styles.lineHovered]: isHovered }) }  { ...line } />
                    <LineLabel isHovered={ isHovered } lineLabels={ line.lineLabels }/>
                </g>
            )
            case Shapes.Circle: return (
                <g
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
