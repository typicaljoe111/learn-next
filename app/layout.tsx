import "@/app/ui/global.css";
import { mulish } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className}`}>{children}</body>
    </html>
  );
}
