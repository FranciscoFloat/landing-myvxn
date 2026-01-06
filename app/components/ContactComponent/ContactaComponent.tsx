"use client";

import { motion, Variants } from "motion/react";
import { ButtonInfoComponent } from "@/app/shared/components/ButtonInfoComponent/ButtonInfoComponent";

export default function ContactComponent() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const svgContact = (
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
      className="lucide lucide-message-circle w-4 h-4"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
    </svg>
  );

  const svgEmail = (
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
      className="w-6 h-6 text-button-primary"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  const svgPhone = (
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
      className="w-6 h-6 text-button-primary"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const svgMap = (
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
      className="w-6 h-6 text-button-primary"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const contactInfo = [
    {
      icon: svgEmail,
      label: "Email",
      value: "hola@myvixen.mx",
    },
    {
      icon: svgPhone,
      label: "Teléfono",
      value: "+52 55 1234 5678",
    },
    {
      icon: svgMap,
      label: "Ubicación",
      value: "Ciudad de México, MX",
    },
  ];

  return (
    <section className="flex items-center justify-center py-20 px-4 w-full bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl">
        {/* Left Column */}
        <motion.div
          className="flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <ButtonInfoComponent text="Contacto" svg={svgContact} />
          </motion.div>
          
          <motion.h3
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 mt-4 text-white"
            variants={itemVariants}
          >
            ¿Listo para <br />
            <span className="text-gradient">automatizar?</span>
          </motion.h3>
          
          <motion.p
            className="text-lg text-zinc-400 font-medium leading-relaxed mb-12 max-w-xl"
            variants={itemVariants}
          >
            Envíanos un mensaje y nuestro equipo te contactará en menos de 24
            horas para ayudarte a empezar.
          </motion.p>

          <div className="flex flex-col gap-4 w-full max-w-md">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#141417] border border-white/5 hover:border-button-primary/30 transition-colors"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-button-primary/10 flex items-center justify-center shrink-0">
                  {info.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-sm font-medium">{info.label}</span>
                  <span className="text-white font-semibold">{info.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="bg-[#141417] p-8 rounded-3xl border border-white/5 w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white font-bold text-sm">Nombre completo *</label>
              <input 
                type="text" 
                placeholder="Tu nombre" 
                data-lpignore="true"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-button-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-bold text-sm">Nombre de tu Negocio *</label>
              <input 
                type="text" 
                placeholder="Ej. Mi Tienda Online" 
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-button-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-bold text-sm">Número de WhatsApp (con código de país) *</label>
              <input 
                type="text" 
                placeholder="+52 55 1234 5678" 
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-button-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-bold text-sm">Correo electrónico *</label>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                data-lpignore="true"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-button-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-bold text-sm">Mensaje (opcional)</label>
              <textarea 
                placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..." 
                rows={4}
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-button-primary transition-colors resize-none"
              ></textarea>
            </div>

            <motion.button
              className="w-full py-4 rounded-xl bg-button-primary text-white font-bold text-lg mt-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(101,103,242,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Consulta
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
