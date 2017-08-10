import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import "./EmailDialog.css";
import CircularProgress from 'material-ui/CircularProgress';

const url = process.env !== 'production' ? 'http://localhost:9000' : '';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const emailStateEnum = {
	CONTENT: "CONTENT",
	SENDING: "SENDING",
	SENT: "SENT",
	ERROR: "ERROR"
}
let theirEmail = "default-email";
let theirSubject = "default-subject";
let theirBody = "default-body";


export default class DialogExampleSimple extends React.Component {
	static muiName = 'FlatButton';
	state = {
		open: false,
		dialogState: emailStateEnum.CONTENT
	};
	 componentDidMount(){
		this.setState({validEmailEntered: false});
	}

	isValidEmail = (email)=>{
		let regex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if( regex.test(email)){
			this.setState({validEmailEntered:true});
		}
		else{
			this.setState({validEmailEntered:false});
		}
		return(this.state.validEmailEntered);
	}
	emailErrorMessage = ()=>{
		if (this.state.validEmailEntered){
			return undefined;
		}
		else{
			return "Invalid Email Adress";
		}
	}

	handleOpen = () => {
		this.setState({ open: true, dialogState: emailStateEnum.CONTENT });
		this.setState({validEmailEntered:false});
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	handleSend = () => {
		console.log("in handle send");
		const myBody = JSON.stringify({
			from: theirEmail,
			subject: theirSubject,
			body: theirBody
		})
		console.log(myBody);
		fetch(url + '/api/sendmail', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: myBody
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((responseJson) => {
				console.log(responseJson);
				if (responseJson) {
					this.setState({ dialogState: emailStateEnum.SENT });
				} else {
					this.setState({ dialogState: emailStateEnum.ERROR });
				}

			}).catch((e) => {
				this.setState({ dialogState: emailStateEnum.ERROR });
			});
		this.setState({ dialogState: emailStateEnum.SENDING })
	}
	render() {
		const actions = this.setActions();

		return (
			<div>
				<FlatButton {...this.props} label="Email Me" onTouchTap={this.handleOpen} />
				<Dialog
					titleClassName="dialog-title"
					bodyClassName="dialog-box"
					paperClassName="paper-box"
					title="Email Me"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					{this.renderDialogContent()}
				</Dialog>
			</div>
		);
	}

	renderDialogContent() {
		switch (this.state.dialogState) {
			case emailStateEnum.CONTENT:
				return (
					<div>
						<TextField
							hintText="Example_Email@Example.com"
							floatingLabelText="Your Email Adress"
							onChange={(newEvent, newValue) => {
								this.isValidEmail(newValue);
							}}>
						</TextField>
						<br />
						<TextField
							floatingLabelText="Subject"
							onChange={(newEvent, newValue) => {
								theirSubject = newValue;
							}}>
						</TextField>
						<br />
						<TextField
							className="email-body"
							floatingLabelText="Email Body"
							multiLine={true}
							onChange={(newEvent, newValue) => {
								theirBody = newValue;
							}}
							rows={4}
						/>
					</div>
				)
			case emailStateEnum.ERROR:
				return (
					<div>
						<h1>An Error Occured</h1>
						<p>The Email Did Not Send</p>
					</div>
				)
			case emailStateEnum.SENDING:
				return (
					<CircularProgress className="center-content" />
				)
			case emailStateEnum.SENT:
				return (
					<h1>Email Sent Succesfully!</h1>
				)
			default:
				return (
					<h1>General Failure</h1>
				)
		}
	}

	setActions() {
		switch (this.state.dialogState) {
			case emailStateEnum.CONTENT:
				return (
					[
						<FlatButton
							label="Send"
							primary={true}
							onTouchTap={this.handleSend}
							disabled = {!this.state.validEmailEntered}
						/>,
						<FlatButton
							label="Cancel"
							primary={true}
							onTouchTap={this.handleClose}
						/>,
					]
				)
			case emailStateEnum.ERROR:
				return (
					[<FlatButton
						label="Cancel"
						primary={true}
						onTouchTap={this.handleClose}
					/>]
				)
			case emailStateEnum.SENDING:
				return (
					[<div></div>]
				)
			case emailStateEnum.SENT:
				return (
					<FlatButton
						label="Exit"
						primary={true}
						onTouchTap={this.handleClose}
					/>
				)
			default:
				return (
					[
						<FlatButton
							label="Cancel"
							primary={true}
							onTouchTap={this.handleClose}
						/>
					]
				)
		}
	}
}