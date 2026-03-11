type Props = {
  isOpen: boolean;
  onClose: () => void;
  cartItems: any[];
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
};

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-green-600 font-semibold">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">
                          Quantity: {item.quantity || 1}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => onDecrease(item.id)}
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center"
                          >
                            -
                          </button>
                          <button
                            onClick={() => onIncrease(item.id)}
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Subtotal:</span>
                    <span className="text-lg font-bold text-green-600">
                      $
                      {cartItems
                        .reduce(
                          (total, item) =>
                            total + item.price * (item.quantity || 1),
                          0,
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
