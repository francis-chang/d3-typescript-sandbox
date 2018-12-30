import React from 'react'

interface Props {
    x: number
    y: number
}

const BlackBoxHOC = (D3render: Function) => {
    return class Blackbox extends React.Component<Props, {}> {
        svgGroup = React.createRef<SVGSVGElement>()
        componentDidMount() { D3render.call(this.svgGroup.current!) }
        componentDidUpdate() { D3render.call(this.svgGroup.current!) }

        render(){
            const { x, y } = this.props as Props
            return (
                <svg width={300} height={200}>
                    <g transform={`translate(${x}, ${y})`} ref={this.svgGroup}/>
                </svg>
            )
        }
    }
}

export default BlackBoxHOC