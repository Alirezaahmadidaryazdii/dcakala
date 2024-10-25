"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/swiper-bundle.min.css';
// import required modules
import { Pagination } from "swiper/modules";
// import next component
import Image from "next/image";

const AlbumBilBord = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={"/assets/images/list1Body1.webp"}
          alt="Slide 2"
          layout="responsive"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/list2Body1.webp"}
          alt="Slide 2"
          layout="responsive"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/list3Body1.webp"}
          alt="Slide 2"
          layout="responsive"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/list4Body1.webp"}
          alt="Slide 2"
          layout="responsive"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/images/list5Body1.webp"}
          alt="Slide 2"
          layout="responsive"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default AlbumBilBord;
