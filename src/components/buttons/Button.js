import React from 'react'

const Button = ({ link, text, }) => {
  return (
    <>
      <a href={link} className="btn" target="_blanck">{text}</a>
    </>
  )
}

export default Button
