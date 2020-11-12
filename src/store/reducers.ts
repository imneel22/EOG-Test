
import { heartBeatReducer } from '../Features/heartBeatReducer'
import {  activeMetrics } from '../Features/ActiveMetricsReducer'
import {  multipleReducer } from '../Features/metricRedcuer'
import { weatherReducer } from '../Features/weatherReducer';
import {  waterTempReducer } from '../Features/waterTempReducer';
import {  injValveReducer } from '../Features/injValveReducer';
import {  oilTempReducer } from '../Features/oilTempReducer';
import {  flareTempReducer } from '../Features/flareTempReducer';
import {  casingPReducer } from '../Features/CasingPressurereducer';
import {  tubingPReducer } from '../Features/tubingPressurereducer';

 
export default {
  multipleData: multipleReducer,
  activeMetrics: activeMetrics,
  heartbeat: heartBeatReducer,
  weatherData: weatherReducer,
  injValve: injValveReducer,
  oilTemp: oilTempReducer,
  waterTemp: waterTempReducer,
  flareTemp: flareTempReducer,
  casingPressure: casingPReducer,
  tubingPressure: tubingPReducer
};