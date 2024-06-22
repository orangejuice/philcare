"use client"
import React from "react"
import {motion, Variants} from "framer-motion"
import {BookOpen, Briefcase, Globe, HandCoins, HandHelping, Heart, Mail, MapPin, Phone, Scale, Users, Workflow} from "lucide-react"
import {Navigation} from "@/components/navigation"
import {CheckBadgeIcon} from "@heroicons/react/16/solid"
import {ContactForm} from "@/components/form"
import {Image} from "@/components/image"

export default function Home() {
  const fadeIn: Variants = {hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}
  const viewPortFadeIn = (delay = 0) => ({
    initial: "hidden", whileInView: "visible", viewport: {once: true, amount: 0.5}, variants: fadeIn,
    transition: {duration: 0.6, delay}
  })

  return (<>
    <Navigation/>
    <header className="min-h-[calc(100vh-4rem)] flex relative overflow-hidden">
      <Image src="/07b276ed-052b-4985-af7d-cfd64180e361_0.png" alt="hero"/>
      <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 lg:via-blue-500/40 to-blue-500/75 lg:to-transparent" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}/>
      <div className="flex flex-col gap-4 px-20 py-40 relative z-10 justify-evenly items-center text-center lg:justify-normal lg:items-start lg:text-left lg:max-w-2xl">
        <motion.p {...viewPortFadeIn(0.4)} whileHover={{boxShadow: "0px 0px 8px rgb(255,255,255)"}}
          className="flex items-center gap-1 bg-yellow-300 text-blue-900 px-2 py-0.5 text-xs rounded-full font-medium transition-colors duration-300 shadow-lg">
          <CheckBadgeIcon className="inline w-3.5 h-3.5"/><span className="font-extrabold">Free Introductory Offer</span> for limited time!
        </motion.p>
        <motion.h1 {...viewPortFadeIn()}
          className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl [text-shadow:0_1px_1px_rgb(0_0_0_/_50%)]">
          <span className="block">Quality Healthcare</span>{" "}
          <span className="block text-yellow-300">Professionals from the Philippines</span>
        </motion.h1>
        <motion.p {...viewPortFadeIn(0.2)}
          className="text-base text-blue-100 sm:max-w-xl sm:mx-auto md:text-lg lg:mx-0">
          Empowering Irish nursing homes with compassionate and skilled care assistants.
        </motion.p>
      </div>
      <motion.div className="absolute left-0 -bottom-1 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>
    </header>
    <section id="services" className="py-10 bg-white xl:mx-[15vw] xl:rounded-xl xl:shadow-2xl xl:-translate-y-2/3 xl:mb-[-10%]">
      <div className="flex flex-col gap-10 px-6">
        <motion.div className="lg:text-center" {...viewPortFadeIn()}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Bridging Healthcare Gaps
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {icon: Users, title: "Expert Recruitment", description: "We source top-tier healthcare assistants tailored to your specific needs."},
            {icon: BookOpen, title: "Rigorous Vetting", description: "Our thorough assessment ensures candidates exceed Irish healthcare standards."},
            {icon: Heart, title: "Holistic Support", description: "From visa processing to cultural integration, we provide end-to-end assistance."}
          ].map((service, index) => (
            <motion.div key={service.title} {...viewPortFadeIn((index + 1) * 0.2)}>
              <dt>
                <motion.div className="absolute flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white">
                  <service.icon className="w-8 h-8"/>
                </motion.div>
                <p className="ml-20 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
              </dt>
              <dd className="mt-2 ml-20 text-base text-gray-500">{service.description}</dd>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="lg:text-center" {...viewPortFadeIn()}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose PhilCare Ireland?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our unique approach brings multiple advantages to your nursing home.
          </p>
        </motion.div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {[
              {
                icon: Briefcase,
                name: "Skilled Professionals",
                description: "Access to a pool of highly trained and compassionate care assistants."
              },
              {
                icon: Globe,
                name: "Cultural Diversity",
                description: "Enrich your workplace with diverse perspectives and experiences."
              },
              {
                icon: HandCoins,
                name: "Cost-Effective",
                description: "Competitive rates without compromising on quality of care."
              },
              {
                icon: Workflow,
                name: "Seamless Integration",
                description: "Our professionals are prepared to adapt quickly to Irish healthcare settings."
              },
              {
                icon: HandHelping,
                name: "Ongoing Support",
                description: "We provide continuous assistance to ensure smooth operations."
              },
              {
                icon: Scale,
                name: "Compliance Assured",
                description: "All placements adhere to Irish immigration and healthcare regulations."
              }
            ].map((benefit, index) => (
              <motion.div key={benefit.name} {...viewPortFadeIn((index + 1) * 0.2)} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                    <benefit.icon className="w-6 h-6"/>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{benefit.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="lg:text-center" {...viewPortFadeIn()}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple Steps to Quality Healthcare Staffing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our streamlined process ensures you get the right professionals for your nursing home with ease.
          </p>
        </motion.div>
        <div className="mt-10">
          <ol className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {[
              {
                step: 1,
                name: "Consultation",
                description: "We discuss your specific needs and requirements for healthcare assistants."
              },
              {
                step: 2,
                name: "Tailored Selection",
                description: "We select suitable candidates from our pool of healthcare professionals for you to interview."
              },
              {
                step: 3,
                name: "Interview",
                description: "You choose top candidates who align perfectly with your requirements."
              },
              {
                step: 4,
                name: "Preparation",
                description: "We manage all necessary documentation, streamlining the hiring process for both you and the selected candidates."
              },
              {
                step: 5,
                name: "Smooth Onboarding",
                description: "Our team in Philippines conducts background checks and facilitates a seamless transition of the candidate to Ireland."
              },
              {
                step: 6,
                name: "Ongoing Partnership",
                description: "Our support continues long after placement to ensure your new hire integrate smoothly into your workplace."
              }
            ].map((step, index) => (
              <motion.div key={step.name} className="relative"{...viewPortFadeIn((index + 1) * 0.2)}>
                <dt>
                  <div className="absolute flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
              </motion.div>
            ))}
          </ol>
        </div>
      </div>
    </section>
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div {...viewPortFadeIn()} className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Learn More
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Ready to elevate your healthcare staffing? We&apos;re here to help.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...viewPortFadeIn(0.2)} className="bg-white text-blue-900 p-8 rounded-xl shadow-2xl">
            <h3 className="text-lg font-bold mb-6">Start Your Journey</h3>
            <ContactForm/>
          </motion.div>
          <motion.div {...viewPortFadeIn(0.4)} className="text-blue-900">
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <p className="flex items-center">
                <Phone className="mr-4 shrink-0 w-5 h-5 text-blue-500"/> +353 085 266 8895
              </p>
              <p className="flex items-center">
                <Mail className="mr-4 shrink-0 w-5 h-5 text-blue-500"/> info@philcare.ie
              </p>
              <div className="flex">
                <MapPin className="mr-4 shrink-0 w-5 h-5 text-blue-500"/>
                <div>
                  <p>Unit 277,</p>
                  <p>Colab,</p>
                  <p>Atlantic Technological University</p>
                  <p>Port Road,</p>
                  <p>Letterkenny, Co.Donegal Ireland, F92 A0PY</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <footer className="bg-blue-900 text-white py-6">
      <div className="flex flex-row justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; 2024 PhilCare Ireland. All rights reserved.</p>
        <div className="flex gap-4 text-white">
          <a href={undefined} className="hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
            </svg>
          </a>
          <a href={undefined} className="hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </>)
}
