import type { Metadata } from "next";
import "./globals.css";
import { PageHeader } from "./components/PageHeader";

export const metadata: Metadata = {
  title: "회원가입",
  description: "FE 과제 회원가입 페이지입니다.  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <PageHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
