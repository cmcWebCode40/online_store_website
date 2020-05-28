import React from 'react';

const Notifications = ({ message, classStyle }) => {
	return (
		<div className={`notify ${classStyle} m-1`}>
			<div>
				<p data-testid='message'>{message}</p>
			</div>
		</div>
	);
};

export default Notifications;
