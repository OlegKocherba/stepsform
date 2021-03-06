import React, { Component } from 'react';

import './App.scss';

import AppHeader from '../AppHeader/AppHeader';
import Navigation from '../Navigation/Navigation';
import Steps from '../Steps/Steps';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="card col-4 mr-auto ml-auto mt-3">
					<AppHeader/>
					<div className="card-body">
						<div className="steps">
							<Steps/>
						</div>
						<Navigation/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
