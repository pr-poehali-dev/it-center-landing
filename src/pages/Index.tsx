import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Box, RotateCcw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-gray-900">
          <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                  Магазин с{" "}
                  <span className="text-orange-500">
                    3D-визуализацией товаров
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Исследуйте товары в интерактивном 3D-формате перед покупкой.
                  Вращайте, увеличивайте и изучайте детали как никогда раньше.
                </p>
                <div className="flex gap-4">
                  <Link to="/shop">
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Перейти в магазин
                    </Button>
                  </Link>
                  <Link to="/product/1">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950"
                    >
                      <RotateCcw className="mr-2 h-5 w-5" />
                      Демо 3D-модели
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-md md:max-w-lg rounded-xl bg-white/50 dark:bg-gray-800/50 p-2 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/placeholder.svg"
                  alt="3D Shopping Experience"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                Преимущества 3D-магазина
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Откройте для себя новый способ совершения покупок с интерактивными 3D-моделями
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <RotateCcw className="h-10 w-10 text-orange-500" />,
                  title: "360° обзор",
                  description:
                    "Вращайте модели во всех направлениях для полного осмотра товара",
                },
                {
                  icon: <Box className="h-10 w-10 text-orange-500" />,
                  title: "Детальное изучение",
                  description:
                    "Увеличивайте модель для изучения мельчайших деталей перед покупкой",
                },
                {
                  icon: <ShoppingBag className="h-10 w-10 text-orange-500" />,
                  title: "Уверенные покупки",
                  description:
                    "Больше никаких сюрпризов — вы точно знаете, что покупаете",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-orange-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-500 dark:bg-orange-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                Готовы попробовать 3D-шоппинг?
              </h2>
              <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
                Переходите в наш магазин прямо сейчас и испытайте будущее онлайн-покупок
              </p>
              <Link to="/shop">
                <Button
                  size="lg"
                  className="bg-white text-orange-500 hover:bg-orange-50"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Начать покупки
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
