import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";

const FreeShippingAndInstallation = () => {
  return (
    <div className="p-3" dir='rtl'>
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "ارسال نصب محصولات دی سی کالا" }]}
      />
      <div className="viewContents">
        <section className="free-shipping-and-installation">
          <h2 className="text-lg text-center my-5 text-[#52AFC2]">ارسال سریع و رایگان محصولات در تهران</h2>

          <p className="my-2" style={{lineHeight: 3}}>
            در ابتدا باید گفت فروشگاه دی سی ای کالا سعی کرده که مجموعه ای کامل
            از لوازم الکترونیکی ساختمان را، برای راحتی و آرامش خاطر مشتریان به
            صورت اینترنتی عرضه و ارسال کند. این فروشگاه با تنوع محصولات در تمامی
            زمینه ها از قبیل <a href="/automatic-gate/">جک درب پارکینگ</a>،{" "}
            <a href="/video-door-phone/">آیفون تصویری</a>،{" "}
            <a href="/cctv/">دوربین مداربسته</a>،{" "}
            <a href="/content/security-system.html">سیستم های حفاظتی</a>
            &nbsp;و... و همچنین ارائه محصولات با کیفیت، توانسته تا جایگاه خود را
            در میان مصرف کنندگان به دست آورد. برای دی سی ای کالا رضایت مندی
            مشتریان در ارجحیت قرار دارد و در این راستا سعی شده تا محصولات
            درخواستی مشتریان به صورت رایگان و سریع به سراسر تهران ارسال شود. در
            واقع فردی که در دی سی ای کالا سفارش خود را ثبت می کند یک خرید
            ماندگار و خوب را در خاطر خود خواهد داشت، چرا که{" "}
            <strong>خرید محصول از دی سی ای کالا</strong> دارای مزایای زیر می
            باشد:
          </p>

          <ul className="w-full rounded-md p-5 bg-[#F9F9F9] border border-gray-400">
            <li>خرید محصولی باکیفیت با قیمتی مناسب</li>
            <li>امنیت در سفارش کالا</li>
            <li>ارسال سریع و تحویل به مشتری تا حداکثر 4 ساعت</li>
            <li>ارسال رایگان به سراسر تهران</li>
          </ul>

          <h3 className="text-primary my-2">نصب ارزان در تهران</h3>

          <p className="my-3" style={{lineHeight: 3}}>
            ذکر این نکته نیز در ابتدا ضروری به نظر می رسد که{" "}
            <strong>قیمت محصولات دی سی ای کالا</strong> به مراتب مناسب تر از
            رقبای خود می باشد و در واقع مشتریان با خرید محصول خود یک کالا با
            کیفیت و قیمت مناسب را تهیه نموده اند. دی سی ای کالا این بار برای
            رضایت مندی مشتریان خود در جهت نصب ارزان و تخصصی محصولاتی مانند&nbsp;
            <a href="/door-closer/">آرامبند</a> و&nbsp;
            <a href="/electric-lock/">قفل برقی</a> قدم برداشته که به ترتیب مبالغ
            90 و&nbsp;100 هزار تومان را برای دستمزد نصب این محصولات در نظر گرفته
            است والبته نسبت به کیفیت نصب و رقبای این فروشگاه اینترنتی بسیار
            ناچیز می باشد.
          </p>

          <h3 className="text-primary my-2">تضمین کیفیت دی سی ای کالا</h3>

          <p className="my-3"style={{lineHeight: 3}}>
            اجناسی که وارد سایت دی سی ای کالا می شوند از یک تیم تحقیقاتی گسترده
            عبور می کند که کاملا نقاط قوت و ضعف کالاها را مورد بررسی قرار می
            دهند. ضمن آن که کادر مجرب&nbsp;<a href="/">دی سی ای کالا</a> همواره
            با بررسی اصل بودن کیفیت محصولات و صدور فاکتور رسمی برای کالاها سعی
            بر ارائه محصولی بی عیب و نقص و با کیفیت دارد. در واقع باید گفت کیفیت
            یک محصول هیچ گاه اتفاقی نبوده و تحقق آن در راستای فعالیت{" "}
            <strong>فروشگاه اینترنتی دی سی ای کالا</strong> با سیستم مدیریت
            کیفیت و نظارت دقیق آن به انجام رسیده است. تضمین کیفیت به عنوان رکن
            اصلی مدیریت کیفیت، تمامی راهکار ها و تدابیری که بر روی کیفیت یک
            محصول اثرگذار هستند را پوشش می دهد. علاوه بر این، محافظت از کسب و
            کار و حفظ کیفیت محصول، فرایندی سیستماتیک برای شناسایی، ارزیابی و
            مدیریت ریسک های موجود را پایه ریزی نموده و در راستای برآوردن نیازها
            و الزامات، دائما آن را توسعه داده است. به طور کلی باید گفت که با
            ضمانت دی سی ای کالا از خرید محصول مورد نیاز خود لذت ببرید.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FreeShippingAndInstallation;
