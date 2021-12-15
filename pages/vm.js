import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function VM() {
  const [typedPassword, setTypedPassword] = useState('');

  const sendVMRequest = async (action) => {
    const id = toast.loading("Sending command to server...")
    const response = await fetch(`/api/vm?action=${action}&password=${typedPassword}`);
    const json = await response.json();
    console.log(response);

    if (response.ok && json.success) {
      toast.update(id, { render: 'Success', type: "success", isLoading: false, autoClose: 5000, closeButton: true })
    } else {
      toast.update(id, { render: `Error updating server`, type: "error", isLoading: false, autoClose: 10000, closeButton: true })
    }
  }

  return (
    <div className="row justify-content-center p-3">
      <div className="col-12 col-lg-3 mx-1 mt-1 text-center">Game Server</div>
      <input className="col-12 col-lg-2 mx-1 pt-1" type="text" id="password" placeholder="Password" onChange={(event) => setTypedPassword(event.target.value)}/>
      <button className="col-5 col-lg-1 mx-1 btn btn-primary" onClick={() => sendVMRequest('start')}>Start</button>
      <button className="col-5 col-lg-1 mx-1 btn btn-primary" onClick={() => sendVMRequest('stop')}>Stop</button>
      <div className="h6 text-center mt-2">Server shuts down automatically at 12am & 6am</div>
    </div>
  );
}
