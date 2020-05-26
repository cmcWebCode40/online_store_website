import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Auth } from '../hooks/Auth';
import Notification from '../components/notifications/Notifications';
import loginImage from '../images/login.svg';

const Login = ({ history }) => {
	const [userData, setUserData] = useState({ email: '', password: '' });
	const [message, setMessage] = useState(false);
	const [loading, setLoading] = useState(false);
	const [changeRoute, setChangeRoute] = useState(false);

	const handleLogin = async e => {
		e.preventDefault();
		e.preventDefault();
		setLoading(true);
		Auth.login('http://localhost:4000/user/login/', userData)
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
			history.push("/cart")
		}

	}, [message, history, changeRoute]);

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
							<Notification classStyle=' notify-danger' message={message} />
						)}
						<div>
							<label htmlFor='emailR'>
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
							<label htmlFor='passwordR'>
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
							<button type='submit' className={loading ? 'btn btn-disabled' : ' btn'} >
								{loading ? <FontAwesomeIcon icon="spinner" size="1x" color="#fff" /> : 'LOGIN'}
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
