import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";


const SupportTeam = () => {
  return ( 
    <div className="p-3" dir='rtl'>
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "پشتیبانی" }]}
      />
      <p className="font-light text-accent-hover mt-5 mb-60">
      پشتیبانی حین و بعد از فروش
      </p>
    </div>
   );
}
 
export default SupportTeam;