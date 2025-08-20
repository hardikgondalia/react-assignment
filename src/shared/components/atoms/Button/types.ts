import React from "react";

export type BasicButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};
