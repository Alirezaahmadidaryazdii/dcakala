import ReusableBreadcrumbs from "@/components/designComponent/ReusableBreadcrumbs";
import { Breadcrumbs, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type RecordType = {
  id: number;
  name: string;
  des: string;
};

const dataList: RecordType[] = [
  {
    id: 1,
    name: "تلفن تماس :	 	",
    des: " 72195-021",
  },
  {
    id: 2,
    name: "	تلفن تماس :	",
    des: "77132831-021",
  },
  {
    id: 3,
    name: "ارتباط از طریق تلگرام و واتساپ :		",
    des: " ID: dcakala",
  },
  {
    id: 4,
    name: " آدرس :	",
    des: "تهران - نارمک - میدان 47 - ضلع غربی میدان - پلاک 8",
  },
];

const dataList2 = [
  {
    id: 1,
    name: "آقای محمدیان 	",
    des: " داخلی های 109 و 110 (مدیریت فروش و فروش به همکاران )",
  },
  {
    id: 2,
    name: "خانم حسنی	",
    des: "داخلی های 103 و 111 ( دزدگیر و دوربین مداربسته )",
  },
  {
    id: 3,
    name: "خانم داوودی	",
    des: " داخلی های 115و 105 ( آیفون تصویری و حضور و غیاب، آرام بند و قفل )",
  },
  {
    id: 4,
    name: " خانم اقدمی	",
    des: " داخلی های 114 و 100 ( آیفون تصویری و اعلام حریق، گیت فروشگاهی)",
  },
];

const ContactUs = () => {
  return (
    <div className="p-3" dir="rtl">
      <ReusableBreadcrumbs
        items={[{ label: "خانه", href: "/" }, { label: "تماس با ما" }]}
      />

      {/* contact1.png */}
      <Image
        src={"/assets/images/contact1.png "}
        layout="responsive"
        width={700} // عرض اصلی تصویر
        height={400} // ارتفاع اصلی تصویر
        className="w-full object-contain my-5"
        alt="trust image"
      />
      <div className="border rounded-lg p-3 border-[#52AFC2] shadow-lg shadow-[#52AFC2]">
        <h1 className="text-[#52AFC2] border-b-4 border-b-[#52AFC2] my-5">
          - بخش تجهیزات حفاظتی و نظارتی (آیفون تصویری، جک، دوربین مداربسته و
          ...)
        </h1>
        <ul className="space-y-4">
          {dataList.map((item, index) => (
            <li
              key={index}
              className={`flex gap-5 rounded-md p-2 ${
                index % 2 === 0 ? "bg-[#FBF6E4]" : "bg-white"
              }`}
            >
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="font-light text-sm text-accent-des">{item.des}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-lg p-3 border-[#52AFC2] shadow-lg shadow-[#52AFC2] my-10">
        <h1 className="text-[#52AFC2] border-b-4 border-b-[#52AFC2] my-5">
          - بخش تجهیزات حفاظتی و نظارتی (آیفون تصویری، جک، دوربین مداربسته و
          ...)
        </h1>
        <ul className="space-y-4">
          {dataList.map((item, index) => (
            <li
              key={index}
              className={`flex gap-5 rounded-md p-2 ${
                index % 2 === 0 ? "bg-[#FBF6E4]" : "bg-white"
              }`}
            >
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="font-light text-sm text-accent-des">{item.des}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-lg p-3 border-[#52AFC2] shadow-lg shadow-[#52AFC2] my-10">
        <Image
          src={"/assets/images/googlemap-dcakala.webp"}
          width={100} // عرض اصلی تصویر
          height={100} // ارتفاع اصلی تصویر
          alt=""
          className="w-full h-[150px] object-cover"
        />
      </div>
    </div>
  );
};

export default ContactUs;
