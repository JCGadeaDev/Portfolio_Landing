"use client";

import { dataAboutPage } from "@/data";
import { motion } from "framer-motion";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
        <div className="-my-6">
          {dataAboutPage.map((data) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: data.id * 0.1 }}
              className="relative py-6 pl-8 sm:pl-32 group"
            >
              {/* Punto y línea */}
              <div className="absolute left-2 sm:left-0 h-full px-px bg-slate-300 sm:ml-[6.5rem] -translate-x-1/2" />
              <div className="absolute left-2 sm:left-0 w-2 h-2 bg-indigo-600 border-4 border-slate-50 rounded-full sm:ml-[6.5rem] -translate-x-1/2 translate-y-1.5" />

              {/* Contenido */}
              <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>
              <div className="flex flex-col sm:flex-row items-start mb-1">
                <time className="sm:absolute left-0 inline-flex items-center justify-center w-20 h-6 mb-3 text-xs font-semibold text-emerald-600 uppercase bg-emerald-100 rounded-full sm:mb-0">
                  {data.date}
                </time>
                <div className="text-xl font-bold text-gray-400">
                  {data.subtitle}
                </div>
              </div>
              <div className="text-slate-400 max-w-md">{data.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;

