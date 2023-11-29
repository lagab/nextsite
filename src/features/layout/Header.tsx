import { Nav } from '@/components/Nav'
import { Menu } from 'lucide-react'
import React from 'react'

export const Header = () => {
  return (
    <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Header</span>
                </a>
                <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Menu size={24} />
                </button>
                {/* Nav */}
                <Nav containerStyles={"flex justify-center "}/>
                {/* Mobile Nav */}
                <div className="md:hidden">
                    mobile nav
                </div>

            </div>
            
        </nav>
    </header>
  )
}
