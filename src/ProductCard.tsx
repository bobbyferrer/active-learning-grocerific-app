type Props = {
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
};

export default function ProductCard({
  name,
  price,
  image,
  onAddToCart,
}: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      <div className="aspect-square w-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

        <p className="text-2xl font-bold text-green-600 mb-4">
          ${price.toFixed(2)}
        </p>

        <button
          onClick={onAddToCart}
          className="w-full bg-green-600 text-green-800 py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
