import {cn} from "@/lib/utils"
import {ComponentPropsWithoutRef} from "react"
import {MotionProps} from "framer-motion"
import Link, {LinkProps} from "next/link"

export const CallToActionButton = ({children, className, ...props}: ComponentPropsWithoutRef<"a"> & LinkProps & MotionProps) => {

  return (
    <Link className={cn("relative w-fit group [&_*]:[transition:_all_0.45s_cubic-bezier(0.65,0,0.076,1)] text-white", className)} {...props}>
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 rounded-full group-hover:w-full`}>
        <span className={cn("absolute left-1.5 translate-x-0.5 top-0 bottom-0 my-auto w-4 h-0.5 group-hover:bg-white",
          "before:absolute before:content-[''] before:top-0 before:bottom-0 before:my-auto before:right-0",
          "before:w-2.5 before:h-2.5 before:border-t-2 before:border-r-2 before:border-white before:rotate-45",
          `group-hover:translate-x-3`)}></span>
      </div>
      <span className={`text-nowrap relative z-[1] py-3 pr-5 pl-12 font-bold group-hover:text-white`}>
        {children}
      </span>
    </Link>
  )
}

// source: https://uiverse.io/cssbuttons-io/massive-mayfly-74
