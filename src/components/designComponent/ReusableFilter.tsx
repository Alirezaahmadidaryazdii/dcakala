'use client'

import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ListMui from "./listMui";

// تعریف تایپ‌ها برای داده‌های ورودی
interface FilterItem {
  id: number;
  title: string;
  items: { id?: number; title?: string }[];
}

interface ReusableFilterProps {
  filter: FilterItem[];
}

const ReusableFilter: React.FC<ReusableFilterProps> = ({ filter }) => {
  const [openFilterId, setOpenFilterId] = useState<number | null>(null);

  const toggleFilter = (id: number) => {
    setOpenFilterId(openFilterId === id ? null : id);
  };

  return (
    <div className="bg-[#A4A4A4] rounded-md p-1 sticky top-0 z-10" dir='rtl'>
      <h3 className="text-white text-center my-2">فیلتر محصولات</h3>
      <div className="bg-white rounded-md p-1">
          <button className="w-full bg-[#A4A4A4] text-white py-2 rounded-md">
            اعمال فیلتر
          </button>
        <div className="overflow-y-auto max-h-[400px] mt-3">
          {filter.map((filterCategory) => (
            <div key={filterCategory.id} className="my-4 border-b p-3">
              <div
                onClick={() => toggleFilter(filterCategory.id)}
                className="flex items-center cursor-pointer font-bold"
              >
                <h3 className="text-sm">{filterCategory.title}</h3>
                <span className="ml-2">
                  {openFilterId === filterCategory.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {openFilterId === filterCategory.id && (
                <ListMui items={filterCategory.items} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableFilter;
