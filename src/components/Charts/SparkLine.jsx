import React from 'react';
import {SparklineComponent,Inject,SparklineTooltip} from '@syncfusion/ej2-react-charts'

import { useStateContext } from '../../contexts/ContextProvider';
const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  const { currentMode } = useStateContext();
  return (
    <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType="Numeric"
    fill={color}
    border={{color:currentColor,width:2}}
    dataSource={data}
    xName="x"
    yName="yval"
    type={type}
    position="relative"
    tooltipSettings={{visible:true,format:'${x} : data ${yval}',trackLineSettings:{visible:true,}}}
    backgroundColor={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[SparklineTooltip]}/></SparklineComponent>
  )
}

export default SparkLine