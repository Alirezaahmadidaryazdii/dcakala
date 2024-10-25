"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";

// Import required modules
import { Navigation } from "swiper/modules";

// Define interface for item props
interface typeProps {
  id: number;
  img?: string;
  title?: string;
  price?: number;
  disPrice?: number;
  percent?: number;
}

const SliderShow = ({ data }: { data: typeProps[] }) => {
  return (
    <Swiper
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper"
      dir="rtl"
      spaceBetween={30}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1, // 1 slide on small screens
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2, // 2 slides on medium screens
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3, // 3 slides on large screens
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="flex justify-center p-4">
          <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
            {item.img && (
              <img className="w-full h-64 object-cover" src={item.img} alt={item.title} />
            )}
            <div className="p-4">
              {item.title && (
                <h4 className="text-sm font-semibold text-gray-800">{item?.title}</h4>
              )}
              <div className="flex justify-between items-center p-2 my-1">
                {item.percent && (
                  <p className="text-white bg-red-500 p-[2px] rounded-[10px] font-light text-sm flex">
                    {item.percent} %
                  </p>
                )}
                {item.price && (
                  <p className="text-sm font-light text-red-600">{item.price?.toLocaleString()} تومان</p>
                )}
              </div>
              {item.disPrice && (
                <p className="text-gray-500 line-through text-sm text-light">{item.disPrice.toLocaleString()} تومان</p>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderShow;
