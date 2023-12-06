
import React from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Menu } from 'lucide-react'

export const NavMobile = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <Menu size={24} />
            </button>
        </SheetTrigger>
        <SheetContent>
             <SheetHeader>

             </SheetHeader>
             <div className="grid grid-flow-row auto-rows-max text-sm">
                <a className="flex w-full items-center rounded-md p-2 hover:underline" target="" rel="" href="/docs/documentation">Introduction</a>
                <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Contentlayer</span>
                <a className="flex w-full items-center rounded-md p-2 hover:underline" target="" rel="" href="/docs/documentation/components">Components</a>
                <a className="flex w-full items-center rounded-md p-2 hover:underline" target="" rel="" href="/docs/documentation/code-blocks">Code Blocks</a>
                <a className="flex w-full items-center rounded-md p-2 hover:underline" target="" rel="" href="/docs/documentation/style-guide">Style Guide</a>
                <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Search</span>
            </div>
        </SheetContent>
    </Sheet>
  )
}
