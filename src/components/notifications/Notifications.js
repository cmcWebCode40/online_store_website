import React from 'react'


const Notifications = ({ message, classStyle }) => {
  return (
    <div className="notify m-1">
      <div className={classStyle}>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Notifications
