'use client'
import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const Copyright = () => {
  return (
    <div className="bg-secondary font-primary pt-10 px-5 py-4">
      <div className="container mx-auto px-">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 text-white">

          {/* Left Side */}
          <div>
            <span className="flex items-center justify-center md:justify-start gap-2">
              <FaRegCopyright className="text-white" />
              <a href="#" className="font-semibold hover:underline">UC 04 GULSHAN TOWN</a>, All rights reserved 2025    .
            </span>
          </div>

          {/* Right Side */}
          <div>
            Designed By <a href="https://htmlcodex.com" className="border-b border-white hover:opacity-80">Sibex Systems</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Copyright
