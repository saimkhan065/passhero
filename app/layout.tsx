import type { Metadata } from "next";
import { ChildrenProps } from "@/utils/Types";
import AuthProvider from "@/utils/AuthProvider";

export const metadata: Metadata = {};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
