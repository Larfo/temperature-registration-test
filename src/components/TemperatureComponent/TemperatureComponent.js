import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './TemperatureComponent.module.scss';
class TemperatureComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log("Tastet " + this.state.name)
  }

  handleSubmit(event) {
    event.preventDefault();


    fetch(`/api/getTemperatures`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

	render() {
		return (
			<div className={styles.temperature}>
        <p>Tast inn temperatur:</p>
        <div className={styles.temperatureForm}>
          <form className={styles.temperatureform} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField label="Temperatur i °C" type="number" onInput={this.handleChange}/>
          
            <button type="submit" className={styles.temperatureSubmitButton}>Send</button>
          </form>
        </div>
			</div>
		);
	}
}
export default TemperatureComponent;