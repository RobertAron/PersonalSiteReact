import React, { Component } from 'react';
import './App.css';
import ProjectErrorMessage from './ProjectErrorMessage'
import LinearProgress from 'material-ui/LinearProgress';
import './UnityGame.css';
import Unity from 'react-unity-webgl';

class ProjectDetails extends Component {
	componentDidMount() {
		this.props.setProjectState(true);
	}
	constructor(props) {
        super(props);
        this.state = {
            loadingAmount: 0,
        };
    }


	render() {
		const urlGameName = this.props.match.params.gameTitle.toLowerCase();
		const games = this.props.games;
		const gameTitles = games.map((game) => {
			return game.name;
		})
		if (gameTitles.includes(urlGameName)) {
			return this.renderUnityGame(urlGameName);

		}
		else {
			return (
				<div >
					<ProjectErrorMessage />
				</div>
			)
		}
	}

	renderUnityGame(urlGameName) {
		console.log(urlGameName)
		const gameSrc = '../../games/'+urlGameName+'_build/'+urlGameName+'.json'
		const unityLoader = '../../games/'+urlGameName+'_build/UnityLoader.js'
		console.log(unityLoader);
		return (
			<div className = 'game-container'>
				<Unity
					src={gameSrc}
					width='760px'
					height='760px'
					loader={unityLoader}
					onProgress={this.onProgress}/>
				{this.state.loadingAmount !== 100 &&
					<LinearProgress mode="determinate" value={this.state.loadingAmount} className='loading-bar'/>
				}
			</div>
		)
	}

	onProgress =(progression) =>
	{
		this.setState({
			loadingAmount:progression*100
		})
		
	}
}



export default ProjectDetails;