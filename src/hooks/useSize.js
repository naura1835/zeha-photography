import { useCallback, useLayoutEffect, useState } from "react"

const getDimensionObject = node => {
  const rect = node.getBoundingClientRect()

  return {
    width: rect.width,
    height: rect.height,
  }
}

const useSize = () => {
  const [dimensions, setDimensions] = useState({})
  const [node, setNode] = useState(null)

  const ref = useCallback(node => {
    setNode(node)
  }, [])

  useLayoutEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionObject(node))
      measure()
    }
  }, [node])
  return [ref, dimensions]
}
export default useSize
