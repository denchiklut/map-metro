import React from 'react'
import { PanZoom } from "panzoom"
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

export function moove(panzoom: PanZoom, parentRef: HTMLDivElement, schemeRef: HTMLDivElement): void {
    if (parentRef && schemeRef) {
        const offset = 112
        const transform = panzoom.getTransform()
        const width = schemeRef.offsetWidth * transform.scale
        const height = schemeRef.offsetHeight * transform.scale
        const isWider = width > parentRef.offsetWidth
        const isHigher = height > parentRef.offsetHeight - offset
        const parentY = isHigher ? parentRef.offsetHeight / 2 : parentRef.offsetHeight - height / 2
        const schemeY = isHigher ? parentRef.offsetHeight / 2 + offset - height : -height / 2 + offset
        const parentX = isWider ? parentRef.offsetWidth / 2 : parentRef.offsetWidth - width / 2
        const schemeX = isWider ? parentRef.offsetWidth / 2 - width : -width / 2

        if (transform.x > parentX ) {
            panzoom.moveTo(parentX, transform.y)
        } else if (transform.x < schemeX) {
            panzoom.moveTo(schemeX, transform.y)
        }

        if (transform.y > parentY ) {
            panzoom.moveTo(transform.x, parentY)
        } else if (transform.y < schemeY) {
            panzoom.moveTo(transform.x, schemeY)
        }
    }
}
