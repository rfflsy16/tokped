import "../styles/globals.css";
import "../styles/theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";

export const metadata = {
  title: "Tokopedia",
  description: "Aplikasi e-commerce Tokopedia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("token")?.value || null;
  return (
    <html lang="en">
      <body>
        <Header token={token} />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
