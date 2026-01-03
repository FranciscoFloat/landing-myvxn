"use client";

import { ButtonInfoComponent } from "@/app/shared/components/ButtonInfoComponent/ButtonInfoComponent";
import { ConfigPanelComponent } from "./ConfigPanelComponent";
import { motion, Variants } from "motion/react";

export function TutienesControlComponent() {
  const svgWordsIli = (
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
      className="lucide lucide-message-square w-6 h-6"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
  const flujosPerso = (
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
      className="lucide lucide-settings2 w-6 h-6"
    >
      <path d="M20 7h-9"></path>
      <path d="M14 17H5"></path>
      <circle cx="17" cy="17" r="3"></circle>
      <circle cx="7" cy="7" r="3"></circle>
    </svg>
  );
  const ResponseDyna = (
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
      className="lucide lucide-sparkles w-6 h-6"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
      <path d="M20 3v4"></path>
      <path d="M22 5h-4"></path>
      <path d="M4 17v2"></path>
      <path d="M5 18H3"></path>
    </svg>
  );

  const cards = [
    {
      svg: svgWordsIli,
      title: "Palabras Clave Ilimitadas",
      text: "Define tantas palabras clave como necesites para cubrir todas las consultas de tus clientes.",
    },
    {
      svg: flujosPerso,
      title: "Flujos Personalizados",
      text: "Crea conversaciones completas con múltiples pasos y opciones interactivas.",
    },
    {
      svg: ResponseDyna,
      title: "Respuestas Dinámicas",
      text: "Incluye variables, emojis y formatos ricos para respuestas más atractivas.",
    },
  ];

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
      className="lucide lucide-settings2 w-4 h-4"
    >
      <path d="M20 7h-9"></path>
      <path d="M14 17H5"></path>
      <circle cx="17" cy="17" r="3"></circle>
      <circle cx="7" cy="7" r="3"></circle>
    </svg>
  );
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <section className="flex items-center justify-center flex-col bg-background-secondary overflow-hidden">
        <motion.div
          className="flex flex-col items-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <ButtonInfoComponent text="100% Configurable" svg={svgButton} />
          </motion.div>
          <motion.h2 
            className=" sm:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-tight  "
            variants={itemVariants}
          >
            Tú tienes el <span className="text-gradient">control total</span>
          </motion.h2>
          <motion.p 
            className="  lg:text-lg xl:text-xl font-medium leading-relaxed mb-12 w-[30%] text-center text-zinc-400"
            variants={itemVariants}
          >
            Define exactamente cómo responde tu asistente. Personaliza cada
            mensaje según las necesidades de tu negocio.
          </motion.p>
          <motion.div 
            className="w-full mt-2"
            variants={itemVariants}
          >
            <ConfigPanelComponent />
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl px-4 "
            variants={containerVariants}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl border border-transparent hover:border-button-primary/30 transition-all group "
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-2xl bg-button-primary/20 flex items-center justify-center text-button-primary mb-4 group-hover:bg-button-primary group-hover:text-white transition-colors group-hover:glow-button ">
                  {card.svg}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
