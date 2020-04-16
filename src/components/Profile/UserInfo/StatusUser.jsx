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
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.textStatus !== this.props.textStatus) {
      //если предыдущий статус из пропсов не равен текущему,
      //значит статус из стейта, который показывается в инпуте при клике
      //равен текущему статусу из пропсов
      this.setState({
        status: this.props.textStatus
      })
    }
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