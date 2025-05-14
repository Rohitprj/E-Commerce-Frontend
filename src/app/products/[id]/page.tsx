"use client";

import Header from "@/components/home/Header";
import SearchArea from "@/components/home/SearchArea";
import React, { useEffect, useState } from "react";
import { MdCurrencyRupee, MdLink } from "react-icons/md";
import Image from "next/image";
import { Product, useAuthContext } from "@/context/AuthContext";
import { useParams } from "next/navigation";
import StarRating from "../../../../utils/StarRatings";

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
        <div className="flex items-center gap-5">
          <div
            className="flex items-center bg-pink-400 text-black px-4 py-1 font-medium w-fit"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 0 0)",
            }}
          >
            <MdCurrencyRupee />
            {data.price}
          </div>
          <div className="text-lg font-semibold">{data.name}</div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex font-medium items-center gap-2">
            <StarRating rating={data.rating} />
            <span>{data.rating} rating</span>
          </div>
          <button
            className="cursor-pointer items-center rounded-sm
          border border-black bg-pink-400 px-4 py-2 text-base font-medium transition-all shadow-none
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:-translate-y-2 hover:-translate-x-2
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className="border-1 mx-24 my-14 rounded-md overflow-hidden">
        <div className="relative w-full h-128 border-b-1">
          <Image src={data.image} alt={data.name} unoptimized fill />
        </div>
        <div className="flex">
          <div className="w-[67%] border-r-1">
            <div className="text-4xl border-b-1 p-7">{data.name}</div>
            <div className="flex border-b-1">
              <div className="border-r-1 p-5">
                <div
                  className="flex items-center bg-pink-400 text-black px-4 py-1 font-medium w-fit"
                  style={{
                    clipPath:
                      "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 0 0)",
                  }}
                >
                  <MdCurrencyRupee />
                  {data.price}
                </div>
              </div>
              <div className="flex items-center p-5 border-r-1">
                <p className="underline">{data.brand}</p>
              </div>
              <div className="flex items-center p-5 gap-3">
                <StarRating rating={data.rating} />
                <span>{data.rating} rating</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-base font-bold mb-5">DESCRIPTION :</p>
              <p className="font-bold text-xl mb-3">{data.description}</p>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "50px",
                }}
              >
                {data.descriptions.map((descriptions, index) => (
                  <li key={index} className="font-medium">
                    {descriptions}
                  </li>
                ))}
              </ul>
              <div className="border-b-1 my-8" />
              <p className="text-base font-bold mt-5 mb-3 ">FEATURES :</p>
              <ul style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                {data.features.map((feature, index) => (
                  <li key={index} className="font-medium">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="border-b-1 my-8" />
              <p className="text-base font-bold mt-5 mb-3">
                TERMS AND SERVICES :
              </p>
              <ul style={{ listStyleType: "disc", paddingLeft: "50px" }}>
                {data.terms_and_services.map((terms, index) => (
                  <li key={index} className="font-medium">
                    {terms}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 w-[33%] h-full border-b-1">
            <button
              className="cursor-pointer items-center rounded-sm 
            border border-black w-full py-3 bg-pink-400 text-base font-medium transition-all shadow-none
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:-translate-y-2 hover:-translate-x-2
            active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Add to cart
            </button>
            <div className="flex items-center gap-2 mt-5">
              <button
                className="cursor-pointer items-center rounded-sm 
            border border-black w-[83%] py-3 text-base font-medium transition-all shadow-none"
              >
                Add to wishlist
              </button>
              <button
                className="flex justify-center items-center cursor-pointer rounded-sm 
                border border-black w-[17%] py-2 text-base font-medium transition-all shadow-none"
              >
                <MdLink size={30} />
              </button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <p>No refunds allowed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
