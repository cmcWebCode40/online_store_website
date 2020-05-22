import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageLogo from '../../images/slide3.jpg';

const SearchBtn = () => {
	const [isAdded, setAdded] = useState(false);
	const [searchedItems] = useState([]);
	const [isOpened, setIsOpened] = useState(false);
	const openSearchBar = () => {
		setIsOpened(true);
	};
	return (
		<div>
			<button className='btn-link' title='search-item' onClick={openSearchBar}>
				<FontAwesomeIcon
					icon='search'
					size='1x'
					style={{ marginRight: '1rem ' }}
					color='inheret'
					fontWeight='100'
				/>
			</button>
			<div className={isOpened ? 'search' : 'none'}>
				<form>
					<span onClick={() => setIsOpened(false)}>&times;</span>
					<input type='text' placeholder='enter item name' required />
					<button className='btn-link' onClick={openSearchBar}>
						<FontAwesomeIcon
							icon='search'
							size='1x'
							style={{ marginRight: '1rem ' }}
							color='#333'
						/>
					</button>
				</form>
				<div className='items'>
					<h3>Search results ({searchedItems.length})</h3>
					{searchedItems ? (
						searchedItems.map(searched => (
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
						))
					) : (
						<p>No Items found</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default SearchBtn;
