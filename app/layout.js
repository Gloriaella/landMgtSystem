import "./globals.css";
import { Providers } from './globalRedux/Provider'
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "Computerized Land Management System",
  description: "created by Gloriaella",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Providers >
        <Navbar />
        {children}
        <Footer />
      </Providers >
      </body>
    </html>
  );
}
