import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Oficina() {
  const imagens = [
    "/oficina1.jpg",
    "/oficina2.jpg",
    "/oficina3.jpg",
    "/oficina4.jpg",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="oficina" className="py-16 bg-white px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
        Nossa Oficina
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="rounded-lg shadow-lg"
        >
          {imagens.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Foto da oficina ${i + 1}`}
                className="w-full h-[400px] object-cover rounded-lg cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox (abre em full screen) */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={imagens.map((src) => ({ src }))}
      />
    </section>
  );
}
