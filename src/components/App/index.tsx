import React, { Component } from 'react'
import { resources } from '../../data/moscow/resources'
import { Circle, Path, schemeData, Shapes } from '../../data/moscow/schemeData'

class App extends Component {
    renderLines = (items: (Path|Circle)[]): (JSX.Element | null)[]=> {
        return items.map((item: Path|Circle, index: number): JSX.Element | null => {
            switch (item.type) {
                case Shapes.Path: return <path key={ index } { ...item } />
                case Shapes.Circle: return <circle key={ index } { ...item } />
                default: return null;
            }
        })
    }

    render() {
        return (
            <div className="App">
                <svg
                    version='1.1'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3000 3500"
                >
                    { this.renderLines(resources) }
                    { this.renderLines(schemeData.lines) }
                </svg>
            </div>
        );
    }
}

export default App;


//рыжая и красная зеленая обновить
