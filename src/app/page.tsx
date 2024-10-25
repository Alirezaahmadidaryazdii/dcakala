"use client";
// import component custom
import AlbumBilBord from "@/components/Home/body1/albumsBilBord";
import TxtDesign from "@/components/Home/body1/desingTxt";
import HeaderBody from "@/components/Home/body1/headers";
import ItemsCircle from "@/components/Home/body1/itemsCircle";
import ShowProduct from "@/components/Home/body1/showProduct";
import SliderShow from "@/components/Home/body1/sliderShow";
// import component next
import Image from "next/image";
// import icon mui
import BeenhereIcon from "@mui/icons-material/Beenhere";
import SlideBrands from "@/components/Home/slideComponentBrands";

const dataItemsCircle = [
  { img: "/assets/images/circle1.png", title: "جک درب پارکینگی" },
  { img: "/assets/images/circle2.png", title: "درب اتوماتیک شیشه ایی" },
  { img: "/assets/images/circle3.webp", title: "دوربین مداربسته" },
  { img: "/assets/images/circle4.png", title: "لوازم خانگی" },
  { img: "/assets/images/circle5.png", title: "راهبند" },
  { img: "/assets/images/circle1 (5).png", title: "آیفون تصویری" },
];

const dataIphone = [
  {
    id: 1,
    img: "/assets/images/iphoneSlide (1).jpg",
    price: 2_790_000,
    title: "آیفون تصویری سیماران با حافظه وصفحه نمایش 4.3 اینچی",
  },
  {
    id: 2,
    img: "/assets/images/iphoneSlide (2).jpg",
    price: 1_815_000,
    title: "آیفون تصویری سوزوکی بدون حافظه",
  },
  {
    id: 3,
    img: "/assets/images/iphoneSlide (3).jpg",
    price: 2_750_000,
    title: "آیفون تصویر کالویز با حافظه و 6اینج",
  },
  {
    id: 4,
    img: "/assets/images/iphoneSlide (4).jpg",
    price: 2_034_000,
    title: "آیفون تصویری تابا با 4 اینج حافظه",
  },
  {
    id: 5,
    img: "/assets/images/iphoneSlide (5).jpg",
    price: 2_669_000,
    title: "آیفون تصویری اکتروپیک با حافظه 4 کلید اینچی",
  },
];

const dataBanner = [
  { id: 1, img: "/assets/images/bannerImage (1).jpg" },
  { id: 2, img: "/assets/images/bannerImage (2).jpg" },
  { id: 3, img: "/assets/images/bannerImage (3).jpg" },
  { id: 4, img: "/assets/images/bannerImage (4).jpg" },
  { id: 5, img: "/assets/images/bannerImage (5).jpg" },
  { id: 5, img: "/assets/images/bannerImage (6).jpg" },
  { id: 5, img: "/assets/images/bannerImage (7).jpg" },
];

