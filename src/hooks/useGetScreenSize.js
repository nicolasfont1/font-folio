import { useEffect, useState } from "react"

export default function useGetScreenSize() {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    setScreenSize(`W: ${window.innerWidth}, H: ${window.innerHeight}`);
    
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize(`W: ${width}, H: ${height}`);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize
}