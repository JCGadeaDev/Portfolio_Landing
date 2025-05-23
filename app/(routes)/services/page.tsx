"use client";

import AvatarServices from "@/Components/avatar-services";
import CircleImage from "@/Components/circle-image";
import SliderServices from "@/Components/slider-services";
import TransitionPage from "@/Components/transition-page";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />

      <section className="max-w-7xl px-4 py-16 mx-auto">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Texto descriptivo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-semibold text-center md:text-left md:text-4xl">
              Mis <span className="font-bold text-secondary">servicios.</span>
            </h1>

            <p className="text-base leading-relaxed text-gray-300 text-justify">
              Conocimientos en redes, programación, bases de datos, arquitectura
              de máquinas y sistemas operativos. Experiencia en Desarrollo Web
              Front-End, manejando tecnologías como HTML, CSS, Tailwind,
              Bootstrap, JavaScript, TypeScript, SQL, Angular y React. <br /><br />
              Experiencia en Cloud Computing con AWS y me estoy adentrando en el
              campo de la Ciencia de Datos. He desempeñado roles como líder
              técnico, gestionando proyectos de TI, aplicando metodologías
              ágiles como Scrum y Kanban con herramientas como Jira, Trello y
              Asana para la gestión de tareas.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="/contact"
                className="px-5 py-2 text-sm font-medium text-white transition-all duration-300 bg-secondary rounded-md hover:bg-secondary/70" >
                Contacta conmigo
              </a>
            </div>
          </motion.div>

          {/* Slider de servicios */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SliderServices />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

