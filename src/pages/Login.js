import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import loginImage from '../images/login.svg';

const Login = () => {
  return (
    <div className="form">
      <div className="form-wrapper">
        <div className="form-wrapper-image">
          <img src={loginImage} alt="login portal " height="350" />
        </div>
        <div className="form-wrapper-field">
          <h3>ADMIN LOGIN</h3>
          <form>
            <div>
              <label htmlFor="email">
                <FontAwesomeIcon
                  icon="user"
                  size="1x"
                  color="#555"
                  style={{ marginRight: '.5rem' }}
                />
                Email
                <input name="email" type="text" required placeholder="enter email" />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                <FontAwesomeIcon
                  icon="lock"
                  size="1x"
                  color="#555"
                  style={{ marginRight: '.5rem' }}
                />
                Password
                <input name="password" type="text" required placeholder="enter password" />
              </label>
            </div>
            <div>
              <button type="submit" className="btn">LOGIN</button>
            </div>
            <div>
              <Link to="/register">
                <p>create account</p></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
