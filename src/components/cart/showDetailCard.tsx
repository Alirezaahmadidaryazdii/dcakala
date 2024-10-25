'use client'

// import mui icon
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { RootState } from '@reduxjs/toolkit/query';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  // سایر فیلدهای مربوط به محصول
}

const ShowDetails = () => {
  const products = useSelector((state: RootState) => state.orebiReducer.products); // state تایپ‌شده
  const [totalAmt, setTotalAmt] = useState<number>(0); // مقدار عددی برای کل مبلغ
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let price = 0;
    products.forEach((item: Product) => {
      setCount(count+1)
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [products]);

  return ( 
    <div>
      <div className="border border-gray-300 rounded-md p-2">
      <div className="w-full flex justify-between my-2">
        <p className='text-sm font-light text-accent-des'>مبلغ کل (${count} کالا)</p>
        <p className='text-sm font-light text-accent-des'>${totalAmt} تومان</p>
      </div>
      <div className="w-full flex justify-between my-2">
        <p className='text-sm font-light text-accent-des'>هزینه ارسال </p>
        <p className='text-sm font-light text-accent-des'>وابسته به ارسال</p>
      </div>
      <hr />
      <div className="w-full flex justify-between text-red-500 my-2">
        <p className='text-sm font-light '> تخفیف </p>
        <p className='text-sm font-light'> 0 تومان</p>
      </div>
      <div className="w-full flex justify-between text-red-500 my-2">
        <p className='text-sm font-light text-accent-des'> مبلغ قابل پردخات </p>
        <p className='text-sm font-light text-accent-des'> ${totalAmt} تومان</p>
      </div>
      <button className="bg-primary p-2 rounded-sm w-full my-2 text-white">ادامه ثبت سفارش</button>
    </div>
    <div className="rounded-md border border-gray-300 p-2">
      <div className="flex gap-1 my-2">
        <HeadsetMicIcon color='success' />
        <p>مشاوره و راهنمایی</p>
      </div>
      <p className="text-green-400 my-2">در صورت مشکل با مشاوره تماس بگیرید</p>
      <div className="flex gap-1">
        <PhoneEnabledIcon color='success' />
        <p className="text-green-400">مشاوره و راهنمایی</p>
      </div>
    </div>
    <h3 className="text-sm m-2">کالاهای شما در سبد ثبت و ورزو نشده اند برای ثبت سفارس مراحل بعدی را تکمیل کنید</h3>
    <h5 className="text-sm text-accent-des">100,000,000 تومان تا ارسال رایگان</h5>
    </div>
   );
}
 
export default ShowDetails;