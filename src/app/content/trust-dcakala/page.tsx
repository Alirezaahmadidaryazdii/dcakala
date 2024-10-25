import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";
import Image from "next/image";

const TrustDcakala = () => {
  return (
    <div className="p-3" dir="rtl">
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "اعتماد به دی سی کالا" }]}
      />

      <Image
        src={"/assets/images/trust1.jfif"}
        layout="responsive"
        width={700} // عرض اصلی تصویر
        height={400} // ارتفاع اصلی تصویر
        className="w-full object-contain my-5"
        alt="trust image"
      />
      <p className="text-accent-des text-sm font-light">
        دی‌سی‌ای‌کالا تنها فروشگاه اینترنتی در ایران است که مستقیماً نمایندگی
        بیشتر محصولاتی را که عرضه می‌کند، داراست. این مزیت، امکان انتخاب
        مطمئن‌تر و آسوده‌تری را برای مصرف‌کنندگان فراهم می‌کند از این رو می
        توانید تجربه خرید مستقیم و بدون واسطه را در دی‌سی‌ای‌کالا داشته باشید.
      </p>
      <Image
        src={"/assets/images/trust2.png"}
        layout="responsive"
        width={700} // عرض اصلی تصویر
        height={400} // ارتفاع اصلی تصویر
        className="w-full object-contain my-5"
        alt="trust image"
      />

      <p className="text-accent-des text-sm font-light">
        سیماران، تابا، الکتروپیک، تکنما، سوزوکی، کوماکس، کالیوز، اف‌اف، وی‌تو،
        پروتکو، فک، فادینی، فاتلس، میلان، یوتاب، کلاسیک، سایلکس، یال، تیونی،
        بتا، کینگ
      </p>
      <p>اینماد، رسانه‌های دیجیتال، کسب‌وکارهای اینترنتی، ضمانت ترب</p>
      <p className="text-accent-des text-sm font-light">
        مزایای خرید از دی‌سی‌ای‌کالا:
      </p>
      <p className="text-accent-des text-sm font-light">
        در شرایطی که فروشگاه‌های اینترنتی متعددی فعالیت می‌کنند، یافتن فروشگاهی
        معتبر که کالای اصل و باکیفیت عرضه کند، چالش‌برانگیز است. دی‌سی‌ای‌کالا
        این اطمینان را به شما می‌دهد که با بهره‌مندی از اعتبار و نمایندگی رسمی،
        محصولات را به‌موقع و با ضمانت اصالت به دست شما می‌رساند.
      </p>
      <Image
        src={"/assets/images/trust3.png"}
        layout="responsive"
        width={700} // عرض اصلی تصویر
        height={400} // ارتفاع اصلی تصویر
        className="w-full object-contain my-5"
        alt="trust image"
      />
    </div>
  );
};

export default TrustDcakala;
