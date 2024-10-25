import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";
import Image from "next/image";

const AreasCoveredInstallation = () => {
  return (
    <div className="p-3" dir="rtl">
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "مناطق تحت پوشش و نصب خدمات" }]}
      />
      <h1 className="text-lg text-center my-5 text-[#52AFC2]">
        شهر ها و استانهایی که فروشگاه دی سی ای کالا قادر می باشد در آن نواحی
        خدمات نصب و گارانتی انجام دهد
      </h1>
      <Image
        src={"/assets/images/roudIran.png"}
        alt=""
        width={100}
        height={100}
        className="w-full h-full object-cover my-5"
      />
      <p>
        به طور معمول خدمات نصب مربوط به جک درب اتوماتیک، آیفون تصویری، دوربین
        مداربسته، درب شیشه ای، آرامبند و قفل برقی در شهرهایی که در زیر نام برده
        می شود انجام می پذیرد. البته در هر زمان می توانید با تماس با فروشگاه دی
        سی ای کالا اطلاعات مربوط با نصب و گارانتی را از کارشناسان ما دریافت
        نمایید.
      </p>
      <p className="my-1 font-light text-sm">تهران و البرز</p>
      <p>
        تمام خدمات مربوط به نصب و گارانتی در شهرهای استان تهران و البرز توسط
        خدمات مرکزی دی سی ای کالا انجام می پذیرد. اطلاعات تماس خدمات مرکزی دی سی
        ای کالا در اینجا دریافت نمایید.
      </p>
      <p className="my-1 font-light text-sm">آذربایجان شرقی</p>
      <p>
        شهرهای تبریز، شبستر،اسکو، آذر شهر، مراغه میانه، سراب تحت پوشش نصب دی سی
        ای کالا می باشد.
      </p>
      <p className="my-1 font-light text-sm"> آذربایجان غربی</p>

      <p className="mb-32">شهرهای ارومیه، بوکان، شاهین دژ، میاندوآب، خوی</p>
    </div>
  );
};

export default AreasCoveredInstallation;
