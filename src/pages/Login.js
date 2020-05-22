import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Notification from '../components/notifications/Notifications';
import loginImage from '../images/login.svg';

const Login = () => {
	const [userData, setUserData] = useState({ email: '', password: '' });
	const [message, setMessage] = useState(false);

	const handleLogin = async e => {
		e.preventDefault();
		setMessage(!message);
	};

	return (
		<div className='form' onSubmit={handleLogin}>
			<div className='form-wrapper'>
				<div className='form-wrapper-image'>
					<img src={loginImage} alt='login portal ' height='350' />
				</div>
				<div className='form-wrapper-field'>
					<h3> LOGIN</h3>
					<form>
						{message && (
							<Notification classStyle=' notify-danger' message='action cannot be peformed' />
						)}
						<div>
							<label for='emailR'>
								<FontAwesomeIcon
									icon='user'
									size='1x'
									color='#555'
									style={{ marginRight: '.5rem' }}
								/>
								Email
							</label>
							<input
								id='emailR'
								name='emailR'
								type='email'
								placeholder='enter email'
								onChange={e => setUserData({ ...userData, email: e.target.value })}
								required
							/>
						</div>
						<div>
							<label for='passwordR'>
								<FontAwesomeIcon
									icon='lock'
									size='1x'
									color='#555'
									style={{ marginRight: '.5rem' }}
								/>
								Password
							</label>
							<input
								id='passwordR'
								name='passwordR'
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
