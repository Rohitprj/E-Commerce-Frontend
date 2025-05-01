import SearchArea from "@/components/home/SearchArea";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/home/Hero";
import OnTheMarketFilters from "@/components/home/OnTheMarketFilters";
import Wishlist from "@/components/home/Wishlist";
import Header from "@/components/home/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchArea />
      <Hero />
      <OnTheMarketFilters />
      <Wishlist />
      <Footer />
    </div>
  );
}
