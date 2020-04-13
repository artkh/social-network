import React from 'react';

class StatusUser extends React.Component {

    state = {
        editMode: false,
    }

    onChangeStatus() {
        this.setState({
            editMode: true
        });
    }

    onNewStatus() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <input autoFocus={true} onBlur={ this.onNewStatus.bind(this)} type="text" value={this.props.textStatus} /> :
                        <span onClick={ this.onChangeStatus.bind(this) }>{this.props.textStatus}</span>
                }
            </div>
        )
    }
}

export default StatusUser;