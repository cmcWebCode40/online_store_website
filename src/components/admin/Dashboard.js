import React, { useState } from 'react';
import Activity from './Activity';
import axios from 'axios';
import 'form-data';

const Dashboard = () => {
	const [file, setFile] = useState('');
	const submitData = async e => {
		console.log(file);
		e.preventDefault();
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'online-shop');
		data.append('cloud_name', 'cmcwebcode');
		// fetch('	https://api.cloudinary.com/v1_1/cmcwebcode/image/upload', {
		//   method: 'post',
		//   body: data
		// }).then(res => res.json())
		//   .then(data => {
		//     console.log(data);
		//   }).catch(err => {
		//     console.log(err);
		// })
		try {
			const res = await axios.post('https://api.cloudinary.com/v1_1/cmcwebcode/image/upload', data);
			console.log(res);
		} catch (error) {
			console.log({ error });
		}
	};

	return (
		<div className='dashboard my-5'>
			<div>
				<Activity />
			</div>
			<div className='form' style={{ margin: '-3rem  0 0 0' }}>
				<div className='form-wrapper'>
					<div className='form-wrapper-field'>
						<h2> Products Upload Fields</h2>
						<form onSubmit={submitData}>
							<select name='products' id='products'>
								<option value='bags'>Bags</option>
								<option value='shoes'>Shoes</option>
							</select>
							<div>
								<label htmlFor='name'>Image</label>
								<input
									id='imageitem'
									name='imageitem'
									type='file'
									onChange={e => setFile(e.target.files[0])}
									// placeholder=''
								/>
							</div>
							<div>
								<label htmlFor='title'>Tilte</label>
								<input id='title' name='title' type='text' placeholder='enter Product Title' />
							</div>
							<div>
								<label htmlFor='itemprice'>Price</label>
								<input id='itemprice' name='itemprice' type='number' placeholder='enter price' />
							</div>
							<div>
								<textarea
									id='description'
									name='description'
									type='text'
									cols='30'
									rows='10'
									placeholder='Enter Product description'
								/>
							</div>
							<div>
								<button type='submit' className={' btn'}>
									Upload Product
								</button>
							</div>
							<div></div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
