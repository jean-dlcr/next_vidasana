import React from 'react'

const Button = ({
  addClass="",
  label="Button",
  color="blue-dark-3",
  index=null,
  ...props
}) => {

  const classes =  `button-container pointer bg-${color} ${addClass}`;

  return (
    <button className={classes} {...props}>{label}</button>
  )
}

export default Button