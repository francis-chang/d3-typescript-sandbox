import React from 'react'
import { schemeCategory10 } from 'd3-scale-chromatic'
import { scaleBand, scaleLinear } from 'd3-scale'
import { range } from 'd3-array'
 

// SET UP D3 OBJECTS AS CLASS PROPERTIES
// UPDATE D3 OBJECTS WHEN COMPONENT UPDATES
// OUTPUT SVG IN RENDER

interface Props {
    color?: string
    width?: number
    x?: number
    y?: number
}

interface FIProps {
    width: number
}

const Swatch = ({ color, width, x, y }: Props) => (
    <rect width={width} height="20" x={x} y={y} style={{fill:color}} />
)

class FullyIntegrated extends React.Component<FIProps> {
    colors = schemeCategory10
    width = scaleLinear()
        .domain(range(10))

    componentWillMount() {
        this.updateD3(this.props)
    }

    updateD3(props: Props){
        this.width.range([0, props.width!])
    }

    render(){
        return (
            <svg>
                {range(10).map(i=>(
                    <Swatch color={this.colors[i]} width={18} x={i*20} y={0} />
                ))}
            </svg>
        )
    }
}

export default FullyIntegrated