import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Activity = () => {
	return (
		<div style={{ margin: '3rem 0 0 0' }}>
			<div className='activity'>
				<h5>At a Glance</h5>
				<div className='activity-show'>
					<div>
						<FontAwesomeIcon icon='map-pin' color='#333' size='1x' />
						<span>1 Post</span>
					</div>
					<div>
						<FontAwesomeIcon icon='pager' color='#333' size='1x' />
						<span>2 Pages</span>
					</div>
					<div>
						<FontAwesomeIcon icon='comment' color='#333' size='1x' />
						<span>1 Comment</span>
					</div>
				</div>
			</div>
			<div className='overview'>
				<h5>Activity</h5>
				<div className='overview-layout'>
					<p>Recently Published</p>
					<span>May 29th, 7:59am</span>
				</div>
				<div className='overview-comments'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque, minima alias
						architecto optio modi, nemo incidunt velit, corrupti maxime quod labore cum doloribus
						aspernatur. Deserunt iusto tenetur dolor ea?
					</p>
					<div className='nav'>
						<ul>
							<li>All(1)</li>
							<li>Pending(0)</li>
							<li>Approved(1)</li>
							<li>Spam(3)</li>
							<li>Trash(9)</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activity;
