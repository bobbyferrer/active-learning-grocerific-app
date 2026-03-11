import React from "react";
import { products } from "./products";
import ProductCard from "./ProductCard";

type Props = {
  onAddToCart: (product: any) => void;
  searchTerm: string;
};

export default function ProductGrid({ onAddToCart, searchTerm }: Props) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
}
