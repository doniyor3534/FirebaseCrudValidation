import { useState } from "react"

export const UseDiscluse = () => {
    const [open, setOpen] = useState(false)

    const onOpen=()=>{
      setOpen(true)
    }
    const onClose=()=>{
      setOpen(false)
    }
  
  return {open,setOpen,onOpen,onClose}
}
