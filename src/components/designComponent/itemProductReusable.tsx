import React from 'react';

interface ItemProps {
  id: number,
  img?: string;
  title?: string;
  percent?: number;
  price?: number;
  disPrice?: number;
}

interface ItemProductReusableProps {
  item: ItemProps;
}

const ItemProductReusable: React.FC<ItemProductReusableProps> = ({ item }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {item.img && (
        <img
          className="w-full h-64 object-cover"
          src={item.img}
          alt={item.title}
        />
      )}
      <div className="p-4">
        {item.title && (
          <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
        )}
        <div className="flex justify-between items-center p-2 my-1">
          {item.percent && (
            <p className="text-white bg-red-500 p-[2px] rounded-[10px] font-light text-sm flex">
              {item.percent} %
            </p>
          )}
          {item.price && (
            <p className="text-sm font-light text-red-600">
              {item.price.toLocaleString()} تومان
            </p>
          )}
        </div>
        {item.disPrice && (
          <p className="text-gray-500 line-through text-sm text-light">
            {item.disPrice.toLocaleString()} تومان
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemProductReusable;
