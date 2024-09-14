import {useMounted} from "@/lib/hooks"
import {AnimatePresence, motion, Variants} from "framer-motion"
import {Menu, MenuButton, MenuItem, MenuItems, MenuSeparator} from "@headlessui/react"
import {cn} from "@/lib/utils"
import {Icon} from "@/components/ui/icon"
import {menu} from "@/site"
import Link from "next/link"
import {createPortal} from "react-dom"
import React, {Fragment} from "react"


export function MobileNav() {
  const variant: Variants = {
    hidden: {opacity: 0, scale: 0.95, transition: {duration: 0.1}},
    show: {opacity: 1, scale: 1, transition: {duration: 0.1}}
  }

  return (<>
    <Menu as="div" className="md:hidden relative">{({open, close}) => (<>
      <MenuButton className={cn("relative w-11 h-11 p-2 outline-none focus-visible:ring-0")}>
        <Icon.nav.menu className={cn("absolute w-7 h-7 inset-2", open ? "opacity-0" : "opacity-100")}/>
        <Icon.nav.close className={cn("absolute w-7 h-7 inset-2", open ? "opacity-100" : "opacity-0")}/>
      </MenuButton>
      <Overlay isOpen={open}/>
      <AnimatePresence>{open && (<>
        <MenuItems static as={motion.div} variants={variant} initial="hidden" animate="show" exit="hidden"
          className="absolute right-0 rounded-md border bg-white dark:bg-black outline-none shadow-xl origin-top-right p-4 min-w-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-6 p-2">
            {menu.map(({text, path, sub}, index) => (<Fragment key={index}>
              <MenuItem as={Link} href={path} className="font-medium text-nowrap">{text}</MenuItem>
              {sub && sub.map(({path, text}, index) =>
                <MenuItem key={index} as={Link} href={path} className="flex items-center gap-2 font-medium text-nowrap">
                  <Icon.nav.sub className="opacity-30"/> {text}
                </MenuItem>
              )}
              {index != menu.length - 1 && <MenuSeparator className="h-px bg-black/5"/>}
            </Fragment>))}
          </div>
        </MenuItems></>)}
      </AnimatePresence></>)}
    </Menu>
  </>)
}


const Overlay = ({isOpen}: {isOpen: boolean}) => {
  const mounted = useMounted()
  if (!mounted) return null

  return createPortal(<>
    <AnimatePresence>{isOpen && (
      <motion.div initial={{opacity: 0}} animate={{opacity: 0.05}} exit={{opacity: 0}} transition={{duration: 0.1}}
        className="fixed inset-0 bg-black"/>)}
    </AnimatePresence>
  </>, document.body)
}
