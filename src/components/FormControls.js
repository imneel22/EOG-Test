import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { activeMetricsactions } from '../Features/ActiveMetricsReducer';

export const FormControls = () => {
  const time = useSelector(state => state.heartbeat);
  const dispatch = useDispatch();
  const checks = {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
  }
  const [state, setCheckState] = React.useState(checks);
  const activeList = useSelector(state => state.activeMetrics.selectedMetrics);

  const onCheckBoxChange = (event, name) => {
    setCheckState({ ...state, [name]: event.target.checked });

    if (event.target.checked) {
      dispatch(
        activeMetricsactions.active({
          metricName: event.target.value,
          before: time.current,
          after: time.past,
        }),
      );
    } else {
      const metricIndex = activeList.find(element => element.metricName === event.target.value);
      dispatch(activeMetricsactions.remove(metricIndex.metricName));
    }
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>




          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedE}
                onChange={(e) => onCheckBoxChange(e, 'checked5')}
                value="casingPressure"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Casing Pressure"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedD}
                onChange={(e) => onCheckBoxChange(e, 'checked4')}
                value="flareTemp"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Flare Temp"
            labelPlacement="top"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={(e) => onCheckBoxChange(e, 'checked1')}
                value="injValveOpen"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="INJ Valve Open"
            labelPlacement="top"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={(e) => onCheckBoxChange(e, 'checked2')}
                value="oilTemp"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Oil Temp"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedC}
                onChange={(e) => onCheckBoxChange(e, 'checked3')}
                value="tubingPressure"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Tubing Pressure"
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedF}
                onChange={(e) => onCheckBoxChange(e, 'checked6')}
                value="waterTemp"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Water Temp"
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default FormControls;
