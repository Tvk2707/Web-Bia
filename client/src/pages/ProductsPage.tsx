import { useEffect } from "react";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1 pt-24">
        <Products />
      </main>
      <Footer />
    </div>
  );
}
