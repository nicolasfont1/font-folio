"use client"
import useGetScreenSize from "@/hooks/useGetScreenSize"

export default function Home() {
  const screenSize = useGetScreenSize()

  return (
    <main className="bg-darkPurple h-screen-mobile w-full text-white flex flex-col items-center justify-center text-2xl text-center">
      This will be my landing page!
      <p>
        Window measures:{" "}
        {screenSize}
      </p>
    </main>
  )
}
