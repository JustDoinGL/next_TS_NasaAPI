import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Posts placeholder JSON",
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
