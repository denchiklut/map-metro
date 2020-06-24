import React, { Component, RefObject } from 'react'
import panzoom from 'panzoom'

import { schemeData } from '../../data/moscow/schemeData'
import { schemeMeta } from '../../data/moscow/schemeMeta'
import { resources } from '../../data/moscow/resources'

import MetroScheme from '../MetroScheme'

import styles from './Metro.module.css'

class Metro extends Component {
    parentRef: RefObject<HTMLDivElement> = React.createRef()

    componentDidMount() {
        if (this.parentRef.current) {
            panzoom(this.parentRef.current, {
                zoomSpeed: .1,
                pinchSpeed: 2,
                smoothScroll: true,
                maxZoom: schemeMeta.scale.max / schemeData.assetZoom,
                minZoom: schemeMeta.scale.min / schemeData.assetZoom
            })
        }
    }

    render() {
        return (
            <div className={ styles.schemeContainer }>
                <div className={ styles.schemeView }>
                    <div
                        className={ styles.app }
                        ref={ this.parentRef }
                    >
                        <MetroScheme
                            size={ schemeMeta.size }
                            resources={ resources }
                            lines={ schemeData.lines }
                            lineLabels={ schemeData.lineLabels }
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
