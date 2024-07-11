import { ReactNode } from "react"

export type DrawerProps = {
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  position?: "left" | "right"
}
