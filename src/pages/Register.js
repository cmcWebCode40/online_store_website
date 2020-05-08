import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Notification from '../components/notifications/Notifications';
import loginImage from '../images/login.svg';

const Login = () => {
  const [userData, setUserData]=useState({email:'', password:'',confirmPassword:''});
  const [message, setMessage]=useState(false);

  const handleRegistration = async(e)=>{
    e.preventDefault();
    setMessage(!message)
  };
  return (
    <div className="form">
      <div className="form-wrapper">
        <div className="form-wrapper-image">
          <img src={loginImage} alt="login portal " height="350" />
        </div>
        <div className="form-wrapper-field">
          <h3>ADMIN SIGNUP</h3>
          <form onSubmit={handleRegistration}>
            {message && <Notification classStyle="notify-danger" message="action cannot be peformed"/>}
            <div>
              <label htmlFor="email">
                <FontAwesomeIcon
                  icon="user"
                  size="1x"
                  color="#555"
                  style={{ marginRight: '.5rem' }}
                />
                Email
                <input name="email" type="email" required placeholder="enter email" onChange={(e)=> setUserData({...userData,email:e.target.value})} />
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
                <input name="password" type="text" required placeholder="password"  onChange={(e)=> setUserData({...userData,password:e.target.value})}  />
              </label>
            </div>
            <div>
              <label htmlFor="confirmpassword">
                <FontAwesomeIcon
                  icon="lock"
                  size="1x"
                  color="#555"
                  style={{ marginRight: '.5rem' }}
                />
                Password
                <input name="confirmpassword" type="text" required placeholder="confirm password"  onChange={(e)=> setUserData({...userData,confirmPassword:e.target.value})}  />
              </label>
            </div>
            <div>
              <button type="submit" className="btn">SIGN UP</button>
            </div>
            <div>
              <Link to="/login">
                <p>I Have an Account Login</p></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
