"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

function CategoryAndValues() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const categories = [
    {
      id: 1,
      title: "HERRAMIENTAS DC",
      image: "/8.png", 
    },
    {
      id: 2,
      title: "HERRAMIENTAS AC",
      image: "/9.png",
    },
    {
      id: 3,
      title: "ACCESORIOS",
      image: "/6.png",
    },
    {
      id: 4,
      title: "HERRAMIENTAS MANUALES",
      image: "/5.png",
    }
  ]

  const values = [
    {
      id: 1,
      title: "INNOVACIÓN",
      subtitle: "Diseñando el futuro",
      description: "En STRONWELL, la innovación impulsa todo lo que creamos. Combinamos ingeniería avanzada con un diseño práctico para desarrollar herramientas potentes, precisas y confiables adaptadas a las necesidades cambiantes de los profesionales modernos.",
      icon: "🔬"
    },
    {
      id: 2,
      title: "CALIDAD",
      subtitle: "Construidos para durar",
      description: "Desde materiales cuidadosamente seleccionados hasta una fabricación de precisión, cada detalle garantiza durabilidad y un rendimiento constante. Estrictos controles y pruebas aseguran herramientas confiables para el uso diario.",
      icon: "💎"
    },
    {
      id: 3,
      title: "CONFIABILIDAD",
      subtitle: "Confianza en el Rendimiento",
      description: "Entregamos herramientas con un rendimiento constante en condiciones del mundo real. Cada producto cuenta con componentes duraderos y se somete a rigurosas pruebas, lo que garantiza un funcionamiento confiable y precisión en cada tarea.",
      icon: "🤝"
    },
    {
      id: 4,
      title: "SOSTENIBILIDAD",
      subtitle: "Un Futuro más Verde",
      description: "Desarrollamos productos con responsabilidad ambiental. A través de un diseño inteligente, una producción eficiente y un rendimiento duradero, reducimos nuestra huella ecológica ofreciendo soluciones sostenibles.",
      icon: "🌱"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <div ref={sectionRef} className="w-full font-sans">
      {/* Categories Section */}
      <section className="bg-white py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-center mb-12">
            <h2 className="bg-black text-white px-8 py-2 text-xl md:text-2xl font-bold uppercase tracking-wider rounded-sm shadow-md">
              Explora Nuestra Gama Completa
            </h2>
          </div>

          {/* Categories Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants} className="flex flex-col items-center w-full">
                <div className="w-full bg-[#151515] rounded-xl overflow-hidden shadow-2xl border-[3px] border-white transform transition duration-500 hover:scale-[1.03] hover:shadow-3xl group">
                  {/* Top Tab */}
                  <div className="bg-white py-3 text-center border-b border-gray-200 shadow-sm relative z-10 w-[95%] mx-auto mt-2 rounded-t-lg">
                    <h3 className="text-black font-extrabold text-sm md:text-sm uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis px-2">
                      {category.title}
                    </h3>
                  </div>
                  {/* Image area */}
                  <div className="relative h-72 w-full bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col items-center justify-center overflow-hidden">
                    {/* Spotlight effect behind image */}
                    <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ff4f01] opacity-20 blur-[60px] rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] filter contrast-125"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f0f0f0] relative py-20 px-4 md:px-8 border-t border-gray-300 shadow-inner">
        {/* Subtle noise/texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex justify-center mb-16">
            <h2 className="bg-black text-white px-8 py-2 text-xl md:text-2xl font-bold uppercase tracking-wider rounded-sm shadow-md">
              Nuestros Valores Fundamentales
            </h2>
          </div>

          {/* Values Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {values.map((value) => (
              <motion.div key={value.id} variants={itemVariants} className="flex flex-col h-full w-full">
                <div className="w-full bg-[#111111] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[3px] border-white h-full flex flex-col transform transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] group">
                  {/* Top Tab */}
                  <div className="bg-white py-3 text-center shadow-sm relative z-10 w-[95%] mx-auto mt-2 rounded-t-lg">
                    <h3 className="text-black font-extrabold text-sm md:text-sm uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis px-2">
                      {value.title}
                    </h3>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-8 flex flex-col items-center flex-grow text-center relative overflow-hidden">
                    {/* Subtle orange glow on hover */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#ff4f01] opacity-0 blur-[50px] group-hover:opacity-10 transition-opacity duration-500"></div>

                    {/* Icon Circle */}
                    <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center mb-6 bg-gradient-to-br from-gray-800 to-[#111111] shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:border-[#ff4f01] transition-colors duration-300">
                       <span className="text-2xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{value.icon}</span>
                    </div>
                    
                    {/* Subtitle with lines */}
                    <div className="flex items-center justify-center w-full mb-5 opacity-90">
                      <div className="h-[1px] bg-gray-600 flex-grow"></div>
                      <span className="px-3 text-white text-xs md:text-sm font-bold tracking-wider">
                        {value.subtitle}
                      </span>
                      <div className="h-[1px] bg-gray-600 flex-grow"></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CategoryAndValues
