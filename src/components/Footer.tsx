// import icon mui
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PhoneIcon from '@mui/icons-material/Phone';
// social icon
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
// import reusiblilti list fo part2 footer
import ListFooter from "./Rlist-footer";

import Image from "next/image";
// import mui compoenents
import { Button } from "@mui/material";

const data = {
  service: [
    { id: 1, title: "قوانین و مقررات", href: '/content/terms-and-conditions-of-use' },
    { id: 2, title: "ضمانت خرید", href: '/content/guaranty' },
    { id: 3, title: "روش های سال", href: '/content/shipping-ways' },
    { id: 4, title: "حریم خصوصی", href: '/content/Privcy-Policy' },
  ],
  DSI: [
    { id: 1, title: "آموزش خرید و پرداخت", href: '/content/shopping-guide-and-payment' },
    { id: 2, title: "درباره ماا", href: '/content/about-us' },
    { id: 3, title: "تماس با ما", href: '/content/contact-us' },
  ],
  lastCategory: [
    { id: 1, title: "دزدگیر ارزان" },
    { id: 2, title: "پکیج مناسب داروخانه" },
    { id: 3, title: "دوربین بیسیم داهوا" },
    { id: 4, title: "پکیج مناسب فروشگاه عینک فروشی" },
    { id: 5, title: "پکیچ مناسب فروشگاه گوشی و تبلت" },
  ],
};
const Footer = () => {
  return (
    <footer>
      {/* part1 */}
      <div className="bg-[#E7E7E7] px-20 py-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-row space-x-3">
          <div className="text-primary">
            <CreditCardIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="text-accent-des text-sm">تنوع در روش های پرداخت</h5>
            <p className="text-accent-hover text-sm">
              پرداخت آنلاین، کارت به کارت و یا در محل
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="text-primary">
            <ElectricRickshawIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="text-accent-des text-sm">
              ارسال سریع به سراسر ایران
            </h5>
            <p className="text-accent-hover text-sm">
              اکسپرس، پست، تیپاکس و باربری
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="text-primary">
            <HeadsetMicIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="text-accent-des text-sm">
              پشتیبانی حین و بعد از فروش
            </h5>
            <p className="text-accent-hover text-sm">
              تیم مسلط فروش و تیم پشتیبانی فنی
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="text-primary">
            <CheckCircleOutlineIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="text-accent-des text-sm">تضمین بازگشت وجه</h5>
            <p className="text-accent-hover text-sm">
              بازگشت 7 روزه در صورت مغایرت کالا
            </p>
          </div>
        </div>
      </div>
      {/* part2 */}
      <div
        className="bg-secondary p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white"
        dir="rtl"
      >
        <div className="flex flex-col gap-3" dir="rtl">
          <ListFooter header="خدمات" data={data.service} />
        </div>
        <div className="flex flex-col gap-3">
          <ListFooter header="دی سی آی کالا" data={data.DSI} />
        </div>
        <div className="flex flex-col gap-3">
          <ListFooter header="اخرین دسته بندی" data={data.lastCategory} />
        </div>
        <div className="flex flex-row">
          <Image
            src={"/assets/images/samandehi-new-1.png"}
            alt=""
            width={120}
            height={120}
          />
          <Image
            src={"/assets/images/enamad-new.png"}
            alt=""
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="bg-primary flex justify-between p-5" dir="rtl">
        <Button
          variant="contained"
          sx={{
            fontSize: 18,
            borderRadius: "15px",
            bgcolor: "white",
            color: "black",
          }}
        >
          پرداخت سریع
        </Button>
        <div className="flex text-white gap-2">
          <XIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
      {/* part 3 */}
      <div className="bg-[#A1A3A8] p-5 grid grid-cols-1 md:grid-cols-3 gap-5 text-white" dir="rtl">
        <div className="flex flex-col gap-1 mx-auto">
          <Image
            src={"/assets/images/googlemap-dcakala.webp"}
            width={200}
            height={200}
            alt=""
          />
          <div className="flex">
            <h6>ادرس:</h6>
            <p>تهران نارمک روبروی جنوبی</p>
          </div>
        </div>
        <div className="text-white mx-auto">
          <div className="flex text-white">
            <PhoneIcon />
            <p>021-752219</p>
          </div>
          <p>اگر سوالی دارید با ما تماس بگیرید </p>
          <p>ساعت کاری ما:چهارشنبه 4 الی 16 </p>
          <p>مدیریت سایت: مسلم زمانی</p>
        </div>
        <div className="mx-auto">
          <Image src={'/assets/images/logo.png'} width={200} height={200} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
