import Header from "@/components/Header";
  import Hero from "@/components/Hero";
  import About from "@/components/About";
  import Services from "@/components/Services";
  import Portfolio from "@/components/Portfolio";
  import Products from "@/components/Products";
  import Contact from "@/components/Contact";
  import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
