import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";

const WayInfoShoping = () => {
  return ( 
    <div className="p-3" dir='rtl'>
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "ارسال به سراسر ایران" }]}
      />
      <div className="text-accent-des mt-5 mb-32">
      <p className="font-light my-1">
      - پیک اختصاصی (برای مناطق 22 گانه شهر تهران)
      </p>
      <p className="font-light my-1">
      - پست پیشتاز (برای سراسر کشور)
      </p>
      <p className="font-light my-1">
      - تیپاکس و چاپار (برای شهرهای تحت پوشش تیپاکس)
      </p>
      <p className="font-light my-1">
      - باربری (برای شهرهای تحت پوشش باربری مناسب برای اجناس سنگین)
      </p>
      </div>
    </div>
   );
}
 
export default WayInfoShoping;