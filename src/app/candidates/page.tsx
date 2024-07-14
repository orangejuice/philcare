"use client"
import candidates from "./data.json"
import {CandidateCard} from "@/components/candidate-card"
import React from "react"
import {motion} from "framer-motion"
import {viewPortFadeIn} from "@/components/generic"
import {LearnMoreButton} from "@/components/ui/button"

export default function Page() {
  return (<>
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-6 gap-2 lg:gap-16 items-center grid lg:grid-cols-2">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <motion.h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white" {...viewPortFadeIn()}>
            Our Candidates
          </motion.h2>
          <motion.p className="mb-4 text-gray-600 dark:text-gray-300" {...viewPortFadeIn(0.2)}>
            Discover highly skilled and compassionate healthcare professionals from the Philippines,
            ready to bring their expertise and dedication to Irish nursing homes.
          </motion.p>
        </div>
        <motion.div  {...viewPortFadeIn(0.4)}>
          <LearnMoreButton className="text-blue-500" href="/candidates/join">Become a careworker</LearnMoreButton>
        </motion.div>
      </div>
    </section>
    <section className="container mx-auto px-6 mb-16">
      <motion.div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" {...viewPortFadeIn(0.6)}>
        {candidates.map((candidate) => (
          <CandidateCard {...candidate} key={candidate.id}/>
        ))}
      </motion.div>
    </section>
  </>)
}
