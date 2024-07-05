import React from "react"
import { ButtonProps } from "./Button.types"
import "./Button.css"

const Button = ({ label }: ButtonProps) => {
  return <button className={"btn"}>{label}</button>
}

export default Button
