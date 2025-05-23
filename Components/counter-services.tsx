"use client";

import CountUp from "react-countup";
import { dataCounter } from "@/data";

const CounterServices = () => {
  return (
    <div className="grid max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6">
      {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => {
        const borderClasses = [
          lineRight && "md:border-e-2 md:border-e-gray-100",
          lineRightMobile && "border-e-2 border-e-gray-100",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div key={id}>
            <div className={`px-4 ${borderClasses}`}>
              <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                + <CountUp end={endCounter} duration={5} />
              </p>
              <p className="text-xs uppercase max-w-[100px]">{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CounterServices;

