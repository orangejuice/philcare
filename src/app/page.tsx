"use client"
import React from "react"
import {motion, Variants} from "framer-motion"
import {BookOpen, Briefcase, Globe, HandCoins, HandHelping, Heart, Mail, MapPin, Phone, Scale, Users, Workflow} from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import {CheckBadgeIcon} from "@heroicons/react/16/solid"

export default function Home() {
  const fadeIn: Variants = {hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}

  return (
    <div className="font-sans">
      <Navigation/>
      <header className="min-h-[calc(100vh-4rem)] flex relative overflow-hidden">
        <Image fill src="/07b276ed-052b-4985-af7d-cfd64180e361_0.png" className="w-full object-cover" alt="hero"/>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 lg:via-blue-500/40 to-blue-500/75 lg:to-transparent"/>
        <div className="flex flex-col gap-4 px-20 py-40 relative z-10 justify-evenly items-center text-center lg:justify-normal lg:items-start lg:text-left lg:max-w-2xl">
          <motion.p whileHover={{boxShadow: "0px 0px 8px rgb(255,255,255)"}}
            className="flex items-center gap-1 bg-yellow-300 text-blue-900 px-2 py-0.5 text-xs rounded-full font-medium hover:bg-yellow-300 transition duration-300 shadow-lg">
            <CheckBadgeIcon className="inline w-3.5 h-3.5"/><span className="font-extrabold">Free</span> introductory offer for limited time only!
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn} transition={{duration: 0.6}}
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl">
            <span className="block">Quality Healthcare</span>{" "}
            <span className="block text-yellow-300">Professionals from the Philippines</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{duration: 0.6, delay: 0.2}}
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
          <motion.div className="lg:text-center" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Do</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Bridging Healthcare Gaps
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {icon: Users, title: "Expert Recruitment", description: "We source top-tier healthcare professionals tailored to your specific needs."},
              {icon: BookOpen, title: "Rigorous Vetting", description: "Our thorough assessment ensures candidates exceed Irish healthcare standards."},
              {icon: Heart, title: "Holistic Support", description: "From visa processing to cultural integration, we provide end-to-end assistance."}
            ].map((service, index) => (
              <motion.div key={service.title} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: index * 0.2}}>
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
          <motion.div
            className="lg:text-center"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
          >
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
                <motion.div
                  key={benefit.name}
                  className="relative"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, delay: index * 0.1}}
                >
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
          <motion.div className="lg:text-center" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple Steps to Quality Healthcare Staffing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our streamlined process ensures you get the right professionals for your nursing home with ease.
            </p>
          </motion.div>
          <div className="mt-10">
            <ol className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {[
                {
                  step: 1,
                  name: "Consultation",
                  description: "We discuss your specific needs and requirements."
                },
                {
                  step: 2,
                  name: "Matching",
                  description: "We select suitable candidates from our pool of professionals."
                },
                {
                  step: 3,
                  name: "Introduction",
                  description: "You interview and select your preferred candidates."
                },
                {
                  step: 4,
                  name: "Onboarding",
                  description: "We handle paperwork and prepare the selected professionals for their new role."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.name}
                  className="relative"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, delay: index * 0.2}}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
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
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-bold mb-16 text-center text-blue-900"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Let&apos;s Connect
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{delay: 0.2}}
              className="bg-white text-blue-900 p-8 rounded-xl shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-6">Start Your Journey</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input type="email" id="email" className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">Nursing Home Name</label>
                  <input type="text" id="organization" className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea id="message" rows={4} className="w-full p-3 rounded bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-md"
                  whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)"}}
                  whileTap={{scale: 0.95}}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{delay: 0.4}}
              className="flex flex-col justify-between text-blue-900"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <p className="flex items-center text-xl">
                    <Phone className="mr-4 w-8 h-8 text-blue-500"/> +353 1 234 5678
                  </p>
                  <p className="flex items-center text-xl">
                    <Mail className="mr-4 w-8 h-8 text-blue-500"/> info@philcareireland.com
                  </p>
                  <p className="flex items-center text-xl">
                    <MapPin className="mr-4 w-8 h-8 text-blue-500"/> 123 Healthcare Street, Dublin, Ireland
                  </p>
                </div>
              </div>
              <motion.div
                className="mt-12 p-6 bg-blue-800 rounded-xl shadow-lg text-white"
                whileHover={{scale: 1.05}}
              >
                <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Workforce?</h4>
                <p className="mb-4">Book a free consultation with our experts today.</p>
                <motion.button
                  className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition duration-300"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                >
                  Schedule Consultation
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">PhilCare Ireland</h3>
              <p className="mb-4">Bridging healthcare across continents, empowering Irish nursing homes with exceptional Filipino talent.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Home</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Our Services</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Testimonials</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Newsletter</h4>
              <p className="mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow p-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                <button type="submit" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-r-full font-bold hover:bg-yellow-300 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center">
            <p>&copy; 2024 PhilCare Ireland. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
