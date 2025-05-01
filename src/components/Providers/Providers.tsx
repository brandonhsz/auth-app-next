"use client";

import { queryClient } from "@/lib/api/api";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
