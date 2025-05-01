("");
import { AuthCheck } from "@/Guards";
import React from "react";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthCheck>{children}</AuthCheck>;
}
