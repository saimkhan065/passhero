"use client";
import { SessionProvider } from "next-auth/react";
import { ChildrenProps } from "./Types";

const AuthProvider = ({ children }: ChildrenProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
