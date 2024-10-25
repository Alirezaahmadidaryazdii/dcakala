import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";


const RefundPay = () => {
  return ( 
    <div className="p-3" dir='rtl'>
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "تضمین بازگشت وجه" }]}
      />
      <p className="text-accent-des mt-5 mb-36">
      بازگشت 7 روزه در صو.رت مغایرت کالا
      </p>
    </div>
   );
}
 
export default RefundPay;