const items = [
  {
    title: "اعلام حریق",
    image: "/assets/images/select (1).png",
    link: "https://www.dcakala.com/fire-alarm/",
  },
  {
    title: "دوربین مداربسته",
    image: "/assets/images/select (1).webp",
    link: "https://www.dcakala.com/cctv/",
  },
  {
    title: "جک پارکینگی",
    image: "/assets/images/select (2).png",
    link: "https://www.dcakala.com/parking-jack/",
  },
  {
    title: "سیستم‌های حفاظتی",
    image: "/assets/images/select (2).webp",
    link: "https://www.dcakala.com/security-systems/",
  },
  {
    title: "درب‌های اتوماتیک",
    image: "/assets/images/select (3).png",
    link: "https://www.dcakala.com/automatic-doors/",
  },
  {
    title: "درب‌های اتوماتیک",
    image: "/assets/images/select (3).webp",
    link: "https://www.dcakala.com/automatic-doors/",
  },
];
// jacks data
const dataJack = [
  {
    id: 1,
    img: "/assets/images/jacks (1).jpg",
    title: "جک درب پارکنیگ سیماران فراز 300 کیلومتر",
    price: 9_540_000,
    disprice: 11_600_00,
    percent: 18,
  },
  {
    id: 1,
    img: "/assets/images/jacks (2).jpg",
    title: "جک توی کالپیسو قدرت هر لنگه 400 کیلومتر",
    price: 23_000_000,
  },
  {
    id: 1,
    img: "/assets/images/jacks (3).jpg",
    title: "موتور ریگی پارکنیگ میلان",
    price: 13_900_00,
  },
  {
    id: 1,
    img: "/assets/images/jacks (4).jpg",
    title: "جک درب پایین ریواFRDO-400",
    price: 14_500_000,
  },
  {
    id: 1,
    img: "/assets/images/jacks (5).jpg",
    title: "جک پارکنیگ روچی قدرت 400 کیلومتر",
    price: 10_800_000,
  },
];
export default function Home() {
  return (
    <div>
      {/* header and resubility */}
      <div className="bg-white pb-3">
        <HeaderBody
          data={["خرید اقساطی", "مجله اموزشی", "تخفیفات و پیشنهادات"]}
        />
      </div>
      {/* slider banner */}
      <AlbumBilBord />
      {/* the product clicle images */}
      <ItemsCircle data={dataItemsCircle} />
      {/* product slider */}
      <div className="px-4 py-10">
        <ShowProduct />
      </div>
      {/* banners */}
      <div className="p-5">
        <div className="banner grid grid-cols-1 md:grid-cols-2">
          <Image
            src={"/assets/images/banners (2).webp"}
            width={100}
            height={100}
            className="w-full h-full rounded-[30px] p-4"
            alt=''
          />
          <Image
            src={"/assets/images/banners (3).webp"}
            width={100}
            height={100}
            className="w-full h-full rounded-[30px] p-4"
            alt=''
          />
        </div>
        <Image
          src={"/assets/images/banners (1).webp"}
          width={100}
          height={100}
          className="w-full h-full rounded-[30px] p-4"
          alt=""
        />
      </div>
      <TxtDesign title="آیفون های تصویری" />
      <div className="px-20">
        <SliderShow data={dataIphone} />
      </div>
      <div className="brands-header bg-primary text-center rounded-t-[15px] p-5 md:p-10 text-white mx-5 my-5">
        <BeenhereIcon />
        <p>منتخب برند ها</p>
      </div>
      <div className="px-1 mx-5">
        <SlideBrands data={dataBanner} />
      </div>
      <TxtDesign title="دوربین مداربسته" />
      <div className="bgImage w-full py-6 my-10">
        <div className="hidden md:flex justify-between ">
          <Image
            src={"/assets/images/dorbinLeft.webp"}
            width={200}
            height={200}
            alt=""
          />
          <Image
            src={"/assets/images/dorbinRight.webp"}
            width={200}
            height={200}
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-0 md:px-32 gap-0 md:gap-5">
          <div className="bg-white text-black hover:text-primary transition-all duration-300 rounded-[15px] p-2 hover:scale-110 flex flex-col justify-center align-items-center w-[80%] mx-auto">
            <Image
              src={"/assets/images/itemsDorbin (1).jpg"}
              width={100}
              height={100}
              alt=""
              className="w-full"
            />
            <p className="text-sm text-center my-2">دوربین مداربسته وایرلاس</p>
          </div>
          <div className="bg-white text-black hover:text-primary transition-all duration-300 rounded-[15px] p-2 hover:scale-110 flex flex-col justify-center align-items-center w-[80%] mx-auto">
            <Image
              src={"/assets/images/itemsDorbin (2).jpg"}
              width={100}
              height={100}
              alt=""
              className="w-full"
            />
            <p className="text-sm text-center my-2">دوربین مداربسته دام</p>
          </div>
          <div className="bg-white text-black hover:text-primary transition-all duration-300 rounded-[15px] p-2 hover:scale-110 flex flex-col justify-center align-items-center w-[80%] mx-auto">
            <Image
              src={"/assets/images/itemsDorbin (3).jpg"}
              width={100}
              height={100}
              alt=""
              className="w-full"
            />
            <p className="text-sm text-center my-2">دوربین ثبت وقایع</p>
          </div>
          <div className="bg-white text-black hover:text-primary transition-all duration-300 rounded-[15px] p-2 hover:scale-110 flex flex-col justify-center align-items-center w-[80%] mx-auto">
            <Image
              src={"/assets/images/itemsDorbin (4).jpg"}
              width={100}
              height={100}
              alt=""
              className="w-full"
            />
            <p className="text-sm text-center">پکیج های دوربین مداربسته</p>
          </div>
        </div>
      </div>
      <TxtDesign title="دسته های منتخب" />
      <div className="w-full grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-3 place-items-center sm:gap-4 gap-2 sm:px-4 px-2">
        {items.map((item, index) => (
          <div>
            <div className="group block h-60">
              <div className="shadow-lg ease-in duration-400 transition-all w-fit h-fit bg-white border-1 border-gray-300 rounded-full p-1 mx-auto z-10 relative flex justify-center items-center">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="group-hover:bg-gray-400 w-full h-32 border border-gray-300 rounded-2xl mx-auto flex flex-col justify-end pb-4 relative -top-12">
                <p className="group-hover:text-white text-center">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TxtDesign title="جک درب پایین" />
      <div className="px-10">
        <SliderShow data={dataJack} />
      </div>
      <div className="brands-header bg-primary text-center rounded-t-[15px] p-5 md:p-10 text-white mx-5 my-5">
        <BeenhereIcon />
        <p>منتخب برند ها</p>
      </div>
      <div className="px-1 mx-5">
        <SlideBrands data={dataBanner} />
      </div>
      <div className="bg-primary m-4 md:m-10 p-3 rounded-md">
        <TxtDesign title="پرفروش ترین" />
        <div className="px-1 md:px-20">
        <SliderShow data={dataIphone} />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row p-5 gap-5">
        <Image src={'/assets/images/bannerEnd (1).jpg'} alt="" width={100} height={100} className="w-full h-full object-cover rounded-lg" />
        <Image src={'/assets/images/bannerEnd (2).jpg'} alt="" width={100} height={100} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="bg-[#F7F7F7] p-5 rounded-md m-5" dir='rtl'>
        <h4 className="text-light my-2">فروشگاه دی سی ای کالا</h4>
        <p className="text-accent-des">
        دی سی ای کالا اولین و بزرگترین فروشگاه اینترنتی و حضوری سیستم های حفاظتی و نظارتی در ایران است که در سال 1392 کار خود را آغاز کرد. در این فروشگاه محصولاتی از گروه دوربین مدار بسته، آیفون تصویری، جک درب پارکینگ، انواع قفل برقی و آرام بند، کرکره برقی، راهبند و درب شیشه ای و انواع سیستم های حضور و غیاب و کنترل تردد قرار داده شده تا کاربر با توجه به ویژگی ها و بررسی های تخصصی قرار داده در سایت آنها را انتخاب و خریداری نماید.
        </p>
      </div>
    </div>
  );
}
