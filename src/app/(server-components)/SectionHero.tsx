import React, { FC } from "react";
import imagePng1 from "@/images/vacation/image.png";
import imagePng2 from "@/images/vacation/jairph-1XLyzi17Z2M-unsplash (1).jpg";
import imagePng3 from "@/images/vacation/ice.jpg";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image, { StaticImageData } from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}
const url = [imagePng1, imagePng2, imagePng3];

type HeroImageProps = {
  url: StaticImageData[];
};

function HeroImage({ url }: HeroImageProps) {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div className="overflow-hidden shadow-xl rounded-tl-3xl rounded-br-3xl">
            <Image
              src={url[0]}
              alt="hero main"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              priority
            />
          </div>

          <div className="overflow-hidden shadow-md rounded-tl-3xl rounded-br-3xl">
            <Image
              src={url[2]}
              alt="hero secondary"
              className="w-full object-cover hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="overflow-hidden shadow-2xl rounded-tl-3xl rounded-br-3xl">
            <Image
              src={url[1]}
              alt="hero highlight"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>
    </div>
  );
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Hotel, Travels & experiences
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Accompanying us, you have a trip full of experiences. Enjoy little
            moments together
          </span>
          <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
            Search Here
          </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <HeroImage url={url} />
        </div>
      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
