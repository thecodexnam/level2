'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    // await new Promise((resolve)=>setTimeout(resolve,3000))
    const[name, setName] = useState("Naman")
  return(
    <div className="flex flex-col min-h-screen">
          <header className="bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-bold">My Next.js App</h1>
          </header>
          <main className="flex-1">{name}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            &copy; 2026 My Next.js App. All rights reserved.
          </footer>
        </div>
  )
      
}
