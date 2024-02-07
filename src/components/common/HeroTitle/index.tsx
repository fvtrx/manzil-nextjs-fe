import { IHeroTitleProps } from "@src/types";
import React from "react";
export default function HeroTitle({ title, subtitle }: IHeroTitleProps) {
  return (
    <div>
      <div className="max-w-6xl mx-auto h-48 sm:px-4 lg:px-0">
        <h1 className="text-4xl md:text-7xl font-bold py-20 text-center text-default-800">
          {title}
        </h1>
      </div>

      <div className="text-gray-300 sm:px-4 lg:px-0 -mt-16 md:-mt-4 lg:-mt-4 text-pretty mx-auto text-center">
        <div className="text-container max-w-6xl mx-auto">
          <p className="leading-loose text-xl md:text-3xl font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
