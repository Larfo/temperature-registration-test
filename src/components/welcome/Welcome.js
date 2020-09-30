import React, { Component } from 'react';
import styles from './Welcome.module.scss';
//import Graph from '../../views/Graph/Graph'


class Welcome extends Component {

	render() {
		return (
		  <img className={styles.welcome} src="https://www.envo.no/img/1.jpg" />
		);
	}
}
export default Welcome;