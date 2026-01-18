import Image from "next/image";

interface IHeroTitleProps {
  title: string;
  subtitle: string;
}

export default function HeroTitle({ title, subtitle }: IHeroTitleProps) {
  return (
    <div className="mb-12">
      <div className="flex place-items-center space-x-2 justify-center items-center h-48">
        <div className="lg:h-24 lg:w-24 h-10 w-10 md:h-24 md:w-24">
          <Image src="/quran.png" width={200} height={200} alt="Al-Quran" />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold py-20 text-center text-default-800">
          {title}
        </h1>
      </div>

      <div className="text-neutral-800 sm:px-4 lg:px-0 -mt-16 md:-mt-4 lg:-mt-4 text-pretty mx-auto text-center">
        <div className="text-container max-w-6xl mx-auto">
          <p className="leading-loose text-xl md:text-3xl font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
