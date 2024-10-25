"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // اضافه کردن استایل نویگیشن
import "swiper/css/pagination";
import Image from "next/image";

interface typeProps {
  id: number;
  img: string;
}

const SlideBrands = ({ data }: { data: typeProps[] }) => {
  return (
    <div>
      <Swiper
        className="mySwiper border border-primary rounded-[20px] p-20 mb-10"
        dir="rtl"
        // slidesPerView={5}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1, // 1 slide on small screens
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5, // 2 slides on medium screens
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 7, // 3 slides on large screens
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Image
                src={item.img}
                width={50}
                height={50}
                layout="fixed" // تغییر حالت لایوت به fixed
                className="object-cover"
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SlideBrands;
