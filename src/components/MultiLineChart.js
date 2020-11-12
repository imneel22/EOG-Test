import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import Card from './Card';

export const MultiLineChart = () => {


  const casingData = useSelector(state => state.casingPressure.casingPressureData);
  const [data, setData] = useState([]);
  const flareData = useSelector(state => state.flareTemp.flareTempData);
  const injData = useSelector(state => state.injValve.injValveData);
  const multiSelectedData = useSelector(state => state.multipleData.multipleData);
  const MetricsData = useSelector(state => state.activeMetrics.selectedMetrics);
  const oilData = useSelector(state => state.oilTemp.oilTempData);
  const tubeData = useSelector(state => state.tubingPressure.tubingPressureData);
  const waterData = useSelector(state => state.waterTemp.waterTempData);

  const filterByActive = data => {
    for (let i = 0; i < MetricsData.length; i++) {
      if (data.metric === MetricsData[i].metricName) {
        return true;
      }
    }
  };

  const chartData = data.filter(filterByActive);

  useEffect(() => {
    if (multiSelectedData.length > 0) {
      return setData([
        {
          metric: 'injValveOpen',
          measurements: multiSelectedData[0].measurements.concat(injData),
        },
        {
          metric: 'oilTemp',
          measurements: multiSelectedData[1].measurements.concat(oilData),
        },
        {
          metric: 'casingPressure',
          measurements: multiSelectedData[2].measurements.concat(casingData),
        },
        {
          metric: 'tubingPressure',
          measurements: multiSelectedData[3].measurements.concat(tubeData),
        },
        {
          metric: 'flareTemp',
          measurements: multiSelectedData[4].measurements.concat(flareData),
        },
        {
          metric: 'waterTemp',
          measurements: multiSelectedData[5].measurements.concat(waterData),
        },
      ]);
    }
  }, [injData, casingData, flareData, multiSelectedData, oilData, tubeData, waterData]);

  const names = {
    injValveOpen: 'INJ Valve Open',
    oilTemp: 'Oil Temp',
    tubingPressure: 'Tubing Pressure',
    flareTemp: 'Flare Temp',
    casingPressure: 'Casing Pressure',
    waterTemp: 'Water Temp',
    default: 'metric',
  };

  const colors = {
    injValveOpen: '#1BD82A',
    oilTemp: '#000000',
    tubingPressure: '#FF0000',
    flareTemp: '#FFB201',
    casingPressure: '#830BEE',
    waterTemp: '#000CFF',
    default: '#00FFE0',
  };

  return (
    <>
      {MetricsData.map(i => {
        if (i.metricName === injData[0].metric) {
          return (
            <Card
              color={colors[i.metricName]}
              metric={names[i.metricName]}
              data={`${injData[injData.length - 1].value}${injData[0].unit}`}
            />
          );
        } else if (i.metricName === oilData[0].metric) {
          return (
            <Card
              color={colors[i.metricName]}
              metric={names[i.metricName]}
              data={`${oilData[oilData.length - 1].value} ${oilData[0].unit}`}
            />
          );
        } else if (i.metricName === flareData[0].metric) {
          return (
            <Card
              color={colors[i.metricName]}
              metric={names[i.metricName]}
              data={`${flareData[flareData.length - 1].value} ${flareData[0].unit}`}
            />
          );
        } else if (i.metricName === waterData[0].metric) {
          return (
            <Card
              color={colors[i.metricName]}
              metric={names[i.metricName]}
              data={`${waterData[waterData.length - 1].value} ${waterData[0].unit}`}
            />
          );
        } else if (i.metricName === casingData[0].metric) {
          return (
            <Card
              color={colors[i.metricName]}
              metric={names[i.metricName]}
              data={`${casingData[casingData.length - 1].value} ${casingData[0].unit}`}
            />
          );
        } else if (i.metricName === tubeData[0].metric) {
          return (
            <Card
              color={colors[i.metricName]}
              metric={names[i.metricName]}
              data={`${tubeData[tubeData.length - 1].value} ${tubeData[0].unit}`}
            />
          );
        }
      })}
      <LineChart width={1000} height={600}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="at" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
        {chartData.map(i => {
          return (
            <Line
              dataKey="value"
              data={i.measurements}
              name={names[i.metric]}
              key={i.metric}
              dot={false}
              stroke={colors[i.metric]}
            />
          );
        })}
      </LineChart>
    </>
  );
}

export default MultiLineChart;