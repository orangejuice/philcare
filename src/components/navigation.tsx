"use client"
import {motion} from "framer-motion"
import {Image} from "@/components/ui/image"
import React from "react"
import {Menu, MenuItem, MenuItemContent} from "@/components/ui/navbar-menu"
import {menu} from "@/site"
import Link from "next/link"
import {MobileNav} from "@/components/mobile-nav"


export const Navigation = () => {

  return (
    <motion.nav className={`sticky top-0 left-0 right-0 z-10 transition-all duration-300 text-gray-800 bg-white shadow-md`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex relative items-center w-64 aspect-[751/128]">
            <Image src="/logo-3.png" alt="logo" priority noPlaceholder/>
          </Link>
          <div className="max-md:hidden">
            <Menu>
              {menu.map(({path, text, sub}) => (
                <MenuItem key={path} href={path} text={text}>
                  {sub && (
                    <div className="flex flex-col space-y-4 text-sm">
                      {sub.map(({path, text}) => (
                        <MenuItemContent key={path} href={`/${path}`}>{text}</MenuItemContent>
                      ))}
                    </div>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <MobileNav/>
        </div>
      </div>
    </motion.nav>
  )
}
