import React from 'react'
import { Circle, Path, Shapes, Text } from './data/moscow/schemeData'

export const renderLines = (items: (Path|Circle|Text)[]): (JSX.Element | null)[]=> {
    return items.map((item: Path|Circle|Text, index: number): JSX.Element | null => {
        switch (item.type) {
            case Shapes.Path: return <path key={ index } { ...item } />
            case Shapes.Circle: return <circle key={ index } { ...item } />
            case Shapes.Text: return <text key={ index } { ...item }>{ item.name }</text>
            default: return null;
        }
    })
}
