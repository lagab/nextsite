import { LinkList, link } from '@/components/LinkList'
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    

<footer className="bg-white dark:bg-gray-900 w-full">
    <div className="container mx-auto ">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <LinkList className="text-gray-500 dark:text-gray-400 font-medium" 
            links={[
            {title: 'About',href: '#', name:'About'},
            {title: 'Careers',href: '#', name:'Careers'},
            {title: 'Brand Center',href: '#', name:'Brand Center'},
            {title: 'Blog',href: '#', name:'Blog'},
            ]} />
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <LinkList className="text-gray-500 dark:text-gray-400 font-medium" 
            links={[
            {title: 'iOS',href: '#', name:'Discord Server'},
            {title: 'Android',href: '#', name:'Twitter'},
            {title: 'Windows',href: '#', name:'Facebook'},
            ]} />
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <LinkList className="text-gray-500 dark:text-gray-400 font-medium" 
            links={[
            {title: 'Privacy Policy',href: '#', name:'Privacy Policy'},
            {title: 'Licensing',href: '#', name:'Licensing'},
            {title: 'Terms & Conditions',href: '#', name:'Terms &amp; Conditions'},
            ]} />
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <LinkList className="text-gray-500 dark:text-gray-400 font-medium" 
            links={[
            {title: 'iOS',href: '#', name:'iOS'},
            {title: 'Android',href: '#', name:'Android'},
            {title: 'Windows',href: '#', name:'Windows'},
            {title: 'MacOS',href: '#', name:'MacOS'},
            ]} />
        </div>
    </div>
    
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <Facebook size={16} />
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Twitter size={16} />
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Github size={16} />
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Instagram size={16} />
                  <span className="sr-only">Instagram account</span>
              </a>
        </div>
    </div>
</footer>

  )
}
