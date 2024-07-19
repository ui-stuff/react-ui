import React, { FC } from "react"
import { ButtonProps } from "./Button.types"
import classes from "./Button.module.css"

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className={classes.btn} {...props}>
      {label}
    </button>
  )
}

export default Button
