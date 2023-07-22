import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-transparent p-4 text-white text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
