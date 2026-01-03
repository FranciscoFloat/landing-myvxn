"use client";

import { ButtonInfoComponent } from "@/app/shared/components/ButtonInfoComponent/ButtonInfoComponent";
import { CardsPlansComponent } from "./CardsPlansComponent/CardsPlansComponent";
import { motion, Variants } from "motion/react";

export function PlansComponent() {
  const svgButton = (
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
      className="lucide lucide-star w-4 h-4"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
    </svg>
  );
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <section className="flex items-center justify-center flex-col bg-[#08080a] overflow-hidden">
        <motion.div
          className="flex flex-col items-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <ButtonInfoComponent text="Planes y Precios" svg={svgButton} />
          </motion.div>
          <motion.h2 
            className=" sm:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-tight  "
            variants={itemVariants}
          >
            Elige el plan <span className="text-gradient">perfecto para ti</span>
          </motion.h2>
          <motion.p 
            className="  lg:text-lg xl:text-xl font-medium leading-relaxed mb-12 w-[30%] text-center text-zinc-400"
            variants={itemVariants}
          >
            Todos los planes incluyen configuración guiada y soporte técnico.
            Escala cuando lo necesites.
          </motion.p>
          
          <motion.div variants={itemVariants} className="w-full">
            <CardsPlansComponent />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
