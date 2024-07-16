"use client"
import React, {useState} from "react"
import {Image} from "@/components/ui/image"
import {cn} from "@/lib/utils"
import useFitText from "use-fit-text"
import {Icon} from "@/components/ui/icon"
import useTouchOnly from "@/lib/use-touch-only"
import {Candidate} from "contentlayer/generated"

export const CandidateCard = ({name, img, body, role}: Candidate) => {
  const [open, setOpen] = useState(false)
  const {fontSize, ref} = useFitText()
  const onTouchOnly = () => {setOpen(!open)}
  const touchHandlers = useTouchOnly({onTouchOnly})

  return (
    <div className="group relative rounded-2xl overflow-hidden [box-shadow:_0_0_5px_rgba(0,0,0,0.15)]" {...touchHandlers}>
      <div className="relative w-full aspect-[3/4]">
        <Image className="mx-auto w-full object-top ransition duration-500 group-hover:scale-105" src={img} alt={name}/>
      </div>
      <div className={cn("absolute bottom-0 w-full px-6 py-4 h-fit mt-auto bg-gray-800 text-white")}>
        <p className="text-blue-300 text-xs">{role}</p>
        <h4 className="font-semibold text-nowrap leading-4" style={{fontSize}} ref={ref}>{name}</h4>
        <div className="flex flex-wrap mt-2 gap-x-4 text-xs">
          <span className="flex items-center gap-1 text-nowrap"><Icon.check/> Nursing Home</span>
          <span className="flex items-center gap-1 text-nowrap"><Icon.check/> Live-in homecare</span>
        </div>
      </div>
      <div className={cn("absolute bottom-0 inset-x-0 h-max max-h-full overflow-y-auto mt-auto p-6 bg-gray-800 text-white",
        "translate-y-[100%] transition duration-300 ease-in-out group-hover:translate-y-0", open && "translate-y-0")}>
        <p className="text-blue-300 text-xs">{role}</p>
        <h4 className="font-semibold text-lg">{name}</h4>
        <div className="flex flex-wrap mt-2 gap-x-4 text-xs">
          <span className="flex items-center gap-1 text-nowrap"><Icon.check/> Nursing Home</span>
          <span className="flex items-center gap-1 text-nowrap"><Icon.check/> Live-in homecare</span>
        </div>
        <div className="pt-4 text-gray-200 text-sm prose"
          dangerouslySetInnerHTML={{__html: body.html}}/>
      </div>
    </div>
  )
}
