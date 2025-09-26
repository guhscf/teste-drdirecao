import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Depoimentos() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Link fixo para todas as avaliações no Google Maps
  const googleReviewsUrl =
    "https://www.google.com/maps/place/?q=place_id:ChIJ763r2Qbx3JQRcsR_vqJLWYk";

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("http://localhost:5000/reviews");
        const data = await res.json();

        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (err) {
        console.error("Erro ao carregar reviews:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return (
    <section
      id="depoimentos"
      className="py-16 bg-gradient-to-b from-gray-50 to-white px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
        Avaliações no Google
      </h2>

      {loading ? (
        <p className="text-gray-600 text-center">Carregando avaliações...</p>
      ) : reviews.length > 0 ? (
        <>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000 }}
            className="max-w-6xl mx-auto pb-16"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white border rounded-lg shadow p-4 h-60 flex flex-col justify-between">
                  {/* Cabeçalho: avatar genérico, nome, estrelas */}
                  <div className="flex items-center gap-3">
                    <img
                      src="https://www.svgrepo.com/show/452030/avatar-default.svg"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full border"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        {r.author_name}
                      </p>
                      <div className="flex text-yellow-400 text-sm">
                        {"★".repeat(r.rating)}
                        {"☆".repeat(5 - r.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Texto da avaliação */}
                  <p className="text-gray-700 text-sm mt-3 line-clamp-3">
                    "{r.text}"
                  </p>

                  {/* Rodapé com data */}
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                    <span>
                      {new Date(r.time * 1000).toLocaleDateString("pt-BR")}
                    </span>
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botão geral para todas as reviews */}
          <div className="text-center mt-6">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              Ver todas as avaliações no Google
            </a>
          </div>
        </>
      ) : (
        <p className="text-gray-600 text-center">
          Nenhuma avaliação encontrada.
        </p>
      )}
    </section>
  );
}
