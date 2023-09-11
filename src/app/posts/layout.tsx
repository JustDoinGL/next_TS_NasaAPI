import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo",
  description: "Todo placeholder JSON",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {children}
    </>
  );
}
