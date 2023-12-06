import { Nav } from '@/components/Nav'
import { NavMobile } from '@/components/NavMobile'
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
                
                {/* Nav */}
                <Nav containerStyles={"flex justify-center hidden  md:block"}/>
                {/* Mobile Nav */}
                <NavMobile />
            </div>
            
        </nav>
    </header>
  )
}
