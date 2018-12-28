import React from 'react'
import { scaleLinear, ScaleLinear } from 'd3-scale'
import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'

class BlackBox extends React.Component {
    private blackBox = React.createRef<SVGSVGElement>()
    
    componentDidMount() {
        this.renderAxis()
    }
    componentDidUpdate() {
        this.renderAxis()
    }

    renderAxis() {
        const scale = scaleLinear()
            .domain([0, 10])
            .range([0, 200])

        const bottomAxis = axisBottom(scale)

        select(this.blackBox.current)
            .call(bottomAxis)   
    }

    render(){
        return (
            <svg>
                <g transform="translate(10, 30)" ref={this.blackBox} />
            </svg>
        )
    }
}


export default BlackBox