import Header from "@/components/home/Header";
import Header2 from "@/components/home/SearchArea";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import OnTheMarketFilters from "@/components/home/OnTheMarketFilters";
import Wishlist from "@/components/home/Wishlist";

export default function Home() {
  return (
    <div>
      <Header />
      <Header2 />
      <Hero />
      <OnTheMarketFilters />
      <Wishlist />
      <Footer />
    </div>
  );
}
