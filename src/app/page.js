"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [windowMeasures, setWindowMeasures] = useState(`W: ${window.innerWidth}, H: ${window.innerHeight}`);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowMeasures(`W: ${width}, H: ${height}`);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="bg-darkPurple h-screen-mobile w-full text-white flex items-center justify-center text-2xl">
      This will be my landing page!
      Window measures:{" "}
      {windowMeasures}
    </main>
  )
}
