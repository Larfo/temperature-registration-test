import React, { Component } from 'react';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import logo_image from '../../assets/images/envo_logo.png'

class Menu extends Component {

  state = {
    data: this.props.data
  }

	render() {
		const { type } = this.props
		return (
			<div className={styles.menu}>
        <div className={styles.menuContainer}>
        <Link to="/">
          <img className={styles.menuLogo} src={logo_image} />
        </Link>
        <Link className={styles.menuLink} to="/graph">Graf</Link>
        </div>
			</div>
		);
	}
}
export default Menu;