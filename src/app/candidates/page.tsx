import candidates from "./data.json"
import {CandidateCard} from "@/components/candidate-card"

export default function Page() {
  return (<>
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-6 gap-16 items-center lg:grid lg:grid-cols-2">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Our Candidates
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Discover highly skilled and compassionate healthcare professionals from the Philippines,
            ready to bring their expertise and dedication to Irish nursing homes.
          </p>
        </div>
        {/*<div className="relative w-4/5 justify-self-end grid grid-cols-2 justify-items-center gap-24 max-lg:hidden">*/}
        {/*  <Icon.arrow className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px]"/>*/}
        {/*  <div className="relative flex flex-col justify-end p-4 w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">*/}
        {/*    <Image src="/philippines.png" alt="philippines photo"/>*/}
        {/*    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10"></div>*/}
        {/*    <div className="z-10 overflow-hidden text-sm text-gray-300">Philippines</div>*/}
        {/*  </div>*/}
        {/*  <div className="relative flex flex-col justify-end p-4 w-full aspect-[3/4] rounded-lg overflow-hidden mt-10 shadow-2xl">*/}
        {/*    <Image src="/ireland-spire.png" alt="ireland photo" className="brightness-110"/>*/}
        {/*    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10"></div>*/}
        {/*    <div className="z-10 overflow-hidden text-sm text-gray-300">Ireland</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
    <section className="container mx-auto px-6 mb-16">
      <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {candidates.map((candidate) => (
          <CandidateCard {...candidate} key={candidate.id}/>
        ))}
      </div>
    </section>
  </>)
}
