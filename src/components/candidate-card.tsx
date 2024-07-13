"use client"
import candidates from "@/app/candidates/data.json"
import React, {useEffect, useId, useState} from "react"
import {Image} from "@/components/ui/image"
import {cn} from "@/lib/utils"
import useFitText from "use-fit-text"
import {AnimatePresence, motion, MotionConfig} from "framer-motion"
import {PlusIcon, XIcon} from "lucide-react"
import {createPortal} from "react-dom"

export const CandidateCard = ({id, name, img, exp, role}: typeof candidates[number]) => {
  const [open, setOpen] = useState(false)
  const {fontSize, ref} = useFitText()

  return (
    <div key={id} className="group relative rounded-2xl overflow-hidden" onTouchStart={() => setOpen(!open)}>
      <div className="relative w-full aspect-[3/4]">
        <Image className="mx-auto w-full object-top ransition duration-500 group-hover:scale-105" src={img} alt={name}/>
      </div>
      <div className={cn("absolute bottom-0 w-full px-6 py-4 h-fit mt-auto bg-gray-800 text-white")}>
        <p className="text-blue-300 text-xs">{role}</p>
        <h4 className="font-semibold text-nowrap leading-4" style={{fontSize}} ref={ref}>{name}</h4>
      </div>
      <div className={cn("absolute bottom-0 inset-x-0 h-full overflow-y-auto mt-auto p-6 bg-gray-800 text-white",
        "translate-y-[100%] transition duration-300 ease-in-out group-hover:translate-y-0", open && "translate-y-0")}>
        <p className="text-blue-300 text-xs">{role}</p>
        <h4 className="font-semibold text-lg">{name}</h4>
        <div className="pt-4 text-gray-200 text-sm [&_br]:content-[''] [&_br]:block [&_br]:pt-2 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{__html: exp.replaceAll("\n", "<br/>")}}/>
      </div>
    </div>
  )
}

const transition = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3
}

export default function Dialog() {
  const [isOpen, setIsOpen] = useState(false)
  const uniqueId = useId()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  // prevents the dialog from pre-renderd on the server
  if (!mounted) {
    return null
  }

  return (
    <MotionConfig transition={transition}>
      <motion.div
        className="relative"
        initial="initial"
        whileHover="animate"
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <motion.div
          className="flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          layoutId={`dialog-${uniqueId}`}
          style={{
            borderRadius: "12px"
          }}
        >
          <motion.div layoutId={`dialog-img-${uniqueId}`}>
            <img
              src="/eb-27-lamp-edouard-wilfrid-buquet.jpg"
              alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
              className="h-48 w-full object-cover"
            />
          </motion.div>
          <div className="flex flex-grow flex-row items-end justify-between p-2">
            <div>
              <motion.div
                layoutId={`dialog-title-${uniqueId}`}
                className="text-zinc-950 dark:text-zinc-50"
              >
                EB27
              </motion.div>
              <motion.div
                layoutId={`dialog-subtitle-${uniqueId}`}
                layout="position"
                className="text-zinc-700 dark:text-zinc-400"
              >
                Edouard Wilfrid Buquet
              </motion.div>
            </div>
            <button
              type="button"
              className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
              aria-label="Open dialog"
            >
              <PlusIcon size={12}/>
            </button>
          </div>
        </motion.div>
      </motion.div>
      {createPortal(
        <AnimatePresence initial={false} mode="sync">
          {isOpen && (
            <>
              <motion.div
                key={`backdrop-${uniqueId}`}
                className="fixed inset-0 h-full w-full bg-white/40 backdrop-blur-sm dark:bg-black/40"
                variants={{open: {opacity: 1}, closed: {opacity: 0}}}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => {
                  setIsOpen(false)
                }}
              />
              <motion.div
                key="dialog"
                className="pointer-events-none fixed inset-0 flex items-center justify-center"
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
                  layoutId={`dialog-${uniqueId}`}
                  tabIndex={-1}
                  style={{
                    borderRadius: "24px"
                  }}
                >
                  <motion.div layoutId={`dialog-img-${uniqueId}`}>
                    <img
                      src="/eb-27-lamp-edouard-wilfrid-buquet.jpg"
                      alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                      className="h-full w-full"
                    />
                  </motion.div>
                  <div className="p-6">
                    <motion.div
                      layoutId={`dialog-title-${uniqueId}`}
                      className="text-2xl text-zinc-950 dark:text-zinc-50"
                    >
                      EB27
                    </motion.div>
                    <motion.div
                      layoutId={`dialog-subtitle-${uniqueId}`}
                      layout="position"
                      className="text-zinc-700 dark:text-zinc-400"
                    >
                      Edouard Wilfrid Buquet
                    </motion.div>
                    <motion.div
                      initial={{opacity: 0, scale: 0.8}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0, scale: 0.8}}
                      className="origin-bottom"
                    >
                      <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                        Little is known about the life of Édouard-Wilfrid
                        Buquet. He was born in France in 1866, but the time and
                        place of his death is unfortunately a mystery.
                      </p>
                      <p className="text-zinc-500">
                        Research conducted in the 1970s revealed that he’d
                        designed the “EB 27” double-arm desk lamp in 1925,
                        handcrafting it from nickel-plated brass, aluminium and
                        varnished wood.
                      </p>
                      <a
                        className="mt-2 inline-flex text-zinc-500 underline"
                        href="https://www.are.na/block/12759029"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Are.na block
                      </a>
                    </motion.div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-6 top-6 text-zinc-50"
                    type="button"
                    aria-label="Close dialog"
                  >
                    <XIcon size={24}/>
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </MotionConfig>
  )
}
