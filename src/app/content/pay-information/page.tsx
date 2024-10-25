import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";

const PayInformation = () => {
  return ( 
    <div className="p-3" dir='rtl'>
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "تنوع در روش های پرداخت" }]}
      />
      <p className="font-ligth text-accent-des mb-1 mt-5">
      نماد های اعتباری سایت دی سی ای کالا

      </p>
      <p className="font-light text-accent-des mb-36">
      وب سایت دی سی ای کالا با دریافت مجوزهای معتبر از کلیه نهاد های نظارتی در راستای جلب اعتمادو اعتبار از مشتریان و آسودگی خیال آنها آماده خدمت رسانی به مشتریان عزیز میباشد


      </p>
    </div>
   );
}
 
export default PayInformation;