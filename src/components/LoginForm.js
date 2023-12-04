import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider';

import axios from 'axios';
const LOGIN_URL = '/auth';

const LoginForm = () => {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setError('');
  }, [userName, password])

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post(LOGIN_URL, 
          JSON.stringify({userName, password}),
          {
            headers: { 'Content-Type': 'aplplication/json'},
            withCredentials: true
          }
          );
          console.log(JSON.stringify(response?.data))
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({userName, password, roles, accessToken});
          setUserName('');
          setPassword('');
          setSuccess(true);
      } catch (error) {
        if (!error?.response) {
          setError('No Server Response');
        } else if (error.response?.status === 400) {
          setError('Missing Username or Password');

        } else if (error.response?.status === 401) {
          setError('Unauthorized');
        } else {
          setError('Login Failed');
        }
        errRef.current.focus();
      }
    }



  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
              <a href= "/">Go to Home</a>
          </p>
        </section>
      ) : (
      
    <section>
      <p ref={errRef} className={error ? "error" :
       "offscreen"} aria-live="assertive">{error}</p>
       <h1>Sign In</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input 
          type="text"
          id='username'
          ref={userRef}
          autoComplete='off'
          onChange={(e) => setUserName(e.target.value)}
          value = {userName}
          required
          />
        <label htmlFor="password">Password: </label>
        <input 
          type="password"
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          value = {password}
          required
          />
          <button>Sign In</button>
          </form>
          <p>
            Need an Account?<br />
            <span className = "line">
              {/*put router link here */}
              <a href="/SignUpPage">Sign Up</a>
            </span>
          </p>
    </section>
      )}
      </>
  )
}
export default LoginForm;