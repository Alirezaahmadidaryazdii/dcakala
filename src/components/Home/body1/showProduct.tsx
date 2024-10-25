import SliderShow from "./sliderShow";



const data = [
  {id: 1, img: '/assets/images/product (2).jpg', title: 'پکیج دزدگیر سایلیس با و چشمی با سیم', price: 6_952_500, disPrice: 7_725_000, percent: 10},
  {id: 1, img: '/assets/images/product (1).jpg', title: 'دوربین لامپی بیسیم استفورد', price: 1_719_000, disPrice: 1_990_000, percent: 10},
  {id: 1, img: '/assets/images/product (3).jpg', title: 'آیفون تصویری سیماران با حافظه بدونه گوشی', price: 4_100_000},
  {id: 1, img: '/assets/images/product (4).jpg', title: 'جک درب پارکینگ یوتا', price: 10_464_000, disPrice: 10_900_000, percent: 4},
]

const ShowProduct = () => {
  return (
    <div className="ticket w-full h-fit border-dashed border-t-8 sm:border-r-8 sm:border-l-8 border-b-8 border-[#FFA500] sm:rounded-3xl rounded-none bg-white relative max-w-unique" dir="rtl">
      <div className="vector absolute w-24 h-24 sm:-top-[12%] -right-[50px] sm:right-[17%] z-10 bg-white rounded-full border-6 border-white rotate-[52deg]">
        <div className="h-full w-full rounded-full border-8 border-[#FFA500]">
          <div className="w-full h-full rounded-full border-dashed border-[#FFA500] border-8"></div>
        </div>
      </div>
      <div className="w-full h-full bg-[#FFA500] right-0 sm:rounded-lg rounded-none flex justify-center items-center sm:p-2 p-0">
        <div className="w-full h-full bg-white sm:rounded-lg rounded-none flex sm:flex-row flex-col justify-end items-center sm:py-2 sm:pl-2">
          <div className="sm:absolute static sm:w-1/6 w-fit h-1/6 -right-[1%] top-[15%] Discount_tag__khCPu flex justify-center items-center bg-red-500 rounded-l-[20px]">
            <p className="text-white font-normal sm:text-xl text-sm">تخفیف باکس</p>
          </div>
          <div className="sm:w-[20%] w-fit h-fit sm:mt-16 mt-0 flex flex-col items-center">
            <p className="text-black text-center lg:text-lg sm:w-2/3 w-fit text-sm mb-4">زمان باقی مانده تا اتمام تخفیف ها</p>
            <div className="flex text-xs  gap-1 static text-red-500 bg-white lg:px-8 rounded-lg sm:py-2 py-1 sm:mt-0 mt-1 w-fit z-10 items-center font-bold">
              <div className="text-base tracking-[.5em]">37</div>
              <span className="font-bold">:</span>
              <div className="text-base tracking-[.5em]">22</div>
              <span className="font-bold">:</span>
              <div className="text-base tracking-[.5em]">10</div>
              <span className="font-bold hidden">:</span>
              <div className="text-base hidden">00</div>
            </div>
          </div>
          <div className="sm:h-full h-4/5 sm:w-4/5 w-full bg-white rounded-se-lg rounded-ee-lg border-r-8 sm:border-dashed border-none border-[#FFA500]">
            <div className="w-full h-full bg-[#FFA500] sm:rounded-se-lg sm:rounded-ee-lg sm:px-4 px-2 sm:py-4 py-8">
              <SliderShow data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
