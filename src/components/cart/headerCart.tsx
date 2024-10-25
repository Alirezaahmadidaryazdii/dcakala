import Image from "next/image";
import Link from "next/link";

const HeaderCart = () => {
  return (
    <header className="flex justify-between align-items-center border-b p-3"dir="rtl">
      <div className="flex justify-center align-items-center gap-1">
        <Link href={"/"} className="text-accent-des text-sm my-auto">
          بازگشت به صفحه اصلی
        </Link>
        <Image
        className="hidden md:block"
          src={"/assets/images/logoLogin.jpeg"}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-center my-auto">
        <p dir="rtl" className="text-sm md:text-lg">
          مرکز تماس و پشتیبانی:{" "}
          <span className="text-green-400">021723519</span>
        </p>
      </div>
    </header>
  );
};

export default HeaderCart;
