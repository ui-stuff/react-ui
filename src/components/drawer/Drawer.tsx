import React from "react"
import { DrawerProps } from "./Drawer.types"
import "./Drawer.css"

const Drawer = ({ children, isOpen, onClose, position = "right" }: DrawerProps) => {
  if (!isOpen) {
    return null
  }

  const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.stopPropagation) e.stopPropagation()
  }

  return (
    <div className={"overlay"} onClick={onClose}>
      <div
        className={`drawer ${position === "right" ? "drawer-right" : "drawer-left"}`}
        onClick={handleStopPropagation}
      >
        <div className={"close-button"} onClick={onClose}>
          <svg
            className={"h-5 w-5"}
            xmlns={"http://www.w3.org/2000/svg"}
            fill={"none"}
            viewBox={"0 0 24 24"}
            stroke={"currentColor"}
            aria-hidden={"true"}
          >
            <path
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              strokeWidth={"2"}
              d={"M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
export default Drawer
