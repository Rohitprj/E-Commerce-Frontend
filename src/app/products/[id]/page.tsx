"use client";

import Header from "@/components/home/Header";
import SearchArea from "@/components/home/SearchArea";
import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import Image from "next/image";
import { useAuthContext } from "@/context/AuthContext";

// async function getProductById(id: string) {
// try {
//   const res = await axiosInstance.get(`${BASE_URL}/product/productId/${id}`);

//   return res.data;
// } catch (error) {
//   console.error("Product fetch failed:", error);
//   return null;
// }
// }
export default async function page({ params }: { params: { id: string } }) {
  const [accessData, setAccessData] = useState<any>(null);
  const { getProductById } = useAuthContext();

  useEffect(() => {
    async function singleProduct() {
      const product = await getProductById(params.id);
      setAccessData(product);
      console.log("Single product data", product);
    }
    singleProduct();
  }, [params.id, getProductById]);
  console.log("Single prod", accessData);

  return (
    <div>
      <Header />
      <SearchArea />
      <div className="flex border-b-1 py-6 px-26">
        <div
          className="flex items-center bg-pink-400 text-black px-4 py-1 font-medium w-fit"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 0 0)",
          }}
        >
          <MdCurrencyRupee />
          20000
        </div>
        <div>product name</div>
        <div>Ratings</div>
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

      <div className="border-1 mx-24 my-12">
        {/* <Image src={item.image} alt={item.name} /> */}
      </div>
    </div>
  );
}

// import { use } from "react"; // optional if you're using async/await
// import { notFound } from "next/navigation";

// async function getProduct(id: string) {
//   // Fetch from your API or DB
//   const res = await fetch(`https://yourapi.com/products/${id}`);
//   if (!res.ok) return null;
//   return res.json();
// }

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const product = await getProduct(params.id);

//   if (!product) return notFound();

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>
//     </div>
//   );
// }
