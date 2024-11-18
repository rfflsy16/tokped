import "./styles/globals.css";
import "./styles/theme.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Tokopedia",
  description: "Aplikasi e-commerce mirip Tokopedia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
