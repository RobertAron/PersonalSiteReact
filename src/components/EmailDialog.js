import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import "./EmailDialog.css";
import CircularProgress from 'material-ui/CircularProgress';
import { red500 } from 'material-ui/styles/colors';
//const url = process.env.NODE_ENV !== 'production' ? 'http://localhost:9000' : 'http://robertaron.herokuapp.com';
const url = 'http://www.robertaron.io';
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
const errorColor = {
	color: red500,
	borderColor: red500
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
	componentDidMount() {
		this.setState({
			validEmailEntered: false,
			validSubjectEntered: false,
			validBodyEntered: false
		});
	}

	isValidEmail = (email) => {
		const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (regex.test(email)) {
			this.setState({ validEmailEntered: true });
		}
		else {
			this.setState({ validEmailEntered: false });
		}
		return (this.state.validEmailEntered);
	}
	isValidBody =(body)=>{
		if(body===""){
			this.setState({validBodyEntered:false});
		}
		else{
			this.setState({validBodyEntered:true});
		}
		return(this.state.validBodyEntered);
	}
	isValidSubject = (subject)=>{
		if(subject===""){
			this.setState({validSubjectEntered:false});
		}
		else{
			this.setState({validSubjectEntered:true});
		}
		return(this.state.validBodyEntered);
	}
	emailErrorMessage = () => {
		if (this.state.validEmailEntered) {
			return undefined;
		}
		else {
			return "Invalid Email Adress";
		}
	}

	handleOpen = () => {
		this.setState({ open: true, dialogState: emailStateEnum.CONTENT });
		this.setState({ validEmailEntered: false });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	handleSend = () => {
		const myBody = JSON.stringify({
			from: theirEmail,
			subject: theirSubject,
			body: theirBody
		})
		fetch(url + '/api/sendmail', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: myBody
		})
			.then((response) => {
				return response.json();
			})
			.then((responseJson) => {
				if (responseJson.sent===true) {
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
							className="email-text-field"
							floatingLabelText="Your Email Adress"
							onChange={(newEvent, newValue) => {
								theirEmail = newValue;
								this.isValidEmail(newValue);
							}}
							underlineFocusStyle={this.state.validEmailEntered ? null : errorColor}
							underlineStyle={this.state.validEmailEntered ? null : errorColor}
							floatingLabelStyle={this.state.validEmailEntered ? null : errorColor}
							floatingLabelFocusStyle={this.state.validEmailEntered ? null : errorColor}
						/>
						<br />
						<TextField
							className="email-text-field"
							floatingLabelText="Subject"
							onChange={(newEvent, newValue) => {
								theirSubject = newValue;
								this.isValidSubject(newValue);
							}}
							underlineFocusStyle={this.state.validSubjectEntered ? null : errorColor}
							underlineStyle={this.state.validSubjectEntered ? null : errorColor}
							floatingLabelStyle={this.state.validSubjectEntered ? null : errorColor}
							floatingLabelFocusStyle={this.state.validSubjectEntered ? null : errorColor}
						/>
						<br />
						<TextField
							className="email-body"
							floatingLabelText="Email Body"
							multiLine={true}
							onChange={(newEvent, newValue) => {
								this.isValidBody(newValue);
								theirBody = newValue;
							}}
							rows={4}
							underlineFocusStyle={this.state.validBodyEntered ? null : errorColor}
							underlineStyle={this.state.validBodyEntered ? null : errorColor}
							floatingLabelStyle={this.state.validBodyEntered ? null : errorColor}
							floatingLabelFocusStyle={this.state.validBodyEntered ? null : errorColor}
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
							disabled={!this.state.validEmailEntered||!this.state.validBodyEntered||!this.state.validSubjectEntered}
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