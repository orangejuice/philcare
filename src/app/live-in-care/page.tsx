"use client"
import React from "react"
import {motion} from "framer-motion"
import {viewPortFadeIn} from "@/components/generic"
import {LiveInCareForm} from "./form"
import {Image} from "@/components/ui/image"
import {Clock, Heart, Home} from "lucide-react"
import {CandidatesSection} from "@/components/candidates-section"

export default function LiveInCarePage() {
  return (<>
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-start gap-12">
          <motion.div className="relative aspect-[16/9]" {...viewPortFadeIn()}>
            <Image src="/live-in-care.jpg" alt="Live-in Care" className="rounded-lg shadow-lg"/>
          </motion.div>
          <motion.div {...viewPortFadeIn(0.2)}>
            <motion.h1 className="text-4xl font-bold mb-8 text-blue-900">
              Private Live-in HomeCare
            </motion.h1>
            <p className="text-lg mb-6">
              We offer personalized care services tailored to individual needs in the comfort of your own home.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-500"/>
                <span>24/7 personal care</span>
              </li>
              <li className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-blue-500"/>
                <span>Companionship & emotional support</span>
              </li>
              <li className="flex items-center">
                <Home className="w-5 h-5 mr-2 text-blue-500"/>
                <span>Household assistance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    <CandidatesSection/>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <motion.div {...viewPortFadeIn(0.2)} className="bg-white text-blue-900 rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Request Live-in Care Information</h3>
            <LiveInCareForm/>
          </motion.div>
        </div>
      </div>
    </section>
  </>)
}
