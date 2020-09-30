import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './TemperatureComponent.module.scss';
class TemperatureComponent extends Component {
	render() {
		return (
			<div className={styles.temperature}>
        <p>Tast inn temperatur:</p>
        
        <div className={styles.temperatureForm}>
          <form className={styles.temperatureform} noValidate autoComplete="off">
            <TextField label="Temperatur i C" type="number" />
            
                 
            <button className={styles.temperatureSubmitButton}>Send</button>
          </form>
        </div>

			</div>
		);
	}
}
export default TemperatureComponent;