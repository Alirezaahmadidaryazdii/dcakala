import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";

const AboutUs = () => {
  return (
    <div className="p-3" dir="rtl">
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "درباره ما" }]}
      />
      <h1 className="font-bold text-primary text-center">چرا دی سی ای کالا</h1>
      <p className="my-1">
        دی سی ای کالا فروشگاه اینترنتی و حضوری است که شروع فعالیت ها آن به ۱۳۸۸
        بر می گردد پس می توان این فروشگاه را با سابقه ترین فروشگاه تخصصی سیستم
        های حفاظتی و نظارتی و برق ساختمانی در ایران دانست
      </p>
      <video width="100%" controls>
        <source src="/assets/videos/mr_Mohamadian.mp4" type="video/mp4" />
        مرورگر شما از تگ ویدیو پشتیبانی نمی‌کند.
      </video>
      <h2 className="text-lg my-5 text-[#52AFC2]">
      تیم قدرتمند فروش

      </h2>
      <p className="text-sm text-accent-accent-des">
      اکثر فروشگاههای اینترنتی بزرگ تنها اجناس را با یک سری اطلاعات پایه ای در سایت خود قرار می‌دهند و به لحاظ فنی اطلاعات کافی از محصول خود ندارد. اما تیم فروش دی سی ای کالا برای هر بخش از متخصصان همان رشته استفاده کرده تا بهترین تجربه خرید را برای مشتریان خود به ارمغان آورد.

      </p>
      <h2 className="text-lg my-5 text-[#52AFC2]">
      نمایندگی اکثر برندها

      </h2>
      <p className="text-accent-des text-sm">
      مشکل جدیدی که گریبان گیر بسیاری از فروشگاه های اینترنتی شده این است که مشتری پس از خرید متوجه می شود محصول که خریده از طرف شرکت اصلی خدماتی دریافت نمی کند علت هم عدم تایید فروشنده از طرف تولید کننده و وارد کننده است. دی سی ای کالا با داشتن نمایندگی اکثر برندهای قرار داده شده در سایت این مشکل را کاملاً برطرف کرده است

      </p>
      <h2 className="text-lg my-5 text-[#52AFC2]">
      تیم نصب و خدمات پس از فروش

      </h2>
      <p className="text-accent-des text-sm">
      جایی که تفاوت فروشگاه دی سی کالا با بقیه فروشگاه کاملاً مشخص می‌شود. این فروشگاه در تهران و کرج تیم مستقیم برای نصب صحیح و اصولی دارد و در اکثر شهرستان‌ها با تیم‌های قدرتمندی که خدمات نصب را برعهده دارند همکاری می‌کند که در صورت تمایل خریدار، جنس پس از فروش به صورت استاندارد نصب شود . به نحوی که گارانتی محصول معتبر بمانند. اما اگر بعد از چند وقت مشکلی برای اجناس پیش آمد همین تیم فنی به کمک او آمده و مشکل را به سرعت برطرف می کند.
      </p>
      <h2 className="text-lg my-5 text-[#52AFC2]">
      سرعت تحویل را با ما تجربه کنید

      </h2>
      <p className="text-accent-des text-sm">
      اکثر فروشگاه اینترنتی اجناس را پس از سفارش تهیه می‌کنند اما ما در دی سی ای کالا این ادعا را داریم که ۷۰ درصد اجناس درخواستی را از انبار خود ارسال می‌کنیم این مورد دو حسن دارد یکی اینکه سرعت ارسال محصول بسیار بالاست به نحوی که مصرف کننده تهران می تواند جنس سفارش داده را همان روز سفارش تحویل بگیرد و مورد دوم این است که مشکل لغو سفارش به علت عدم موجودی کالا تقریباً وجود ندارد.
      </p>
      <h2 className="text-lg my-5 text-[#52AFC2]">
      ۷ روز ضمانت بازگشت واقعی

      </h2>
      <p className="text-accent-des text-sm">
      اکثر کالاهای دی سی کالا دارای ۷ روز ضمانت بازگشت هستند البته باید شرایط اولیه کالا حفظ شده باشد یعنی جنس نصب یا پیچ نشده باشد و خط و خش روی محصول ایجاد نشده باشد. اگر از ظاهر محصول خوشتان نیامد و یا محصول با آن چیزی که در ذهن شما بود فرق داشت می توانید محصول را تا حداکثر 7 روز پس از تحویل مرجع نمایید.
      </p>
    </div>
  );
};

export default AboutUs;
