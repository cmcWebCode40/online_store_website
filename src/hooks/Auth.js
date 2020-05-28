import axios from 'axios';

export const Auth = (() => {
	const login_Auth = async (url, data) => {
		const res = await axios.post(url, data, {
			Headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json;charset=utf-8'
			}
		});
		return res;
	};

	const Register_Auth = async (url, data) => {
		const res = await axios.post(url, data, {
			Headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json;charset=utf-8'
			}
		});
		return res;
	};

	return {
		login: login_Auth,
		register: Register_Auth
	};
})();
