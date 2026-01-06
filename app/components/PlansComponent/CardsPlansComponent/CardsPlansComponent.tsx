"use client";

import { ButtonInfoComponent } from "@/app/shared/components/ButtonInfoComponent/ButtonInfoComponent";
import { Plans } from "../interfaces/PlansResponset.interface";
import { motion, Variants } from "motion/react";

interface CardsPlansComponentProps {
  plans: Plans[];
}

export function CardsPlansComponent({ plans }: CardsPlansComponentProps) {
  const svgPlanBasic = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-zap w-6 h-6"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
    </svg>
  );

  const svgPlanPro = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-star w-6 h-6"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
  
  const svgPlanEnterprise = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-building-2 w-6 h-6"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
      <path d="M10 6h4"></path>
      <path d="M10 10h4"></path>
      <path d="M10 14h4"></path>
      <path d="M10 18h4"></path>
    </svg>
  );

  const checkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check w-3 h-3 text-black"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );

  const getIcon = (name: string) => {
    if (name.toLowerCase().includes("básico")) return svgPlanBasic;
    if (name.toLowerCase().includes("profesional")) return svgPlanPro;
    if (name.toLowerCase().includes("negocio")) return svgPlanEnterprise;
    return svgPlanBasic;
  };

  const isHighlight = (name: string) => name.toLowerCase().includes("profesional");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="flex justify-center items-center flex-col gap-4 w-full px-4">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {plans.map((plan, index) => {
          const highlight = isHighlight(plan.name);
          const icon = getIcon(plan.name);
          const features = plan.benefits ? plan.benefits.split(",").map(f => f.trim()) : [];

          return (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl flex flex-col gap-6 bg-[#0E0E11] border ${
                highlight
                  ? "border-neon shadow-[0_0_20px_rgba(163,230,53,0.2)]"
                  : "border-white/10"
              }`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Más popular
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                  {icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">
                  {plan.pricing}
                </span>
                <span className="text-gray-400">MXN/mes</span>
              </div>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  highlight
                    ? "bg-button-primary text-white hover:opacity-90 shadow-lg shadow-button-primary/25"
                    : "bg-transparent border border-white/20 text-white hover:border-white/40"
                }`}
              >
                Comenzar Ahora
              </button>

              <div className="flex flex-col gap-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        highlight ? "bg-neon" : "bg-button-primary"
                      }`}
                    >
                      {checkIcon}
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ButtonInfoComponent
          text={
            <>
              <span className="font-bold text-white">
                Mensajes adicionales:
              </span>{" "}
              $0.40 MXN/mensaje, para que siempre estés cubierto.
            </>
          }
          icon={"💡"}
        />
      </motion.div>
    </section>
  );
}
