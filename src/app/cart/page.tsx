import HeaderCart from "@/components/cart/headerCart";
import ShowDataCard from "@/components/cart/showDataCard";
import ShowDetails from "@/components/cart/showDetailCard";
import Steper from "@/components/cart/steper";

// mui icon
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// next image
import Image from 'next/image';

const Cart = () => {
  return (
    <>
      <HeaderCart />
      <Steper />
      <div className="grid grid-cols-10 gap-4" dir="rtl">
        <div className="col-span-10 md:col-span-7 p-2">
          <ShowDataCard />
        </div>
        <div className="col-span-10 md:col-span-3 p-2">
          <ShowDetails />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10" dir='rtl'>
      <div className="bg-[#E5E5E5] p-4 grid grid-cols-1 md:grid-cols-2 rounded-md">
        <div className="flex gap-1">
          <LocalShippingIcon color='success' />
          <p className="text-accent-des">ارسال به سراسر ایران</p>
        </div>
        <div className="flex gap-1">
          <CheckCircleIcon color='success' />
          <p className="text-accent-des">تضمین بازگشت وجه</p>
        </div>
        <div className="flex gap-1">
          <HeadphonesIcon color='success' />
          <p className="text-accent-des">پشتیبانی حین و بعد فروش</p>
        </div>
        <div className="flex gap-1">
          <CreditCardIcon color='success' />
          <p className="text-accent-des">تنوع در روش های پرداخت</p>
        </div>
      </div>
      <div className="flex justify-center mx-auto bg-[#E5E5E5] p-4 rounded-md w-full">
        <Image src={'/assets/images/samandehi-new-1.png'} alt='' width={100} height={100} />
        <Image src={'/assets/images/enamad-new.png'} alt='' width={100} height={100} />
      </div>
    </div>
    </>
  );
};

export default Cart;
