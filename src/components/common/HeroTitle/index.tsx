import React from "react";
export default function HeroTitle({ title, subtitle }: IHeroTitleProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto h-48 sm:px-4 lg:px-0">
        <h1 className="text-4xl md:text-7xl font-bold py-20 text-center md:text-left">
          {title}
        </h1>
      </div>

      <div className="-mt-20 sm:-mt-20 md:-mt-10 sm:px-4 lg:px-0">
        <div className="text-container max-w-6xl mx-auto text-center sm:text-center md:text-start lg:text-start">
          <p
            className="leading-loose text-xl md:text-3xl font-normal"
            style={{ lineHeight: "3rem" }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
}
