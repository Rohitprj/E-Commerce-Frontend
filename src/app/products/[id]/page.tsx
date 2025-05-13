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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel
              voluptas earum dolorem nobis ab eius odit natus animi amet quam
              explicabo cumque incidunt, consectetur laudantium odio similique
              dicta esse voluptate ipsum doloribus repellendus recusandae? Illum
              cupiditate accusamus ipsa, corrupti numquam dolorem distinctio
              eaque iste consectetur, laborum consequuntur natus aliquid!
              Officiis ex sed ut alias cupiditate nam ipsam. Recusandae eius
              fugiat magni odio itaque illum iste repellendus deserunt, at quod
              mollitia ad culpa earum! Provident earum cumque incidunt
              necessitatibus corrupti illo temporibus. Molestiae magnam
              explicabo perferendis qui reprehenderit, id laudantium quos
              reiciendis iure. Voluptas officiis dolor ex possimus ducimus
              laudantium, perferendis quae, alias minus, autem doloribus modi?
              Error repellat, molestias aspernatur, voluptate praesentium, ad
              dolor sit adipisci officiis repudiandae ipsam explicabo? Similique
              consectetur, nostrum culpa tempore amet libero provident fugiat
              magni! Commodi ex non consequuntur dolorum quo facilis eligendi
              asperiores voluptate consequatur numquam vero, officiis dolore
              repudiandae harum distinctio veniam unde vel rem incidunt ratione
              quas perferendis beatae! Consequatur corporis eaque commodi ex.
              Incidunt dolore nisi id voluptates corporis. Blanditiis sunt fugit
              natus dolore dolorem numquam sint, maxime exercitationem! Totam
              rerum iure animi reiciendis corporis atque aliquam expedita eaque!
              Magnam incidunt nesciunt perspiciatis beatae rem necessitatibus
              vero nulla voluptas ea modi iusto soluta ipsum dicta ratione,
              asperiores nemo, fuga deserunt, eligendi quis pariatur est? Ea
              illo dolor hic amet dicta ipsum ratione blanditiis minus
              doloremque eos? Corporis possimus commodi nostrum? Veritatis,
              cumque! Magni voluptatem nihil, blanditiis iure aperiam obcaecati
              numquam, doloremque ducimus officiis totam aliquam odit, neque sit
              repudiandae praesentium doloribus officia dignissimos cum quasi.
              Dolores voluptatibus ducimus esse illo dolore ut voluptas fugiat,
              fugit ipsa eligendi hic dignissimos inventore consequatur
              repellendus unde enim eum natus a tempore alias accusantium aut.
              Culpa possimus odit vero labore repellendus a, sint porro quis
              fuga, harum ea cumque nulla officia tempora ipsa non?
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
