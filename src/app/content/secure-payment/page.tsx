import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";
import Image from "next/image";

const SecurePay = () => {
  return (
    <div className="p-3" dir="rtl">
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "پرداخت امن در دی سی کالا" }]}
      />
      <h2 className="text-primary text-lg text-center my-2">
        نماد های اعتباری سایت دی سی ای کالا
      </h2>
      <p>
        وب سایت دی سی ای کالا با دریافت مجوزهای معتبر از کلیه نهاد های نظارتی در
        راستای جلب اعتمادو اعتبار از مشتریان و آسودگی خیال آنها آماده خدمت رسانی
        به مشتریان عزیز میباشد
      </p>
      <Image src={'/assets/images/Parsian.png'} alt="" width={150} height={150} className="mx-auto object-cover my-5" />
    </div>
  );
};

export default SecurePay;
