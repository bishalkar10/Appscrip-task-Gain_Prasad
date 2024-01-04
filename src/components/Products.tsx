import React from "react";
import { ProductsType } from "../pages/index";
import Card from "./Card";

interface ProductsProps {
  products: ProductsType[];
  showFilter: boolean;
}

export default function Products({ products, showFilter }: ProductsProps) {
  return (
    <ul
      className={`grid grid-cols-2 ${
        showFilter
          ? "sm:grid-cols-2 col-span-2 md:grid-cols-3 md:col-span-3"
          : "sm:grid-cols-3 md:grid-cols-4"
      } gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-8`}
    >
      {products.map((product) => {
        return <Card key={product.id} {...product} />;
      })}
    </ul>
  );
}
