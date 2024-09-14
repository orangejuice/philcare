import React from "react"
import {motion} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {allCandidates} from "contentlayer/generated"
import {viewPortFadeIn} from "@/components/generic"
import {ArrowRight} from "lucide-react"

export function CandidatesSection() {
  const featuredCandidates = allCandidates.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 className="text-2xl font-bold text-center mb-12 text-blue-900"{...viewPortFadeIn()}>
          Meet Some of Our Caregivers
        </motion.h2>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 mb-12"{...viewPortFadeIn(0.2)}>
          {featuredCandidates.map((candidate) => (
            <div key={candidate.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative aspect-[3/4]">
                <Image src={candidate.imagePath} alt={candidate.name} fill className="object-cover object-top"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0"/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-semibold text-sm line-clamp-1">{candidate.name}</p>
                <p className="text-sm text-gray-300 line-clamp-1">{candidate.role}</p>
              </div>
            </div>
          ))}
          <div className="group relative overflow-hidden rounded-lg shadow-lg bg-blue-50 flex items-center justify-center">
            <Link href="/candidates" className="absolute inset-0 flex flex-col items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300">
              <ArrowRight className="w-12 h-12 mb-2"/>
              <span className="font-semibold text-lg">View More</span>
              <span className="text-sm">Caregivers</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
