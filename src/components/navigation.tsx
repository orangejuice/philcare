"use client"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import {motion} from "framer-motion"
import {Menu as MenuIcon} from "lucide-react"
import {Image} from "@/components/image"
import React, {useState} from "react"
import {Menu, MenuItem, MenuItemContent} from "@/components/ui/navbar-menu"
import {menu} from "@/site"
import Link from "next/link"

const NavItem = ({children, href}: {children: string, href: string}) => (
  <NavigationMenu.Item>
    <NavigationMenu.Link href={href}
      className="block px-3 py-2 font-medium hover:text-white hover:bg-blue-700 rounded-md transition-colors">
      {children}
    </NavigationMenu.Link>
  </NavigationMenu.Item>
)

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 text-gray-800 bg-white shadow-md`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex relative items-center w-64 aspect-[751/128]">
            <Image src="/logo-3.png" alt="logo" priority/>
          </Link>
          <div className="max-md:hidden">
            <Menu>
              {Object.entries(menu).map(([path, {text, sub}]) => (
                <MenuItem key={path} item={sub ? text : {path, text}}>
                  {sub && (
                    <div className="flex flex-col space-y-4 text-sm">
                      {Object.entries(sub).map(([subPath, text]) => (
                        <MenuItemContent key={subPath} href={`/${path}/${subPath}`}>{text}</MenuItemContent>
                      ))}
                    </div>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <MenuIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-white w-full md:hidden ">
          <NavigationMenu.Root className="relative">
            <NavigationMenu.List className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-md">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/#services">Services</NavItem>
              <NavItem href="/#benefits">Benefits</NavItem>
              <NavItem href="/#process">Our Process</NavItem>
              <NavItem href="/candidates">Our candidates</NavItem>
              <NavItem href="/#contact">Contact</NavItem>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      )}
    </motion.nav>
  )
}
