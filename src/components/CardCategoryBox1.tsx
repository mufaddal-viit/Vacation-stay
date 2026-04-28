import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import Badge from "@/shared/Badge";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";

export interface CardCategoryBox1Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategoryBox1: FC<CardCategoryBox1Props> = ({
  className = "",
  taxonomy,
}) => {
  const { count, name, thumbnail, href = "/" } = taxonomy;

  return (
    <Link
      href={href}
      className={`
        group relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl
        bg-white/60 dark:bg-white/5
        backdrop-blur-xl
        border border-white/30 dark:border-white/10
        shadow-lg hover:shadow-2xl
        transition-all duration-500 ease-out
        hover:-translate-y-1 hover:scale-[1.02]
        ${className}
      `}
    >
      {/* Badge */}
      <div className="absolute top-3 right-3">
        <Badge
          color="gray"
          name={convertNumbThousand(count)}
          className="backdrop-blur-md bg-white/70 dark:bg-white/10 border border-white/30 text-xs dark:text-white"
        />
      </div>

      {/* Image */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl overflow-hidden">
        <Image
          src={thumbnail || ""}
          alt={name}
          fill
          sizes="(max-width: 400px) 100vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h2 className="text-base font-semibold text-neutral-800 dark:text-white">
          <span className="line-clamp-1">{name}</span>
        </h2>

        <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Check out more here
        </span>
      </div>

      {/* Glow hover effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-xl" />
      </div>
    </Link>
  );
};
export default CardCategoryBox1;
