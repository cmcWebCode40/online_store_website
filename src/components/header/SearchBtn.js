import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageLogo from '../../images/slide3.jpg';

const SearchBtn = () => {
	const [isAdded, setAdded] = useState(false);
	const [count] = useState(localStorage.getItem('cart'));
	const [searchedItems] = useState([
		{
			id: 1,
			title: 'new bags in town',
			price: '200',
			image: 'sjckjs'
		},
		{
			id: 2,
			title: 'new bags in town',
			price: '200',
			image: 'sjckjs'
		},
		{
			id: 3,
			title: 'new bags in town',
			price: '200',
			image: 'sjckjs'
		}
	]);
	const [isOpened, setIsOpened] = useState(false);
	const openSearchBar = () => {
		setIsOpened(true);
	};
	return (
		<div>
			<button className='btn-link' onClick={openSearchBar}>
				<FontAwesomeIcon
					icon='search'
					size='1x'
					style={{ marginRight: '1rem ' }}
					color='#333'
					fontWeight='200'
				/>
			</button>
			<div className={isOpened ? 'search' : 'none'}>
				<form>
					<span onClick={() => setIsOpened(false)}>&times;</span>
					<input type='text' placeholder='enter item name' required />
					<button className='btn-link' onClick={openSearchBar}>
						<FontAwesomeIcon
							icon='search'
							size='2x'
							style={{ marginRight: '1rem ' }}
							color='#333'
						/>
					</button>
				</form>
				<div className='items'>
					<h3>Search results ({searchedItems.length})</h3>
					{searchedItems.map(searched => (
						<div key={searched.id} className='items-card '>
							<div className='items-card-image'>
								<img src={imageLogo} alt={searched.title} height='100' />
							</div>
							<div className='items-card-list'>
								<h5>{searched.title}</h5>
								<p>${searched.price}</p>
								<button onClick={() => setAdded(!isAdded)} className='btn btn-sm'>
									{isAdded ? (
										<p>
											ADDED
											<FontAwesomeIcon
												icon='check'
												size='1x'
												style={{ margin: ' 0 1rem ' }}
												color='green'
											/>
										</p>
									) : (
										<p>
											ADD
											<FontAwesomeIcon
												icon='shopping-cart'
												size='1x'
												style={{ margin: ' 0 1rem ' }}
												color='#fff'
											/>
										</p>
									)}
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchBtn;
