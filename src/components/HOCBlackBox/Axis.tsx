import React from 'react'
import { scaleLinear } from 'd3-scale'
import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'
import BlackBoxHOC from './BlackBoxHOC'

const Axis = BlackBoxHOC(function(svgGroup: SVGSVGElement){
    const scale = scaleLinear()
        .domain([0, 10])
        .range([0,200])
    
    const axis = axisBottom(scale)

    select(svgGroup)
        .call(axis)
    
})

export default Axis