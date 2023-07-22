import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="bg-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-red-600">My Blog</div>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-black hover:text-red-600">
                  Home
                </Link>
              </li>
              <li>
              <Link to="/view" className="text-black hover:text-red-600">
                  View Blogs
                </Link>
              </li>
              <li>
              <Link to="/" className="text-black hover:text-red-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
