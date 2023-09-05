import { useEffect, useState } from "react"

export default function useGetScreenSize() {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

    function handleResize() {
      const actualWidth = window.innerWidth;
      const actualHeight = window.innerHeight;

      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {width, height}
}