import React, { Component } from 'react';
import converter from '../../utils/converter'
import CanvasJSReact from '../../assets/canvasjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Chart extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  dataPoints: [],
		  isLoading: false
		}
	  }
	
	  componentDidMount() {
		this.fetchData()
	}	

    render() {

		var { dataPoints } = this.state

		const options = {
			title: {
				text: "Registrerte tempertaurer"
			},
				animationEnabled: true,
				data: [
				{
					type: "column",
					dataPoints
				}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}

fetchData() {
	const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
	console.log("hei")
	fetch(`/api/getTemperatures`, requestOptions)
      	.then(response => response.json())
        .then(dataPoints => this.setState({dataPoints: converter(dataPoints), isLoading: true}));

	}
	
}

export default Chart;