"use client"
import React from "react"
import {motion} from "framer-motion"
import {BookOpen, Briefcase, Building, Globe, HandCoins, HandHelping, Heart, Home as HomeIcon, Mail, MapPin, Phone, Scale, Users, Workflow} from "lucide-react"
import {CheckBadgeIcon} from "@heroicons/react/16/solid"
import {ContactForm} from "@/app/form"
import {Image} from "@/components/ui/image"
import {LeafletMap} from "@/components/map"
import {CallToActionButton} from "@/components/ui/call-to-action-button"
import {viewPortFadeIn} from "@/components/generic"


export default function Home() {
  return (<>
    <header className="min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-4rem)] flex relative overflow-hidden">
      <Image src="/07b276ed-052b-4985-af7d-cfd64180e361_0.png" alt="hero" priority/>
      <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 lg:via-blue-500/40 to-blue-500/75 lg:to-transparent" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}/>
      <div className="flex flex-col gap-4 px-20 md:pt-20 py-14 md:pb-80 relative z-10 justify-center items-center text-center lg:justify-normal lg:items-start lg:text-left lg:max-w-2xl">
        <motion.p {...viewPortFadeIn()} whileHover={{boxShadow: "0px 0px 8px rgb(255,255,255)"}}
          className="flex items-center gap-1 bg-yellow-300 text-blue-900 px-2 py-0.5 text-xs rounded-full font-medium transition-shadow duration-300 shadow-lg -mx-20 md:mx-0">
          <CheckBadgeIcon className="inline w-3.5 h-3.5"/><span className="font-extrabold">Free Introductory Offer</span> for limited time!
        </motion.p>
        <motion.h1 {...viewPortFadeIn(0.2)}
          className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl [text-shadow:0_1px_1px_rgb(0_0_0_/_50%)]">
          <span className="block">Quality Healthcare</span>{" "}
          <span className="block text-yellow-300">Professionals from the Philippines</span>
        </motion.h1>
        <motion.p {...viewPortFadeIn(0.4)}
          className="text-base text-blue-100 sm:max-w-xl sm:mx-auto md:text-lg lg:mx-0">
          Empowering Irish healthcare facilities and individuals with compassionate and skilled care professionals.
        </motion.p>
        <motion.div {...viewPortFadeIn(0.6)} className="flex flex-col md:flex-row gap-y-8 gap-x-4 w-fit mt-5">
          <CallToActionButton href="/#care-options">Looking for careworkers</CallToActionButton>
          <CallToActionButton href="/candidates/join">Become a careworker</CallToActionButton>
        </motion.div>
      </div>
      <motion.div className="absolute left-0 -bottom-1 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>
    </header>
    <section id="services" className="py-10 bg-white xl:mx-[15vw] xl:rounded-xl xl:shadow-2xl xl:-translate-y-2/3 xl:mb-[-10%]">
      <div className="container mx-auto px-6 flex flex-col gap-10">
        <motion.div className="lg:text-center" {...viewPortFadeIn()}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Bridging Healthcare Gaps
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {icon: Users, title: "Expert Recruitment", description: "We source top-tier healthcare professionals tailored to your specific needs, whether for facilities or individual care."},
            {icon: BookOpen, title: "Rigorous Vetting", description: "Our thorough assessment ensures candidates exceed Irish healthcare standards for both institutional and private care."},
            {icon: Heart, title: "Holistic Support", description: "From visa processing to cultural integration, we provide end-to-end assistance for a smooth transition to Irish healthcare settings."}
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
    <section id="care-options" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div className="lg:text-center mb-12" {...viewPortFadeIn()}>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Care Options</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored Healthcare Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide skilled healthcare professionals for various care settings to meet your unique needs.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="flex items-start md:items-center group"{...viewPortFadeIn(0.2)}>
            <div className="mr-6 p-4 bg-blue-100 rounded-3xl transition-all duration-300 group-hover:bg-blue-500">
              <Building className="w-10 h-10 text-blue-600 transition-all duration-300 group-hover:text-white"/>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Nursing Home Staffing</h3>
              <p className="text-gray-600">Expert healthcare professionals for round-the-clock resident care.</p>
            </div>
          </motion.div>
          <motion.div className="flex items-start md:items-center group"{...viewPortFadeIn(0.4)}>
            <div className="mr-6 p-4 bg-blue-100 rounded-3xl transition-all duration-300 group-hover:bg-blue-500">
              <HomeIcon className="w-10 h-10 text-blue-600 transition-all duration-300 group-hover:text-white"/>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Private Live-in HomeCare</h3>
              <p className="text-gray-600">Personalized care services tailored to individual needs at home.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-6">
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
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
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
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div {...viewPortFadeIn()} className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Contact Us</h2>
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
          <motion.div {...viewPortFadeIn(0.4)} className="text-blue-900 space-y-8">
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <p className="flex items-center gap-8">
                <span className="flex items-center"><Phone className="mr-4 shrink-0 w-5 h-5 text-blue-500"/> +353 085 266 8895</span>
                <span className="flex items-center"><Phone className="mr-4 shrink-0 w-5 h-5 text-blue-500"/> +353 083 305 3416</span>
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
            <LeafletMap className="w-full h-80 shadow rounded-xl overflow-hidden"/>
          </motion.div>
        </div>
      </div>
    </section>
  </>)
}
