import React, { Component, RefObject } from 'react'
import { resources } from '../../data/moscow/resources'
import {
    Circle,
    Path,
    Text,
    Shapes,
    schemeData
} from '../../data/moscow/schemeData'
import { schemeMeta } from '../../data/moscow/schemeMeta'

import panzoom from 'panzoom'

import styles from './App.module.css';

class App extends Component {
    parentRef: RefObject<HTMLDivElement> = React.createRef()

    componentDidMount() {
        if (this.parentRef.current) {
            panzoom(this.parentRef.current, {
                zoomSpeed: .1,
                pinchSpeed: 2,
                smoothScroll: true,
                maxZoom: schemeMeta.scale.max / schemeData.assetZoom,
                minZoom: schemeMeta.scale.min / schemeData.assetZoom,
            })
        }
    }


    renderLines = (items: (Path|Circle|Text)[]): (JSX.Element | null)[]=> {
        return items.map((item: Path|Circle|Text, index: number): JSX.Element | null => {
            switch (item.type) {
                case Shapes.Path: return <path key={ index } { ...item } />
                case Shapes.Circle: return <circle key={ index } { ...item } />
                case Shapes.Text: return <text key={ index } { ...item }>{ item.name }</text>
                default: return null;
            }
        })
    }

    render() {
        return (
            <div className={ styles.schemeContainer }>
                <div className={ styles.schemeView }>
                    <div
                        className={ styles.app }
                        ref ={ this.parentRef }
                    >
                        <div>
                            <svg
                                version='1.1'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 3000 3500"
                                className={ styles.mapSvg }
                            >
                                { this.renderLines(resources) }
                                { this.renderLines(schemeData.lines) }
                                { this.renderLines(schemeData.lineLabels) }
                                { this.renderLines(schemeData.transfers) }
                                { this.renderLines(schemeData.stations) }
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


//рыжая и красная зеленая обновить
