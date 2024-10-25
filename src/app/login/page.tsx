import Image from "next/image";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-full md:w-[500px] mx-auto rounded-md p-5 border border-secondary flex flex-col gap-2"
        dir="rtl"
      >
        <Image
          src={"/assets/images/logoLogin.jpeg"}
          alt=""
          width={150}
          height={150}
          className="mx-auto"
        />
        <h4 className="text-bold mb-2">ورود | ثبت نام</h4>
        <p className="font-light text-sm text-accent-des">سلام!</p>
        <p className="font-light text-sm text-accent-des">
          لطفا شماره تماس خود را وارد کنید
        </p>
        <input
          type="text"
          className="rounded-md p-2 w-full border border-secondary"
          dir="rtl"
        />
        <button className="bg-primary text-white p-2 w-full rounded-md">
          ورود
        </button>
        <p className="text-sm text-light text-accent-des">
          ورود به معنای پذیرش قوانین خصوصی است
        </p>
      </div>
    </div>
  );
};

export default Login;
