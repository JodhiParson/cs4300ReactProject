import {useRef, useState, useEffect} from 'react';

const Login = () => {
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

  return (
    <section>
      <p ref={errRef} className={error ? "error" :
       "offscreen"} aria-live="assertive">{error}</p>
    </section>
  )
}