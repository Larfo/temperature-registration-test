import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import MonthComponent from '../MonthComponent';
import styles from './TemperatureComponent.module.scss';
class TemperatureComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
      month: -1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.handleSelectMonth = this.handleSelectMonth.bind(this);
  }

  handleSelectMonth(monthId, monthTitle) {
    this.setState({ 
      monthId,
      monthHelperText: "Du har valgt " + monthTitle
    });
  }

  handleChange(event) {
    var temperature = event.target.value
    if(this.validTemperature(temperature)) {
      this.setState({
        temperature: temperature,
        helperText: ""
       });
    } else {
      this.setState({ helperText: "Temperaturen er ikke mellom 0-1000" });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!this.validMonth()) {
      this.setState({ monthHelperText: "Vennligst velg en måned" });
      return
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          temperature: this.state.temperature,
          month: this.state.month
        })
      };
      fetch(`/api/insertTemperature`, requestOptions)
        .then(response => response.json())
        .then(state => this.setState(state));
    }
  }

  validTemperature(temperature) {
    if(temperature < 1000 && temperature > 0)
      return true
    return false
  }

  
  validMonth() {
    if(this.state.month > 0)
      return true
    return false
  }

	render() {
		return (
			<div className={styles.temperature}>
        <p>Tast inn temperatur:</p>
        <div className={styles.temperatureForm}>
          <form className={styles.temperatureform} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <div className={styles.temperatureTextFieldContainer}>
              <TextField 
                label="Temperatur" 
                type="number" 
                onChange={this.handleChange}
                helperText={this.state.helperText}
                style={{
                  width: "100%"
                }} />
            </div>
            <MonthComponent selectMonth={this.handleSelectMonth}/>
            <p>{this.state.monthHelperText}</p>
            <button type="submit" className={styles.temperatureSubmitButton}>Send</button>
          </form>
        </div>
			</div>
		);
	}
}
export default TemperatureComponent;