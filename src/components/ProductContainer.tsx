"use client";

import React, { useState } from "react";
import Filters from "./Filters";
import Products from "./Products";
import FilterListCard from "./FilterListCard";

import { ProductsType } from "../pages/index";

const ProductContainer = ({ products }: { products: ProductsType[] }) => {
  // write type for state

  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <main className="relative">
      <Filters showFilter={showFilter} setShowFilter={setShowFilter} />
      <div
        className={`p-4 md:px-12 lg:px-24 ${
          showFilter && "sm:grid grid-cols-3 md:grid-cols-4 gap-x-4"
        }`}
      >
        {showFilter && <FilterListCard />}
        <Products showFilter={showFilter} products={products} />
      </div>
    </main>
  );
};

export default ProductContainer;
