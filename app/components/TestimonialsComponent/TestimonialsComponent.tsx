"use client";

import { ButtonInfoComponent } from "@/app/shared/components/ButtonInfoComponent/ButtonInfoComponent";
import { TestimonialCard } from "@/app/shared/components/TestimonialCard/TestimonialCard";
import { motion, Variants } from "motion/react";

export default function TestimonialsComponent() {
  const svg = (
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
      className="lucide lucide-star w-4 h-4 fill-primary"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const testimonials = [
    {
      quote:
        "¡Increíble! Ahorré horas de trabajo al día con este asistente. Mis clientes obtienen respuestas al instante y puedo enfocarme en lo importante. La configuración es súper sencilla.",
      author: "Ricardo G.",
      role: "Dueño de 'Soluciones Digitales MX'",
    },
    {
      quote:
        "Pasamos de perder ventas por no contestar a tener un flujo constante de pedidos. Es como tener un vendedor extra 24/7. ¡Lo mejor es que yo decido qué decir!",
      author: "Ana P.",
      role: "Fundadora de 'Boutique Artesanal'",
    },
    {
      quote:
        "Para nuestra clínica, la atención rápida es clave. Con este asistente, nuestros pacientes reservan citas y resuelven dudas fuera de horario. La prioridad de soporte en el plan Negocio es invaluable.",
      author: "Dra. Elena R.",
      role: "Directora de 'Clínica Bienestar'",
    },
  ];

  const stats = [
    { value: "500+", label: "Negocios Activos" },
    { value: "1M+", label: "Mensajes Enviados" },
    { value: "99.9%", label: "Uptime Garantizado" },
    { value: "4.9", label: "Calificación Promedio" },
  ];

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
    <section className="flex justify-center items-center flex-col gap-4 w-full px-4 py-20">
      <motion.div
        className="flex flex-col items-center gap-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ButtonInfoComponent text="Testimonios" svg={svg} />
        <h2 className=" sm:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-tight text-center mb-4">
          Lo que dicen nuestros <span className="text-gradient">clientes</span>
        </h2>
        <p className="  lg:text-lg xl:text-xl font-medium leading-relaxed mb-12 w-full max-w-2xl text-center text-zinc-400">
          Empresarios y profesionales que ya transformaron su atención al cliente con
          My Vixen.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={itemVariants} className="h-full">
            <TestimonialCard {...t} />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-[#141417] p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-button-primary/30 transition-all duration-300"
            variants={itemVariants}
          >
            <span className="text-4xl font-bold text-button-primary">
              {stat.value}
            </span>
            <span className="text-zinc-400 font-medium text-center">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
