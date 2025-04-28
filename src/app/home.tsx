import Header from "@/components/home/Header";
import Header2 from "@/components/home/SearchArea";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import OnTheMarket from "@/components/home/OnTheMarket";

export default function Home() {
  return (
    <div>
      <Header />
      <Header2 />
      <Hero />
      <OnTheMarket />
      <Footer />
    </div>
  );
}
