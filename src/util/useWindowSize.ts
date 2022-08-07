import { useState, useEffect } from 'react';

type Size = {
  width: number
  height?: number
}

// export const useWindowSize: Size = () => {
  export function useWindowSize(): Size {

  const [windowSize, setWindowSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowSize
}