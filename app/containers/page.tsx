'use client'

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function VM() {
  const [typedPassword, setTypedPassword] = useState('');
  const [currentVMState, setCurrentVMState] = useState('');

  const displayStateMapping = {
    Running: "Running",
    Stopped: "Stopped",
    Pending: "Pending",
    Succeeded: "Running",
    Failed: "Stopped",
  };

  const displayState = displayStateMapping[currentVMState];

  const getContainerState = async () => {
    const response = await fetch(`/api/containerState`);
    const json = await response.json();
  
    if (response.ok && json.success) {
      setCurrentVMState(json.serverStatus)
    }
  }

  useEffect(() => {
    getContainerState();
  }, [])

  const sendVMRequest = async (action) => {
    const id = toast.loading("Sending command to server...")
    const response = await fetch(`/api/containers`, {
      method: 'POST',
      body: JSON.stringify({
        password: typedPassword,
        action: action
      })
    });
    const json = await response.json();

    if (response.ok && json.success) {
      toast.update(id, { render: 'Success', type: "success", isLoading: false, autoClose: 5000, closeButton: true })
    } else {
      toast.update(id, { render: `Error updating server`, type: "error", isLoading: false, autoClose: 10000, closeButton: true })
    }

    await getContainerState();
  }

  return (
    <div className="row justify-content-center p-3">
      <div className="col-12 col-lg-3 mx-1 mt-1 text-center">Game Server</div>
      <input className="col-12 col-lg-2 mx-1 pt-1" type="password" id="password" placeholder="Password" onChange={(event) => setTypedPassword(event.target.value)}/>
      <button className="col-5 col-lg-1 mx-1 btn btn-primary" onClick={() => sendVMRequest('start')} disabled={displayState !== 'Stopped' || !currentVMState}>Start</button>
      <button className="col-5 col-lg-1 mx-1 btn btn-primary" onClick={() => sendVMRequest('stop')} disabled={displayState === 'Stopped' || !currentVMState}>Stop</button>
      <div className="col-12 col-lg-2 mx-1 mt-1">{displayState}</div>
      <div className="h6 text-center mt-2">Server shuts down automatically after being inactive for 10 minutes</div>
    </div>
  );
}