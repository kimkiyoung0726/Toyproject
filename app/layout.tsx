import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FITTORY | 나에게 맞는 건강 루틴",
  description: "올바른 건강정보와 검증된 건강기능식품으로 만드는 지속 가능한 건강 습관",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
