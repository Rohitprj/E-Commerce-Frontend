"use client";

import Header from "@/components/home/Header";
import SearchArea from "@/components/home/SearchArea";
import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import Image from "next/image";
import { Product, useAuthContext } from "@/context/AuthContext";
import { useParams } from "next/navigation";

// export default function ProductPage({ params }: { params: { id: string } }) {  // This is only valid in Server Components. Since using "use client" and client-side hooks like useState, useEffect, and useAuthContext(), params will not be automatically passed as a prop in this context.
export default function ProductPage() {
  const [data, setData] = useState<Product | null>(null);
  const { getProductById } = useAuthContext();
  const params = useParams();
  useEffect(() => {
    async function singleProduct() {
      if (params?.id) {
        const product = await getProductById(params.id as string);
        setData(product);
        console.log("Single prod", product);
      }
    }
    singleProduct();
  }, [params.id, getProductById]);

  if (!data) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }
  console.log("Page data", data);

  return (
    <div>
      <Header />
      <SearchArea />
      <div className="flex border-b-1 py-6 px-26 justify-between">
        <div
          className="flex items-center bg-pink-400 text-black px-4 py-1 font-medium w-fit"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 0 0)",
          }}
        >
          <MdCurrencyRupee />
          {data.price}
        </div>
        <div>{data.name}</div>
        <div>{data.rating}</div>
        <button
          className="cursor-pointer items-center rounded-sm
            border border-black bg-white px-4 py-2 text-base font-medium transition-all shadow-none
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:-translate-y-2 hover:-translate-x-2
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          Add to cart
        </button>
      </div>

      <div className="border-1 mx-24 my-14 rounded-md">
        <div className="relative w-full h-96">
          <Image src={data.image} alt={data.name} fill className="border-b-1" />
        </div>
        <div>{data.name}</div>
        <div>{data.price}</div>
        <div>{data.brand}</div>
        <div>{data.rating}</div>
      </div>
    </div>
  );
}
