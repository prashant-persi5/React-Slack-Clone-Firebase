import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Login = () => {
  const [{}, dispatch] = useStateValue();
  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          payload: result.user
        });
      }).catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="logo" />
        <h1>Sign in to Slack Overflow</h1>
        <p>A slack clone...</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login;
