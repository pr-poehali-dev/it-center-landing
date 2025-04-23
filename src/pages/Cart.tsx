import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

// Mock cart items
const initialCartItems = [
  {
    id: 1,
    name: "Геймерское кресло XYZ",
    price: 15999,
    color: "Черный",
    quantity: 1,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Механическая клавиатура V1",
    price: 8499,
    color: "Белый",
    quantity: 1,
    image: "/placeholder.svg",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "demo") {
      setPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = 500;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <ShoppingCart className="h-8 w-8" />
              Корзина
              {cartItems.length > 0 && (
                <span className="text-xl font-normal text-gray-500 dark:text-gray-400">
                  ({cartItems.length} {cartItems.length === 1 ? "товар" : cartItems.length < 5 ? "товара" : "товаров"})
                </span>
              )}
            </h1>
          </div>

          {cartItems.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <ShoppingCart className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Ваша корзина пуста
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Добавьте товары из нашего каталога, чтобы перейти к оформлению заказа
                </p>
                <Link to="/shop">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Начать покупки
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {cartItems.map((item) => (
                        <div key={item.id} className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="sm:w-24 h-24 flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            <div className="flex flex-col flex-grow">
                              <div className="flex flex-col sm:flex-row justify-between">
                                <Link to={`/product/${item.id}`}>
                                  <h3 className="text-lg font-medium text-gray-900 dark:text-white hover:text-orange-500 transition-colors">
                                    {item.name}
                                  </h3>
                                </Link>
                                <p className="font-bold text-right">
                                  {(item.price * item.quantity).toLocaleString()} ₽
                                </p>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                Цвет: {item.color}
                              </p>
                              <div className="flex justify-between mt-auto">
                                <div className="flex items-center border rounded-md">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                    className="px-2"
                                  >
                                    -
                                  </Button>
                                  <span className="w-8 text-center">{item.quantity}</span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="px-2"
                                  >
                                    +
                                  </Button>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeItem(item.id)}
                                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Удалить
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 flex justify-between">
                  <Link to="/shop">
                    <Button variant="outline" className="text-gray-600">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Продолжить покупки
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-950"
                    onClick={() => setCartItems([])}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Очистить корзину
                  </Button>
                </div>
              </div>

              {/* Order summary */}
              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Сумма заказа
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Подытог</span>
                        <span className="font-medium">{subtotal.toLocaleString()} ₽</span>
                      </div>

                      {promoApplied && (
                        <div className="flex justify-between text-green-600 dark:text-green-500">
                          <span>Скидка (10%)</span>
                          <span>-{discount.toLocaleString()} ₽</span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Доставка</span>
                        <span className="font-medium">{shipping.toLocaleString()} ₽</span>
                      </div>

                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          Итого
                        </span>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          {total.toLocaleString()} ₽
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Промокод"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-grow"
                          disabled={promoApplied}
                        />
                        <Button
                          onClick={applyPromoCode}
                          disabled={promoApplied || !promoCode}
                          variant={promoApplied ? "ghost" : "outline"}
                          className={promoApplied ? "text-green-600 cursor-not-allowed" : ""}
                        >
                          {promoApplied ? "Применен" : "Применить"}
                        </Button>
                      </div>

                      {promoApplied && (
                        <p className="text-sm text-green-600 dark:text-green-500">
                          Промокод "DEMO" успешно применен!
                        </p>
                      )}

                      <Button className="w-full bg-orange-500 hover:bg-orange-600 h-12">
                        Перейти к оформлению
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
