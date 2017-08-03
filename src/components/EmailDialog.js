import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import "./EmailDialog.css";

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */



export default class DialogExampleSimple extends React.Component {
  static muiName = 'FlatButton';
  state = {
    open: false,
  };
  constructor(props){
    super(props);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Send"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton {...this.props} label="Email Me" onTouchTap={this.handleOpen} />
        <Dialog
          titleClassName="dialog-title"
          bodyClassName = "dialog-box"
          title="Email Me"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Example_Email@Example.com"
            floatingLabelText="Your Email Adress">
          </TextField>
          <br/>
          <TextField
            className = "email-body"
            floatingLabelText="Email Body"
            multiLine={true}
            rows={4}
          />
        </Dialog>
      </div>
    );
  }
}