import React, { useState } from 'react';

const StatusUserWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.textStatus);

  const activatedEditMode = () => {
    setEditMode(true);
  }

  const deactivatedEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const changeStatus = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div>
      {
        editMode ?
          <input onBlur={ deactivatedEditMode } onChange={ changeStatus }
            value={ status } autoFocus={true} type="text" /> :
          <span onClick={ activatedEditMode }>{ status || 'new status...' }</span>
      }
    </div>
  )
}

export default StatusUserWithHooks;