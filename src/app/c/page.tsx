"use client"
import React, {useState} from "react"
import {motion} from "framer-motion"
import {Search, Star} from "lucide-react"

const candidatesData = [
  {id: 1, name: "Maria Santos", role: "Registered Nurse", experience: "5 years", specialties: ["Geriatric Care", "Wound Management"], rating: 4.8, image: "/placeholder/400/400"},
  {id: 2, name: "Juan Dela Cruz", role: "Healthcare Assistant", experience: "3 years", specialties: ["Dementia Care", "Mobility Assistance"], rating: 4.5, image: "/placeholder/400/400"},
  {id: 3, name: "Elena Reyes", role: "Registered Nurse", experience: "7 years", specialties: ["Critical Care", "Pediatrics"], rating: 4.9, image: "/placeholder/400/400"},
  {id: 4, name: "Carlos Mendoza", role: "Healthcare Assistant", experience: "4 years", specialties: ["Elderly Care", "Rehabilitation Support"], rating: 4.7, image: "/placeholder/400/400"},
  {id: 5, name: "Sofia Lim", role: "Registered Nurse", experience: "6 years", specialties: ["Oncology", "Palliative Care"], rating: 4.8, image: "/placeholder/400/400"},
  {id: 6, name: "Ramon Bautista", role: "Healthcare Assistant", experience: "2 years", specialties: ["Mental Health Support", "Personal Care"], rating: 4.4, image: "/placeholder/400/400"}
]

const CandidatePage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("")

  const filteredCandidates = candidatesData.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterRole === "" || candidate.role === filterRole)
  )

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Exceptional Candidates</h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Discover highly skilled and compassionate healthcare professionals from the Philippines,
            ready to bring their expertise and dedication to Irish nursing homes.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search candidates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pr-10 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5"/>
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="w-full md:w-64 p-3 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
          >
            <option value="">All Roles</option>
            <option value="Registered Nurse">Registered Nurse</option>
            <option value="Healthcare Assistant">Healthcare Assistant</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCandidates.map((candidate) => (
            <motion.div
              key={candidate.id}
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.3}}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={candidate.image} alt={candidate.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{candidate.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{candidate.role}</p>
                <p className="text-gray-600 mb-4">Experience: {candidate.experience}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {candidate.specialties.map((specialty, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1"/>
                    <span className="font-semibold text-gray-700">{candidate.rating}</span>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CandidatePage
