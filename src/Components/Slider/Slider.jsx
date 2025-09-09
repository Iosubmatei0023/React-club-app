import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import PBF_v1 from "../../assets/PBF_v1.jpg";
import PBM_v1 from "../../assets/PBM_v1.jpg";
import PHM_v1 from "../../assets/PHM_v1.jpg";
import PRF_v1 from "../../assets/PRF_v1.jpg";
import PRA_v1 from "../../assets/PRA_v1.jpg";

const slidesData = [
  {
    imgSrc: PBF_v1,
    title: "Baschet feminin",
    description: "Cel mai bun baschet feminin in oras",
    categories: ["sport", "echipa"],
  },
  {
    imgSrc: PBM_v1,
    title: "Baschet masculin",
    description: "Cel mai bun baschet masculin in oras",
    categories: ["sport", "echipa"],
  },
  {
    imgSrc: PHM_v1,
    title: "Handbal masculin",
    description: "Cel mai bun handbal masculin in oras",
    categories: ["sport", "echipa"],
  },
  {
    imgSrc: PRF_v1,
    title: "Rugby feminin",
    description: "Cel mai bun rugby feminin in oras",
    categories: ["sport", "echipa"],
  },
  {
    imgSrc: PRA_v1,
    title: "alergat pentru toti",
    description: "Alergat pentru toti in oras",
    categories: ["sport", "echipa"],
  },
];

export default function Slider() {
  const swiperWrappedRef = useRef(null);
  function adjustMargin() {
    const screenWidth = window.innerWidth;
    if (swiperWrappedRef.current) {
      swiperWrappedRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);
  return (
    <main>
      <div className="container">
        <Swiper
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperWrappedRef.current = swiper.wrappedEl;
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.imgSrc} alt={slide.title} />
              <div className="title">
                <h1>{slide.title}</h1>
              </div>
              <div className="content">
                <div className="text-box">
                  <p>{slide.description}</p>
                </div>
                <div className="footer">
                  <div className="category">
                    {slide.categories.map((category, idx) => (
                      <span key={idx} style={{ "--i": idx + 1 }}>
                        {category};
                      </span>
                    ))}
                  </div>
                  <button>
                    <span className="label">More...</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
