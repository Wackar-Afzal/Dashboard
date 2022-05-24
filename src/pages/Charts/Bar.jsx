
import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,Inject,Legend,Tooltip,ColumnSeries,DataLabel,Category } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { barCustomSeries,barPrimaryXAxis,barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
const Bar = () => {
  const {currentMode}=useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
       <Header category='Bar' title="Inflation Rate in percentages"/>
      <ChartComponent 
    id='charts'
    height='420px'
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currentMode==='Dark'?'#33373E':"#fff"}
    >
      <Inject services={[Legend,Tooltip,ColumnSeries,DataLabel,Category]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item,index)=>{
          return <SeriesDirective key={index}{...item}/>
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Bar;