"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type ExampleType = "precio" | "horario" | "ubicación";

const EXAMPLES = {
  precio: {
    keyword: "precio",
    response: "¡Claro! El precio es $299 MXN. ¿Te gustaría hacer tu pedido? 🛒",
    userQuery: "Hola, quisiera saber el precio",
  },
  horario: {
    keyword: "horario",
    response: "Nuestro horario es de Lunes a Viernes 9AM-6PM 🕒",
    userQuery: "Hola, quisiera saber el horario",
  },
  ubicación: {
    keyword: "ubicación",
    response: "Estamos en Av. Principal #123, Centro. ¡Te esperamos! 📍",
    userQuery: "Hola, quisiera saber la ubicación",
  },
};

export function ConfigPanelComponent() {
  const [activeExample, setActiveExample] = useState<ExampleType>("precio");

  const currentData = EXAMPLES[activeExample];

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 font-sans">
      {/* Window Container */}
      <div className="bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
        
        {/* Window Header */}
        <div className="bg-[#27272a] border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
          </div>
          <div className="text-zinc-400 text-xs font-medium absolute left-1/2 -translate-x-1/2">
            Panel de Configuración - My Vixen
          </div>
          <div></div> {/* Spacer for centering */}
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12 space-y-10">
          
          {/* Quick Examples Tabs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-zinc-400 text-sm font-medium">Ejemplos rápidos:</span>
            <div className="flex gap-2">
              {(["precio", "horario", "ubicación"] as ExampleType[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveExample(key)}
                  className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                    activeExample === key
                      ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                      : "bg-[#27272a] text-zinc-400 hover:text-zinc-200 border border-zinc-700/50"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Configuration Flow */}
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            
            {/* Input 1: User says */}
            <div className="space-y-3 w-full lg:flex-1">
              <div className="flex items-center gap-2 text-zinc-200 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Si el cliente dice:
              </div>
              <div className="relative group">
                <AnimatePresence mode="wait">
                  <motion.input 
                    key={activeExample}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    type="text" 
                    value={currentData.keyword}
                    readOnly
                    className="w-full bg-[#0f0f11] border border-zinc-800 rounded-full px-6 py-4 text-zinc-200 text-lg font-medium focus:outline-none focus:border-indigo-500/50 transition-colors shadow-inner"
                  />
                </AnimatePresence>
                 <div className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Arrow Connector */}
            <div className="flex justify-center pt-8 lg:pt-0 transform rotate-90 lg:rotate-0 shrink-0">
               <div className="w-14 h-14 rounded-full bg-[#1e1e24] border border-indigo-500/20 flex items-center justify-center text-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
               </div>
            </div>

            {/* Input 2: Assistant responds */}
            <div className="space-y-3 w-full lg:flex-[1.5]">
              <div className="flex items-center gap-2 text-zinc-200 text-sm font-medium">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"></path>
                 </svg>
                El asistente responde con:
              </div>
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeExample}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full bg-[#0f0f11] border border-zinc-800 rounded-3xl px-6 py-5 text-zinc-300 text-lg font-normal leading-relaxed min-h-[100px] flex items-center shadow-inner"
                  >
                     {currentData.response}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

          <div className="h-px bg-zinc-800/50 w-full"></div>

          {/* Preview Section */}
          <div className="space-y-6">
             <p className="text-zinc-500 text-sm font-medium">Vista previa del chat:</p>
             <div className="border border-zinc-800/50 rounded-3xl p-8 bg-[#0a0a0a] min-h-[220px] flex flex-col justify-center gap-8 relative overflow-hidden">
                
                 {/* Background Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                {/* User Message */}
                <div className="self-start relative z-10">
                   <AnimatePresence mode="wait">
                     <motion.div 
                       key={activeExample}
                       initial={{ opacity: 0, y: 20, scale: 0.95 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       exit={{ opacity: 0, y: -20, scale: 0.95 }}
                       transition={{ duration: 0.3 }}
                       className="bg-[#1e1e22] text-zinc-300 px-6 py-3 rounded-2xl rounded-tl-sm border border-zinc-800 inline-block"
                     >
                        <p className="text-base">
                          {currentData.userQuery.split(currentData.keyword).map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="text-indigo-400 font-semibold">{currentData.keyword}</span>
                            )}
                          </React.Fragment>
                        ))}
                        </p>
                     </motion.div>
                   </AnimatePresence>
                </div>

                {/* Assistant Message */}
                <div className="self-end relative z-10 max-w-[85%]">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeExample}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-3.5 rounded-2xl rounded-tr-sm shadow-[0_4px_20px_rgba(79,70,229,0.3)] inline-block"
                      >
                        <p className="text-base font-medium">{currentData.response}</p>
                      </motion.div>
                    </AnimatePresence>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
