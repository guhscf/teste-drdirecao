import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "yet-another-react-lightbox/styles.css";

export default function Galeria() {
  const imagens = [
    { src: "oficina1.jpg", alt: "Direção hidráulica 1" },
    { src: "oficina2.jpg", alt: "Direção hidráulica 2" },
    { src: "oficina3.jpg", alt: "Direção hidráulica 3" },
    { src: "oficina4.jpg", alt: "Direção hidráulica 4" },
    { src: "oficina5.jpg", alt: "Direção hidráulica 5" },
  ];

  const [index, setIndex] = useState(-1);

  return (
    <section
      id="galeria"
      className="py-16 bg-gradient-to-b from-white to-gray-50 text-center px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
        Galeria de Trabalhos
      </h2>

      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {imagens.map((img, i) => (
            <SwiperSlide key={i} className="w-56 md:w-72">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover cursor-pointer"
                onClick={() => setIndex(i)} // abre lightbox
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={imagens}
      />
    </section>
  );
}
