import React from 'react';

const PostPortal = ({ isAdmin }) => {
	return (
		<div style={{ textAlign: 'center', display: isAdmin ? 'block' : 'none' }}>
			<h1>ADMIN-DASHBOARD</h1>
		</div>
	);
};

export default PostPortal;
