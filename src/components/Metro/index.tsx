import React, { Component, RefObject } from 'react'
import panzoom, { PanZoom } from 'panzoom'

import { schemeData } from '../../data/moscow/schemeData'
import { schemeMeta } from '../../data/moscow/schemeMeta'
import { resources } from '../../data/moscow/resources'

import MetroScheme from '../MetroScheme'
import { move } from '../../helpers'

import styles from './Metro.module.css'

class Metro extends Component {
    parentRef: RefObject<HTMLDivElement> = React.createRef()
    schemeRef: RefObject<HTMLDivElement> = React.createRef()

    componentDidMount() {
        if (this.schemeRef.current) {
            const instance: PanZoom = panzoom(this.schemeRef.current, {
                zoomSpeed: .1,
                pinchSpeed: 2,
                smoothScroll: true,
                maxZoom: schemeMeta.scale.max / schemeData.assetZoom,
                minZoom: schemeMeta.scale.min / schemeData.assetZoom
            })

            this.setInitialSchemeState(instance)
            this.setSchemeEvents(instance)
        }
    }

    setInitialSchemeState = (panzoom: PanZoom) => {
        if (this.schemeRef.current) {
            const rect = this.schemeRef.current.getBoundingClientRect()
            const width = rect.width / 2
            const height = rect.height / 2

            const x = width - schemeMeta.center.x
            const y = height - schemeMeta.center.y

            panzoom.moveBy(x, y, false)
            panzoom.zoomTo(0, -height / 2,schemeMeta.scale.initial / schemeData.assetZoom)
        }
    }

    setSchemeEvents = (panzoom: PanZoom) => {
        panzoom.on('pan', () => {
            if (this.parentRef.current && this.schemeRef.current) {
                move(panzoom, this.parentRef.current, this.schemeRef.current)
            }
        })

        panzoom.on('zoom', () => {
            if (this.parentRef.current && this.schemeRef.current) {
                move(panzoom, this.parentRef.current, this.schemeRef.current)
            }
        })
    }

    render() {
        return (
            <div className={ styles.schemeContainer } ref={ this.parentRef }>
                <div className={ styles.schemeView }>
                    <div
                        className={ styles.map }
                        ref={ this.schemeRef }
                    >
                        <MetroScheme
                            size={ schemeMeta.size }
                            resources={ resources }
                            lines={ schemeData.lines }
                            transfers={ schemeData.transfers }
                            stations={ schemeData.stations }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Metro
