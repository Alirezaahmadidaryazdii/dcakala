'use client'

import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import ItemProductReusable from './itemProductReusable';
import Link from 'next/link';

// types.ts
export interface Product {
  id: string;
  title: string;
  img?: string;
  percent?: number;
  price?: number;
  disPrice?: number;
}


export interface ProductListProps {
  products: Product[];
}


const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const itemsPerPage = 8; // تعداد آیتم‌هایی که در هر صفحه نمایش داده می‌شوند
  const [currentPage, setCurrentPage] = useState(1);

  // محاسبه تعداد کل صفحات
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // محاسبه ایتم‌های فعلی بر اساس صفحه کنونی
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // تابع تغییر صفحه
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className="my-2">
      <h3 className="my-2">همه محصولات</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {currentItems.map(item => (
          <Link href={`/video-door-phone/${item.title}`} key={item.id}>
            <ItemProductReusable item={item} />
          </Link>
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        className="my-8 flex justify-center"
      />
    </div>
  );
};

export default ProductList;
