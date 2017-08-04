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

export default class DialogExampleSimple extends React.Component {
	static muiName = 'FlatButton';
	state = {
		open: false,
		dialogState: emailStateEnum.CONTENT
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	handleSend = () => {
		console.log("in handle send");
		const myBody = JSON.stringify({
			from: 'ATestValue@gmail.com',
			subject: 'I\'m Testing Emails on the site',
			body: 'new content to test if there is a bug or somthing'
		})
		console.log(myBody);
		fetch(url+'/api/sendmail', {
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
			this.setState({ dialogState: emailStateEnum.SENT })
		})
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
							floatingLabelText="Your Email Adress">
						</TextField>
						<br />
						<TextField
							className="email-body"
							floatingLabelText="Email Body"
							multiLine={true}
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