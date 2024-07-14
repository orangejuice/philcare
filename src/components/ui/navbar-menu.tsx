"use client"
import React, {ComponentPropsWithoutRef} from "react"
import {AnimatePresence, motion, Transition} from "framer-motion"
import Link, {LinkProps} from "next/link"
import Image from "next/image"
import {useGlobalState} from "@/lib/use-global-state"
import {cn} from "@/lib/utils"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
}

export const MenuItem = ({text, href, children}: ComponentPropsWithoutRef<"div"> & {href?: string, text: string}) => {
  const [active, setActive] = useGlobalState<string | undefined>("menu", undefined)

  return (
    <div onMouseEnter={() => setActive(children ? text : undefined)} className="relative">
      <MenuItemContent href={href}>{text}</MenuItemContent>
      <AnimatePresence>
        {active != undefined && (
          <motion.div initial={{opacity: 0, scale: 0.85, y: 10}} animate={{opacity: 1, scale: 1, y: 0}} exit={{opacity: 0, scale: 0.85, y: 10}}
            transition={{duration: 0.2}}>
            {active === text && (
              <div className="absolute left-1/2 transform -translate-x-1/2 pt-2">
                <motion.div transition={transition} layoutId="active" className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                  <motion.div layout className="w-max h-full p-4">
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const Menu = ({children}: ComponentPropsWithoutRef<"nav">) => {
  const [_, setActive] = useGlobalState<string | undefined>("menu", undefined)

  return (
    <nav onMouseLeave={() => setActive(undefined)} className="relative flex justify-center gap-4 pb-4 -mb-4">
      {children}
    </nav>
  )
}

export const ProductItem = ({title, description, href, src}: {title: string; description: string; href: string; src: string;}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image src={src} width={140} height={70} alt={title} className="flex-shrink-0 rounded-md shadow-2xl"/>
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  )
}

export const MenuItemContent = ({href, children, ...rest}: ComponentPropsWithoutRef<"a"> & PartialBy<LinkProps, "href">) => {
  const [active] = useGlobalState<string | undefined>("menu", undefined)

  // @ts-ignore
  return <Link href={href} {...rest}
    className={cn("block px-3 py-2 text font-medium rounded-md transition-colors",
      "hover:text-white hover:bg-[rgba(59,130,246,1)]", active == children && "text-white bg-[rgba(59,130,246,1)]")}>
    {children}</Link>
}
