import React from "react";
import { cn } from "@site/src/lib/utils";

export default function Button({ size = "md", variant = "primary", children }) {
  const baseClass =
    "text-3 text-white dark:text-black bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-gray-200 px-7 h-7.7 rounded-button";

  let variantClass = "";

  switch (variant) {
    case "primary":
      variantClass = "";
      break;
    case "outline":
      variantClass =
        "text-current bg-transparent dark:bg-transparent dark:text-current hover:bg-gray-100 dark:hover:bg-transparent border border-primary";
      break;
    default:
      variantClass = "";
  }

  return <button className={cn(baseClass, variantClass)}>{children}</button>;
}
