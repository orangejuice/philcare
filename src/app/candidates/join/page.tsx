"use client"
import React from "react"
import {motion} from "framer-motion"
import {viewPortFadeIn} from "@/components/generic"
import {ContactForm} from "./form"
import {Image} from "@/components/ui/image"
import {Icon} from "@/components/ui/icon"


export default function Page() {
  return (<>
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-6 gap-2 lg:gap-16 items-center grid lg:grid-cols-2">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <motion.h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white" {...viewPortFadeIn()}>
            Your Pathway to a Fulfilling Healthcare Career
          </motion.h2>
          <motion.p className="mb-4 text-gray-600 dark:text-gray-300 whitespace-pre-wrap" {...viewPortFadeIn(0.2)}>
            At PhilCare Ireland, we are dedicated to connecting talented healthcare professionals from the Philippines
            with rewarding opportunities in Ireland. Whether you’re an experienced nurse or a compassionate caregiver,
            we provide a seamless process to help you find the perfect role in nursing homes and live-in home care settings.
          </motion.p>
        </div>
        <motion.div className="relative w-4/5 justify-self-center grid grid-cols-2 justify-items-center gap-24"  {...viewPortFadeIn(0.4)}>
          <Icon.arrow className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px]"/>
          <div className="relative flex flex-col justify-end p-4 w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
            <Image src="/philippines.png" alt="philippines photo"/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10"></div>
            <div className="z-10 overflow-hidden text-sm text-gray-300">Philippines</div>
          </div>
          <div className="relative flex flex-col justify-end p-4 w-full aspect-[3/4] rounded-lg overflow-hidden mt-10 shadow-2xl">
            <Image src="/ireland-spire.png" alt="ireland photo" className="brightness-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10"></div>
            <div className="z-10 overflow-hidden text-sm text-gray-300">Ireland</div>
          </div>
        </motion.div>
      </div>
    </section>
    <section className="container mx-auto px-6 mb-16">
      <div className="w-full lg:max-w-lg mx-auto items-center gap-16">
        <motion.div {...viewPortFadeIn(0.6)} className="bg-white text-blue-900 rounded-xl">
          <h3 className="text-lg font-bold mb-6">Start Your Journey</h3>
          <ContactForm/>
        </motion.div>
      </div>
    </section>
  </>)
}
