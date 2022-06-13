import { useEffect, useState } from "react"

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = event => {
      if (event.type === "touchstart") {
        setMousePosition({
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        })
      } else if (event.type === "mouseover") {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        })
      }
    }
    window.addEventListener("touchstart", updatePosition)

    window.addEventListener("mouseover", updatePosition)

    return () =>
      window.removeEventListener("mouseover" || "touchstart", updatePosition)
  }, [])

  return mousePosition
}

export default useMousePosition

// ||
// event.type == "touchmove" ||
// event.type == "touchend" ||
// event.type == "touchcancel"
