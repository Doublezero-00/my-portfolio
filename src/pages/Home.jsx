import React from 'react'
import ThemeToggle from "@/components/ThemeToggle.jsx"
import StarBackground from "@/components/StarBackground.jsx"
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}


      {/* Footer */}



    </div>
  )
}
