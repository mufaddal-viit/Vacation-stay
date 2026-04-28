"use client";

import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export interface MenuBarProps {
  className?: string;
  iconClassName?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({
  className = "p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300",
  iconClassName = "h-8 w-8",
}) => {
  return (
    <button
      className={`focus:outline-none flex items-center justify-center ${className}`}
    >
      <Bars3Icon className={iconClassName} />
    </button>
  );
};

export default MenuBar;
