import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

const BuyInstallment = () => {
  return (
    <div dir="rtl">
      <Breadcrumbs aria-label="gift-card" className="mx-5 my-5 font-bold">
        <Link color="inherit" href="/">
          خانه
        </Link>
        <Typography className="text-primary">خرید اقساطی</Typography>
      </Breadcrumbs>
      <h1 className="my-10 text-primary text-center text-lg">خرید اقساطی از دی سی ای کالا</h1>
      <h4 className="mx-auto text-center text-lg">مزایای خرید اقساطی چیست ؟</h4>
      <p className="text-accent-des my-4">
        در شرایط اقتصادی کنونی که هزینه های خرید کالا سرسام آور است می توان با
        ارائه راهکارهایی همانند خرید اقساطی، قدرت خرید را بالاتر برد. در واقع
        همانند این است که وام با بازپرداخت بلند مدت دریافت کرده اید و در این
        صورت به راحتی می توانید کالای مورد نیازتان را خریداری کرده و هزینه ها را
        طی مدت زمان مشخص و در چند ماه تا یک سال پرداخت کنید. خرید اقساطی به شما
        کمک می کند خیلی زیرکانه تر هزینه های خود را کنترل کنید در واقع نوعی
        انعطاف پذیری مالی پیدا می کنید و نیازی نیست نقدا به صورت یک جا هزینه ی
        کالای مورد نظرتان را پرداخت کنید. خرید اقساطی به شما امکان خرید آنی را
        می دهد به این صورت که در خریدهای ضروری و برنامه ریزی نشده نیازی به مدت
        ها از قبل پس انداز کردن نیست و می توانید در یک بازه زمانی مشخص هزینه های
        خود را مدیریت کنید.
      </p>
      <h4>شرایط و مزایای خرید اقساطی از دی سی ای کالا</h4>
      <p>
        شما برای خرید اعتباری از DCAKALA نیاز دارید وارد لینک زیر در سایت لندو
        شوید و درخواست وام یا اعتبار برای خرید اقساطی بدهید.
      </p>
      <div className="w-full rounded-md border p-2 my-5 flex justify-center">
        <button className="bg-primary text-accent-default rounded-md p-2 mx-auto">
          شروع خرید اقساتی
        </button>
      </div>

      <div className="complex-2 my-10">
        <div className="text-box">
          <span className="title">مزایای خرید اقساطی دی سی ای کالا</span>
          <ul className="inner-text" style={{listStyleType: 'none'}}>
            <li>خرید اقساطی تا سقف 20 میلیون تومان</li>
            <li>بدون نیاز به چک و ضامن</li>
            <li>فرآیند انجام کار کاملا آنلاین</li>
            <li>عدم اخذ جریمه دیرکرد</li>
          </ul>
        </div>
        <div className="text-box">
          <span className="title">
            مدارک مورد نیاز برای دریافت وام یا اعتبار دی سی ای کالا
          </span>
          <ul className="inner-text" style={{listStyleType: 'undefined'}}>
            <li>مدارک شناسایی</li>
            <li>یکی از مدارک گردش حساب، فیش حقوقی یا گواهی اشتغال به کار</li>
            <li>مدارک محل سکونت</li>
            <li>داشتن حساب بانک آینده</li>
          </ul>
        </div>
        <div className="text-box">
          <span className="title">مراحل خرید اقساطی یا دریافت اعتبار</span>
          <ul className="inner-text" style={{listStyleType: 'undefined'}}>
            <li>
              مشخص کردن مبلغ درخواستی یا اعتبار برای خرید اقساطی و ضمانت (سفته)
            </li>
            <li>
              مشخص کردن تعداد اقساط بین بازپرداخت 12 ماهه، بازپرداخت 9 ماهه و
              بازپرداخت 6 ماهه&nbsp;
            </li>
            <li>آپلود مدارک لازم برای اعتبار سنجی آنلاین را در سایت لندو</li>
            <li>دریافت اعتبار (کد) از سایت لندو</li>
            <li>خرید از فروشگاه دی سی ای کالا</li>
            <li>پرداخت اقساط به صورت ماهانه در سایت لندو</li>
          </ul>
        </div>
        <div className="text-box">
          <span className="title">پرداخت اقساط</span>
          <ul className="inner-text" style={{listStyleType: 'undefined'}}>
            <li>بازپرداخت به صورت 6 ماهه، 9 ماهه یا 12 ماهه</li>
            <li>پرداخت به صورت آنلاین از طریق سایت لندو</li>
            <li>بدون دریافت جریمه دیرکرد</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuyInstallment;
