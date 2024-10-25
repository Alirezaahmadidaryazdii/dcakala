import React from "react";
import SliderShow from "../Home/body1/sliderShow";

interface BestSellerItem {
  id: number;
  img?: string;
  title?: string;
  price?: number;
}

interface BestSellerProps {
  header: string;
  items: BestSellerItem[];
}

const ReusableBestSeler: React.FC<BestSellerProps> = ({ header, items }) => {
  return (
    <section
      className="sm:px-4 px-2 pb-4 flex flex-col items-center w-full bg-gradient-to-b from-[#CED0D0] to-white rounded-lg"
      style={{ maxWidth: "1358px", margin: "0px auto 3rem" }}
    >
      <div className="bg-white sm:text-base text-sm w-4/5 text-center py-4 rounded-b-full font-bold">
        {header}
      </div>
      <div className="null w-full mt-4">
        <div className="w-full null">
          <SliderShow data={items} />
        </div>
      </div>
    </section>
  );
};

export default ReusableBestSeler;
