import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";

const DcakalaProductCreditSymbol = () => {
  return ( 
    <div className="p-3"dir="rtl">
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "نماد های اعتباری سایت دی سی کالا" }]}
      />
      <p className="border p-1 shadow-sm mt-5 mb-32">
      وب سایت دی سی ای کالا با دریافت مجوزهای معتبر از کلیه نهاد های نظارتی در راستای جلب اعتمادو اعتبار از مشتریان و آسودگی خیال آنها آماده خدمت رسانی به مشتریان عزیز میباشد


      </p>
    </div>
   );
}
 
export default DcakalaProductCreditSymbol;