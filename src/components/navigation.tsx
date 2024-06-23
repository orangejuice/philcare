"use client"
import React from "react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import {motion} from "framer-motion"
import {Menu} from "lucide-react"
import {Image} from "@/components/image"

const NavItem = ({children, href}: {children: string, href: string}) => (
  <NavigationMenu.Item>
    <NavigationMenu.Link href={href}
      className="block px-3 py-2 font-medium hover:text-white hover:bg-blue-700 rounded-md transition-colors">
      {children}
    </NavigationMenu.Link>
  </NavigationMenu.Item>
)

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav className={`sticky top-0 left-0 right-0 z-[1001] transition-all duration-300 text-gray-800 bg-white shadow-md`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex relative items-center w-64 aspect-[751/128]">
            <Image src="/logo-3.png" alt="logo" priority/>
          </div>
          <div className="hidden md:block">
            <NavigationMenu.Root className="relative">
              <NavigationMenu.List className="flex space-x-4">
                <NavItem href="#services">Our Services</NavItem>
                <NavItem href="#benefits">Benefits</NavItem>
                <NavItem href="#process">Our Process</NavItem>
                <NavItem href="#contact">Contact</NavItem>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <Menu className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-white w-full md:hidden ">
          <NavigationMenu.Root className="relative">
            <NavigationMenu.List className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavItem href="#services">Services</NavItem>
              <NavItem href="#benefits">Benefits</NavItem>
              <NavItem href="#process">Our Process</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      )}
    </motion.nav>
  )
}
