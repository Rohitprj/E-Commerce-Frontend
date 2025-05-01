import Footer from "@/components/footer/Footer";
import Footer2 from "@/components/footer/Footer2";
import Header from "@/components/home/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <div className="w-full h-98 bg-red-700">about</div>
      <Footer2 />
      <Footer />
    </div>
  );
}
