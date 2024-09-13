"use client"
import React from "react"
import {motion} from "framer-motion"
import {viewPortFadeIn} from "@/components/generic"
import {NursingHomeForm} from "./form"
import {Image} from "@/components/ui/image"
import {Building, ClipboardCheck, Users} from "lucide-react"

export default function NursingHomePage() {
  return (<>
    <section className="bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-start gap-12">
          <motion.div className="relative aspect-[16/9]" {...viewPortFadeIn()}>
            <Image src="/nursing-home.jpg" alt="Nursing Home" className="rounded-lg shadow-lg"/>
          </motion.div>
          <motion.div {...viewPortFadeIn(0.2)}>
            <motion.h1 className="text-4xl font-bold mb-8 text-blue-900">
              Nursing Home Staffing Solution
            </motion.h1>
            <p className="text-lg mb-6">
              We provide expert healthcare professionals for round-the-clock resident care in nursing homes across Ireland.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Building className="w-5 h-5 mr-2 text-blue-500"/>
                <span>Skilled nursing staff</span>
              </li>
              <li className="flex items-center">
                <ClipboardCheck className="w-5 h-5 mr-2 text-blue-500"/>
                <span>Specialized dementia support</span>
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-500"/>
                <span>Rehabilitation services</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <motion.div {...viewPortFadeIn(0.4)} className="bg-white text-blue-900 rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Request Nursing Home Staffing</h3>
            <NursingHomeForm />
          </motion.div>
        </div>
      </div>
    </section>
  </>)
}
