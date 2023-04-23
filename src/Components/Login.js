import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
function Login() {
    const [{},dispatch]=useStateValue();
    const signIn=()=>{
        auth
        .signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch(error=>alert(error.message));
    }
  return (
    <div className='login'>
      <div className='logincontainer'>
      <img src='https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?w=900&t=st=1682243620~exp=1682244220~hmac=01aacd8acb57544405715702a086b668faccd29eda7cade848b1b9dfc6c10bde'/>
      <div className='login_text'>
      <h1>Sign in</h1>
      </div>
      <Button onClick={signIn}>
      Sign in to Google
      </Button>
      </div>
      </div>
  )
}

export default Login
