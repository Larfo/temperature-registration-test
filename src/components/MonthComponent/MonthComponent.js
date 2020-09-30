import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import React, { Component } from 'react';
import tileData from '../../assets/content/months';
import styles from './MonthComponent.module.scss';

class MonthComponent extends Component {
  constructor(props) {
    super(props);
    this.selectMonth = this.selectMonth.bind(this);
    this.state = {
      month: 0,
    } 
  }
  selectMonth(monthId, monthTitle) {
    this.props.selectMonth(monthId, monthTitle);
  }
	render() {
		return (
			<div className={styles.monthComponentContainer} >
        <GridList cellHeight={120} cols={4}>
          {tileData.map(tile => (
            <GridListTile key={tile.title} onClick={() => this.selectMonth(tile.id, tile.title)}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar title={tile.title}/></GridListTile>
          ))}
        </GridList>
			</div>
		);
	}
}
export default MonthComponent;