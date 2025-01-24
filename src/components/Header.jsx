import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className="fixed w-full flex items-center justify-end p-20 z-50">
      <button className="bg-black rounded-full border-4 px-10 py-3 hover:bg-gray-500 relative z-10">
        Hire me
      </button>
      <i className="ri-more-2-fill text-4xl ml-3 relative z-10"></i>
    </div>
  )
}

export default Header
