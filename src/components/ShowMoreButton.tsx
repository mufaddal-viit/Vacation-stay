"use client";

import { useState } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";

export default function ShowMoreButton() {
  const [label, setLabel] = useState("Show me more");

  const handleClick = () => {
    setLabel("Not working");
    setTimeout(() => setLabel("Show me more"), 3000);
  };

  return <ButtonPrimary onClick={handleClick}>{label}</ButtonPrimary>;
}
