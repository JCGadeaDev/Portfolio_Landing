"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Introduction = () => {
  return (
    <section className="z-20 w-full bg-darkBg/60">
      <div className="grid items-center justify-center h-full max-w-7xl px-4 py-16 mx-auto md:grid-cols-2 gap-8 lg:gap-16">
        {/* Imagen con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/home-4.png"
            priority
            width={400}
            height={400}
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
            alt="Foto de perfil del desarrollador"
          />
        </motion.div>

        {/* Contenido textual con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <h1 className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Si puedes pensarlo, <br />
            <AnimatedText />
          </h1>

          <p className="mb-6 text-lg sm:text-xl">
            Frontend Developer, me especializo en transformar ideas en
            experiencias digitales excepcionales. Líder de Proyectos mediante
            metodologías ágiles como Scrum y Kanban.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="/projects"
              className="px-4 py-2 text-sm font-medium border-2 border-secondary rounded-xl hover:shadow-lg hover:shadow-white/50 transition-all"
            >
              Ver Proyectos
            </a>
            <a
              href="/contact"
              className="px-4 py-2 text-sm font-medium border-2 border-secondary rounded-xl hover:shadow-lg hover:shadow-secondary transition-all"
            >
              Contacta Conmigo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;