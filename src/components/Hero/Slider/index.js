// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// export default function Slider() {
//   return (
//     <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
//       <Swiper
//         modules={[Pagination, Navigation]}
//         cssMode={true}
//         pagination={{ clickable: true }}
//         navigation={true}
//         loop={true}
//         style={{
//           height: "400px",
//           backgroundColor: "red",
//         }}
//       >
//         <SwiperSlide>
//           <img
//             src="/images/slide1.jpg"
//             alt="Slide 1"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="/images/slide2.jpg"
//             alt="Slide 2"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="/images/slide3.jpg"
//             alt="Slide 3"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
];

export default function CustomSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 2; // scroll by 2 images
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex items-center max-w-4xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="z-10 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70"
      >
        ◀
      </button>

      {/* Slider Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 px-4 py-2 bg-amber-300"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 snap-start">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="z-10 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70"
      >
        ▶
      </button>
    </div>
  );
}
