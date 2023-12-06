'use client'
import clsx from 'clsx'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { buttonVariants } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils'

export type MenuItem = {
    icon?: ReactNode;
    title: string;
    path: string;
    targetBlank?: boolean;
    items?: MenuItem[];
};

const mainLinks: MenuItem[] = [
    {path:"/", title:'Home'},
    {path:"/about", title:'about me'},
    {path:"/projects", title:'my projects'},
    {path:"/projects", title:'Getting started', items: [{path:"/", title:'Home'},
    {path:"/about", title:'about me'},
    {path:"/projects", title:'my projects'},
    {path:"/contact", title:'contact'}]},
    {path:"/contact", title:'contact'},
]

const links: MenuItem[] = [
    {path:"/", title:'Home'},
    {path:"/about", title:'about me'},
    {path:"/projects", title:'my projects'},
    {path:"/contact", title:'contact'},
]

interface MenuProps {
  containerStyles: string
}
export const Nav = ({containerStyles}:MenuProps) => {

  const onNavChange = () => {
    setTimeout(() => {
      const triggers = document.querySelectorAll(
        '.submenu-trigger[data-state="open"]'
      )
      if (triggers.length === 0) return

      const firstTrigger = triggers[0] as HTMLElement
      const viewports = document.getElementsByClassName("submenu-viewport")

      if (viewports.length > 0) {
        const viewport = viewports[0] as HTMLElement
        viewport.style.left = `${firstTrigger.offsetLeft}px`
      }
    })
  }

  return (
    <NavigationMenu className={clsx(containerStyles,'')}  onValueChange={onNavChange}>
      <NavigationMenuList>
        {mainLinks.map((link,index) => (
          <NavigationMenuItem key={index}>
            { !link.items ? 
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.title}
                </NavigationMenuLink>
              </Link>
              : <>
              <NavigationMenuTrigger className="submenu-trigger">{link.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="relative grid p-4 lg:w-[200px] ">
                  {link.items.map((link,index) => (
                    <ListItem
                      key={index}
                      title={link.title}
                      href={link.path}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
              </>
            }
            
          </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"