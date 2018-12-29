import React from 'react'

interface Props {
    x: number
    y: number
}

const BlackBoxHOC = (D3render: Function) => {
    return class Blackbox extends React.Component<Props, {}> {
        private svgGroup = React.createRef<SVGSVGElement>()
        componentDidMount() { D3render.call(this) }
        componentDidUpdate() { D3render.call(this) }

        render(){
            const { x, y } = this.props as Props
            return (
                <g transform={`translate(${x}, ${y})`} ref={this.svgGroup}/>
            )
        }
    }
}

export default BlackBoxHOC