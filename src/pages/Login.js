import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Notification from '../components/notifications/Notifications';
import loginImage from '../images/login.svg';
import 'axios';
import axios from 'axios';

const Login = () => {
	const [userData, setUserData] = useState({ email: '', password: '' });
	const [message, setMessage] = useState(false);

	const handleLogin = async e => {
		e.preventDefault();
		setMessage(!message);
	};

	(async () => {
		try {
			await axios.post('https://online-shop-api.herokuapp.com/user/register', {
				body: {
					name: 'michaelboy',
					email: 'googleman.gmail.com',
					password: 'mike123'
				},
				header: {
					'content-type': 'application/json'
				}
			});
		} catch (err) {}
	})();

	return (
		<div className='form' onSubmit={handleLogin}>
			<div className='form-wrapper'>
				<div className='form-wrapper-image'>
					<img src={loginImage} alt='login portal ' height='350' />
				</div>
				<div className='form-wrapper-field'>
					<h3>ADMIN LOGIN</h3>
					<form>
						{message && (
							<Notification classStyle='notify-danger' message='action cannot be peformed' />
						)}
						<div>
							<label htmlFor='email-input'>
								<FontAwesomeIcon
									icon='user'
									size='1x'
									color='#555'
									style={{ marginRight: '.5rem' }}
								/>
								Email
							</label>
							<input
								id='email-input'
								type='email'
								placeholder='enter email'
								onChange={e => setUserData({ ...userData, email: e.target.value })}
								required
							/>
						</div>
						<div>
							<label htmlFor='password-input'>
								<FontAwesomeIcon
									icon='lock'
									size='1x'
									color='#555'
									style={{ marginRight: '.5rem' }}
								/>
								Password
							</label>
							<input
								id='password-input'
								type='text'
								placeholder='enter password'
								onChange={e => setUserData({ ...userData, password: e.target.value })}
								required
							/>
						</div>
						<div>
							<button type='submit' className='btn'>
								LOGIN
							</button>
						</div>
						<div>
							<Link to='/register'>
								<p>create account</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
