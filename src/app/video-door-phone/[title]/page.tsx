"use client";

// import data for use
import { categorys } from "@/_data/data";
// import resuablity blebraeadcrumbs from mui
import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";

import { Rating, Typography } from "@mui/material";
// import next components
import Image from "next/image";
import { useEffect, useState } from "react";

// import mui icon
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import StarsIcon from "@mui/icons-material/Stars";
import SliderShow from "@/components/Home/body1/sliderShow";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "@/redux/orebiSlice";
import { useTheme } from "@emotion/react";

interface PageProps {
  params: {
    title: string;
  };
}

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
}

export default function VideoDoorParamPage({ params }: PageProps) {
  const [count, setCount] = useState<number>(0)
  const dispatch = useDispatch();
  const [idTitle, setIdTitle] = useState<string>();
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    setIdTitle(decodeURIComponent(params.title));
  }, [params.title]);

  useEffect(() => {
    if (idTitle) {
      const foundItem = categorys.Iphone.products.allProduct.find(
        (item) => item.title === idTitle
      );
      setProduct(foundItem);
    }
  }, [idTitle]);

  return (
    <div dir="rtl" className="my-5 p-3">
      <ReusableBreadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: categorys.Iphone.header, href: "/video-door-phone" },
          { label: product?.title },
        ]}
      />
      {product ? (
        <div className="my-10">
          <Typography variant="h4" className="font-bold m-2">
            {product.title}
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Image
              src={product.img}
              alt={product.title}
              width={100}
              height={100}
              className="w-[100%]"
            />
            <div className="mx-auto">
              <p className="m-3 font-bold text-lg text-accent-des">
                {product.title}
              </p>
              <button className="rounded-md border bg-white text-black p-2 mt-10">
                مشاهده همه ویژگی
              </button>
            </div>
            <div className="bg-[#F6F6F6] p-5 rounded-md shadow-sm">
              <p className="text-accent-des text-sm flex gap-2 m-5">
                ارسال از یک روز کاری دیگر
                <TwoWheelerIcon />
              </p>
              <p className="text-accent-des text-sm flex gap-2 mx-5">
                1 سال گارانتی
                <StarsIcon />
              </p>
              <div className="flex flex-col justify-center mt-10">
                <div className="flex justify-between">
                  <Typography variant="h6" className="ml-auto my-2 font-bold">
                    {product.price.toLocaleString("fa-IR")}
                  </Typography>
                  <div className="w-1/3 flex items-center gap-6 text-lg">
                    <span
                      onClick={() =>{
                        count > 0 && setCount(count-1)
                        dispatch(decreaseQuantity({ _id: product.id }))
                      }
                      }
                      className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                    >
                      -
                    </span>
                    <p>{count}</p>
                    <span
                      onClick={() =>{
                        setCount(count+1)
                        dispatch(increaseQuantity({ _id: product.id }))
                      }
                      }
                      className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                    >
                      +
                    </span>
                  </div>
                </div>
                <button
                  className="rounded-md p-2 text-white bg-primary"
                  onClick={() => {
                    const data:{
                      _id: number,
                      title: string,
                      img: string,
                      price: number
                    } = {
                      _id: product.id,
                      title: product.title,
                      img: product.img,
                      price: product.price
                    }
                    console.log(data)
                    setCount(count+1)
                    dispatch(addToCart(data))
                  }}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
          <h3 className="text-primary border-b border-primary m-1 inline-block">
            پرسش و پاسخ
          </h3>
          <div className="flex gap-2">
            <div>
              <p>در مورد این کالا پرسشی داری؟</p>
              <button className="my-1 bg-primary text-white rounded-md p-1 w-full">
                ثبت پرسش
              </button>
            </div>
            <div className="p-2 rounded-md border flex justify-center flex-1 mx-4">
              <p className="text-red-600 font-light m-auto">
                هنوز هیچ پرسشی نشده است!
              </p>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-primary border-b border-primary m-1 inline-block">
              نقد و بررسی
            </h3>
            <div className="flex gap-2">
              <div>
                <p>مجموع امتیاز از نظر</p>
                <Rating className="my-2" dir="lrt" name="simple-controlled" />
                <button className="my-1 bg-primary text-white rounded-md p-1 w-full">
                  ثبت نظر
                </button>
              </div>
              <div className="p-2 rounded-md border flex justify-center flex-1 align-items-center mx-4">
                <p className="text-red-600 font-light m-auto">
                  هنوز هیچ پرسشی نشده است!
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-primary border-b border-primary m-1 inline-block">
            محصولات مرتبط
          </h3>
          <div className="bg-[#FFD7B3] rounded-md p-5 my-5">
            <SliderShow data={categorys.Iphone.products.allProduct} />
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
