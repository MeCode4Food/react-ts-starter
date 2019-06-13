import React, { useEffect } from 'react'
import styled from 'styled-components'
import drawGraph from './draw-graph';
import { tooltipStyles } from './styles'

const CatGraph = () => {
  useEffect(() => {
    drawGraph()
  })
  return <StyledGraph className="my-graph"/>
}

const StyledGraph = styled.div`
  .line {
      fill: none;
      stroke: #ffab00;
      stroke-width: 3;
  }
    
  .overlay {
    fill: none;
    pointer-events: all;
  }

  /* Style the dots by assigning a fill and stroke */
  .dot {
    fill: #ffab00;
    stroke: transparent;
    stroke-width: 15;
  }
  
  div.tooltip {	
      position: absolute;			
      text-align: center;			
      width: ${tooltipStyles.widthRem}rem;					
      height: ${tooltipStyles.heightRem}rem;					
      padding: ${tooltipStyles.paddingPx}px;				
      font: ${tooltipStyles.fontSizeRem}rem ${tooltipStyles.fontFamily};		
      background: lightsteelblue;	
      border: ${tooltipStyles.borderWidthRem}px;		
      border-radius: ${tooltipStyles.borderRadius}rem;			
      pointer-events: none;			
  }
`

export default CatGraph
