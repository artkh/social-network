import React from 'react';

class StatusUser extends React.Component {

  state = {
    editMode: false,
    status: this.props.textStatus
  }

  activatedEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivatedEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  changeStatus = (e) => {
    let changeText = e.target.value;
    this.setState({
      status: changeText
    })
    // this.props.updateStatus(changeText);
  }

  render() {
    return (
      <div>
        {
          this.state.editMode ?
            <input autoFocus={ true } onBlur={ this.deactivatedEditMode } onChange={ this.changeStatus } type="text" value={ this.state.status } /> :
            <span onClick={ this.activatedEditMode }>{ this.props.textStatus || 'new status...' }</span>
        }
      </div>
    )
  }
}

export default StatusUser;