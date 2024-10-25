import { categorys } from "@/_data/data";
import ItemProductReusable from "@/components/designComponent/itemProductReusable";
import ProductList from "@/components/designComponent/prodcutList";
import ReusableBestSeler from "@/components/designComponent/ReusableBestseler";
import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";
import ReusableFilter from "@/components/designComponent/ReusableFilter";
import SliderShow from "@/components/Home/body1/sliderShow";

const VideoDoorPhone = () => {
  const data = categorys;
  return (
    <div dir="rtl" className="p-2">
      <ReusableBreadcrumbs
        items={[
          { label: "خانه", href: "/" },
          { label: "آیفون تصویری قیمت فروش و نصب" },
        ]}
      />
      <h2 className="m-5">آیفون تصویری قیمت، فروش و نصب</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-1 sticky top-0 z-10">
          <ReusableFilter filter={data.Iphone.filter} />
        </div>
        <div className="md:col-span-4">
          <ReusableBestSeler
            header={data.Iphone.products.bestSeller.header}
            items={categorys.Iphone.products.bestSeller.items}
          />
          <section
            className="w-full px-5"
            style={{ maxWidth: "1358px", margin: "0 auto 3rem" }}
          >
            <div className="bg-[#CED0D0] sm:w-fit w-full px-4 py-2 rounded-t-lg">
              برندها
            </div>
            <div className="w-full p-4 bg-[#CED0D0] sm:rounded-lg rounded-b-xl sm:rounded-tr-none">
              <SliderShow data={data.Iphone.products.brands} />
            </div>
          </section>
          <div className="my-2">
            <ProductList products={categorys.Iphone.products.allProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDoorPhone;
