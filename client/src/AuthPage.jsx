import React from 'react'
import axios from "axios"

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post("http://localhost:3001/",
        {username : value}
      ).then(abx => props.onAuth({...abx.data, secret: value}))
      .catch(e => console.log("error", e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Hey there👋</div>
  
          <div className="form-subtitle">😎😎Join in Now set your username now🚗</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;