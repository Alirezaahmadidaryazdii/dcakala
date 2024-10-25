import Image from "next/image";
import { ReactElement } from "react";

interface typeProps {
  img: string;
  title: string;
}

const ItemsCircle = ({ data }: { data: typeProps[] }) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full p-4">
      {data.map((item, index) => (
        <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110" key={index}>
          <Image
            src={item.img}
            width={100}
            height={100}
            className="w-full"
            alt={item.title}
          />
          <h5 className="text-sm">{item.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default ItemsCircle;
