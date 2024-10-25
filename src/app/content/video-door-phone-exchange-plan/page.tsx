
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";

const VideoDoorPhoneExchangePlan = () => {
  return (
    <div className="p-3" dir="rtl">
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "طرح تصویری ایفون های تصویری" }]}
      />
      <div className="flex justify-center">
        <h1
          className="p-3 rounded-md text-[#52AFC2] bg-[#F5F5F5] text-center my-5 inline-block"
          style={{ fontSize: 30 }}
        >
          طرح تعویض آیفون تصویری
        </h1>
      </div>
      <div className="bg-white shadow-lg rounded-md p-2 text-center my-5">
        <p>
          همه آیفون های تصویری و صوتی قدیمی و حتی خراب در این طرح پذیرفته می
          شود.
        </p>
      </div>
      {/* video-door-phone-exchange.mp4 */}
      <video controls className="mx-auto w-full h-full p-5 rounded-md">
        <source
          src="/assets/videos/video-door-phone-exchange.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="mx-auto flex justify-center">
        <h1 className="my-1 border-b border-primary text-center inline-block">
          پرسش های متداول
        </h1>
      </div>
      <div className="border border-green-600 border-t-4 rounded-md p-4  w-[100%] md:w-[50%] mx-auto my-8">
        <h2 className="text-center">شرایط طرح تعویض آیفون تصویری چیست؟</h2>
        <p
          className="font-light text-sm my-2"
          style={{ fontWeight: 50, lineHeight: 2 }}
        >
          اگر آیفون صوتی و تصویری منزلتان قدیمی شده و یا از کار افتاده اکنون
          فرصت مناسبی است که از این طرح استفاده کنید. برای این کار کافیست فرم
          داخل این صفحه را پر کرده و یا با شماره تلفن شرکت تماس بگیرید تا
          کارشناسان دی سی ای کالا مراحل مربوط به این طرح را برای شما توضیح دهند.
          ما در این طرح گوشی قدیمی شما را بر نمیداریم، کارشناسان ما تنها مطمئن
          میشوند کسانی از این طرح بهره مند شوند که قصد تغییر آیفون صوتی و یا
          تصویری خود را دارند و برای این کار حتی گرفتن عکس از محصول قدیمی نیز
          کفایت میکند.
        </p>
      </div>
      <div className="border border-green-600 border-t-4 rounded-md p-4  w-[100%] md:w-[50%] mx-auto my-8">
        <h2 className="text-center">
          آیا استفاده از طرح تعویض آیفون تصویری زمانبر است؟
        </h2>
        <p
          className="font-light text-sm my-2"
          style={{ fontWeight: 50, lineHeight: 2 }}
        >
          خیر. این نوع خرید به مانند سایر سفارش ها به سرعت پردازش شده و اجناس
          کمتر از یک روز کاری برای خریدار ارسال می شود. در طرح تعویض خریدار فقط
          یک مرحله بیشتر باید طی کند که آن هم ارسال عکس آیفون قدیمی از منزل خودش
          است. لازم به ذکر است اگر چندین واحد میخواهد از این طرح استفاده کند، می
          بایست تک تک واحدها عکس مانیتور و پنل را یکجا برای کارشناس ما ارسال
          نماید.
        </p>
      </div>
      <div className="border border-green-600 border-t-4 rounded-md p-4  w-[100%] md:w-[50%] mx-auto my-8">
        <h2 className="text-center">درصد تخفیف در این طرح چقدر است؟</h2>
        <p
          className="font-light text-sm my-2"
          style={{ fontWeight: 50, lineHeight: 2 }}
        >
          ما بابت هر گوشی و یا پنل قدیمی در حدود 5 درصد تومان تخفیف برای انتخاب
          مانیتورهای ساده و حدود 8 درصد تخفیف بابت انتخاب مانیتور حافظه دار و
          پنل به شما اعطا می کنیم. این تخفیف زمانی جذاب می شود که شما برای همه ی
          واحدهای ساختمان تان قصد استفاده از این طرح را داشته باشید. در این صورت
          ممکن است هزینه راه اندازی آیفون برای شما رایگان در آید!
        </p>
      </div>
      <div className="border border-green-600 border-t-4 rounded-md p-4 w-[100%] md:w-[50%] mx-auto my-8">
        <h2 className="text-center">شرایط طرح تعویض آیفون تصویری چیست؟</h2>
        <p
          className="font-light text-sm my-2"
          style={{ fontWeight: 50, lineHeight: 2 }}
        >
          اگر آیفون صوتی و تصویری منزلتان قدیمی شده و یا از کار افتاده اکنون
          فرصت مناسبی است که از این طرح استفاده کنید. برای این کار کافیست فرم
          داخل این صفحه را پر کرده و یا با شماره تلفن شرکت تماس بگیرید تا
          کارشناسان دی سی ای کالا مراحل مربوط به این طرح را برای شما توضیح دهند.
          ما در این طرح گوشی قدیمی شما را بر نمیداریم، کارشناسان ما تنها مطمئن
          میشوند کسانی از این طرح بهره مند شوند که قصد تغییر آیفون صوتی و یا
          تصویری خود را دارند و برای این کار حتی گرفتن عکس از محصول قدیمی نیز
          کفایت میکند.
        </p>
      </div>
      <div className="w-[400px] mx-auto shadow-md rounded-lg p-5 text-center flex flex-col">
        <h1 className="my-5 border-b border-primary text-center inline-block">
          درخواست مشاوره خرید
        </h1>
        <input
          type="text"
          className="my-1 bg-[#F3F3F3] p-2 rounded-sm"
          placeholder="نام خود را وارد کنید"
        />
        <input
          type="text"
          className="my-1 bg-[#F3F3F3] p-2 rounded-sm"
          placeholder="نام خانوادگی خود را وارد کنید"
        />
        <input
          type="text"
          className="my-1 bg-[#F3F3F3] p-2 rounded-sm"
          placeholder="شماره تماس خود را وارد کنید"
        />
        <button
          type="submit"
          className="bg-primary rounded-md p-2 text-white my-1"
        >
          ثبت درخواست
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-10 gap-5">
        <div className="flex gap-2 justify-center align-items-center">
          <ElectricRickshawIcon  fontSize="large" className="my-auto text-primary"/>
          <div className="flex flex-col gap-2">
            <h1 style={{fontSize: 25}} className="text-primary">ارسال سریع به سراسر ایران</h1>
            <p className="text-sm font-light">اکسپرس،پست،تیپاکس و باربری</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center align-items-center">
          <CreditCardIcon  fontSize="large" className="my-auto text-primary"/>
          <div className="flex flex-col gap-2">
            <h1 style={{fontSize: 25}} className="text-primary">تنوع در روش های پرداختی</h1>
            <p className="text-sm font-light">پرداخت آنلاین کارت به کارت و یا در محل</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center align-items-center">
          <HeadsetMicIcon  fontSize="large" className="my-auto text-primary"/>
          <div className="flex flex-col gap-2">
            <h1 style={{fontSize: 25}} className="text-primary">تضمین بازگشت وجه</h1>
            <p className="text-sm font-light">بازگشت 7 روزه کالا در صورت مغایرت کالا</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center align-items-center">
          <CheckCircleOutlineIcon  fontSize="large" className="my-auto text-primary"/>
          <div className="flex flex-col gap-2">
            <h1 style={{fontSize: 25}} className="text-primary">پشتیبانی حین و بعد از فروش</h1>
            <p className="text-sm font-light">تیم مسلط فروش و پشتیبانی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDoorPhoneExchangePlan;
