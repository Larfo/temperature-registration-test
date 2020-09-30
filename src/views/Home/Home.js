import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Home.scss';
import Menu from '../../components/menu/Menu';
import Welcome from '../../components/Welcome/Welcome';
import TemperatureComponent from '../../components/TemperatureComponent/TemperatureComponent';

function App() {
  return (
    <div className="App">
       <Menu />
       <Welcome />
       <TemperatureComponent />
    </div>
  );
}

export default App;
