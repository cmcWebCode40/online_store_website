import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Auth } from '../hooks/Auth';
import Notification from '../components/notifications/Notifications';
import loginImage from '../images/login.svg';

const Register = ({ history }) => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changeRoute, setChangeRoute] = useState(false);

  const handleRegistration = e => {
    e.preventDefault();
    setLoading(true);
    Auth.register('http://localhost:4000/user/register/', userData)
      .then(res => {
        if (res.status === 200) {
          setMessage(res.statusText);
          setChangeRoute(!changeRoute)
        }
      }).catch(err => {
        const { response } = err;
        setMessage(response.data);
      }).finally(() => setLoading(false));
  };

  useEffect(() => {

    if (changeRoute) {
      history.push("/login")
    }

  }, [message, history, changeRoute]);

  return (
    <div className='form'>
      <div className='form-wrapper'>
        <div className='form-wrapper-image'>
          <img src={loginImage} alt='login portal ' height='350' />
        </div>
        <div className='form-wrapper-field'>
          <h3> SIGNUP</h3>
          <form onSubmit={handleRegistration}>
            {message && (
              <Notification classStyle='notify-danger' message={message} />
            )}
            <div>
              <label htmlFor='name'>
                <FontAwesomeIcon
                  icon='lock'
                  size='1x'
                  color='#555'
                  style={{ marginRight: '.5rem' }}
                />
								Name
							</label>
              <input
                id='name'
                name='name'
                type='text'
                required
                placeholder='your name'
                onChange={e => setUserData({ ...userData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='emailS'>
                <FontAwesomeIcon
                  icon='user'
                  size='1x'
                  color='#555'
                  style={{ marginRight: '.5rem' }}
                />
								Email
							</label>
              <input
                id='emailS'
                name='emailS'
                type='email'
                required
                placeholder='enter email'
                onChange={e => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='passworD'>
                <FontAwesomeIcon
                  icon='lock'
                  size='1x'
                  color='#555'
                  style={{ marginRight: '.5rem' }}
                />
								Password
							</label>
              <input
                id='passworD'
                name='passworD'
                type='text'
                required
                placeholder='password'
                onChange={e => setUserData({ ...userData, password: e.target.value })}
              />
            </div>

            <div>
              <button type='submit' className={loading ? 'btn btn-disabled' : ' btn'} >
                {loading ? <FontAwesomeIcon icon="spinner" size="1x" color="#fff" /> : 'SIGN UP'}
              </button>
            </div>
            <div>
              <Link to='/login'>
                <p>I Have an Account Login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
