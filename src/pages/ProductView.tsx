import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Heart, Share2, ChevronLeft, Truck, Shield, RotateCcw } from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Геймерское кресло XYZ",
    description: "Эргономичное кресло с 3D-регулировкой подлокотников и поясничной поддержкой для комфортной игры и работы",
    fullDescription: `
      <p>Геймерское кресло XYZ разработано для максимального комфорта во время длительных игровых сессий или рабочего дня за компьютером.</p>
      <h3>Основные характеристики:</h3>
      <ul>
        <li>Эргономичная форма спинки с поддержкой поясницы</li>
        <li>Регулируемые 4D подлокотники</li>
        <li>Газлифт 4 класса надежности</li>
        <li>Качественная экокожа с перфорацией для вентиляции</li>
        <li>Механизм качания с фиксацией в нескольких положениях</li>
        <li>Максимальная нагрузка: 150 кг</li>
      </ul>
      <p>Кресло поставляется в разобранном виде. Инструкция по сборке входит в комплект. Гарантия 24 месяца.</p>
    `,
    price: 15999,
    oldPrice: 19999,
    discount: 20,
    rating: 4.7,
    reviewsCount: 124,
    availability: "in-stock",
    colors: ["black", "red", "blue"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    features: ["Регулируемая высота", "Поддержка поясницы", "4D подлокотники", "Качество материалов"],
    specifications: [
      { name: "Материал обивки", value: "Экокожа премиум-класса" },
      { name: "Материал каркаса", value: "Металл" },
      { name: "Максимальная нагрузка", value: "150 кг" },
      { name: "Регулировка высоты", value: "Да" },
      { name: "Механизм качания", value: "Мультиблок" },
      { name: "Подголовник", value: "Регулируемый" },
      { name: "Подлокотники", value: "4D-регулировка" },
      { name: "Колеса", value: "Нейлон, бесшумные" },
      { name: "Размеры сиденья", value: "52 x 54 см" },
      { name: "Высота спинки", value: "86 см" },
      { name: "Высота (min-max)", value: "123-132 см" },
      { name: "Вес", value: "25 кг" },
    ],
    relatedProducts: [2, 5],
  },
  {
    id: 2,
    name: "Механическая клавиатура V1",
    price: 8499,
    oldPrice: 9999,
    discount: 15,
    images: ["/placeholder.svg"],
  },
  {
    id: 5,
    name: "Стол Ergonomic Plus",
    price: 19999,
    oldPrice: null,
    discount: 0,
    images: ["/placeholder.svg"],
  },
];

const ProductView = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<typeof products[0] | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    // Имитируем запрос к API
    const fetchProduct = () => {
      const foundProduct = products.find((p) => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        if (foundProduct.colors && foundProduct.colors.length > 0) {
          setSelectedColor(foundProduct.colors[0]);
        }
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50 dark:bg-gray-900 pt-20">
          <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Товар не найден
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Запрашиваемый товар не существует или был удален
              </p>
              <Link to="/shop">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Вернуться в магазин
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  const relatedProductsData = product.relatedProducts
    ? product.relatedProducts.map((relatedId) => 
        products.find((p) => p.id === relatedId)
      ).filter(Boolean) as typeof products
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Link to="/shop" className="flex items-center text-sm text-orange-500 hover:text-orange-600">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Вернуться в магазин
            </Link>
          </div>

          {/* Product layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Product visualization */}
            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                    <div className="relative h-[400px] md:h-[500px]">
                      {/* Product Image */}
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src={product.images[activeImage]} 
                          alt={product.name} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Thumbnails */}
                    {product.images.length > 1 && (
                      <div className="flex justify-center gap-2 p-4">
                        {product.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`w-16 h-16 border-2 rounded overflow-hidden transition-all ${
                              activeImage === index 
                                ? "border-orange-500 ring-2 ring-orange-300" 
                                : "border-gray-200 hover:border-orange-300"
                            }`}
                          >
                            <img 
                              src={image} 
                              alt={`${product.name} - view ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Product info */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`text-${i < Math.floor(product.rating || 0) ? "yellow-400" : "gray-300"}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-1 text-gray-600 dark:text-gray-400">
                        {product.rating} ({product.reviewsCount} отзывов)
                      </span>
                    </div>
                    <Badge
                      variant={product.availability === "in-stock" ? "outline" : "destructive"}
                      className={product.availability === "in-stock" ? "border-green-500 text-green-600" : ""}
                    >
                      {product.availability === "in-stock" ? "В наличии" : "Нет в наличии"}
                    </Badge>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    {product.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-xl text-gray-500 line-through">
                        {product.oldPrice.toLocaleString()} ₽
                      </span>
                    )}
                    {product.discount > 0 && (
                      <Badge variant="destructive" className="bg-red-500">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>
                </div>

                {product.colors && product.colors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      Цвет
                    </h3>
                    <div className="flex gap-3">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-10 h-10 rounded-full border transition-all ${
                            selectedColor === color
                              ? "ring-2 ring-offset-2 ring-orange-500"
                              : "ring-1 ring-gray-300"
                          }`}
                          style={{ 
                            backgroundColor: color === "black" ? "#000" : 
                                          color === "red" ? "#e53e3e" : 
                                          color === "blue" ? "#3182ce" : color 
                          }}
                          title={color.charAt(0).toUpperCase() + color.slice(1)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Количество
                  </h3>
                  <div className="flex w-max border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="text-lg"
                    >
                      -
                    </Button>
                    <div className="flex items-center justify-center w-12">
                      {quantity}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={increaseQuantity}
                      className="text-lg"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600 h-12">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Добавить в корзину
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <Separator className="mb-6" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    { 
                      icon: <Truck className="h-6 w-6 text-orange-500" />,
                      title: "Быстрая доставка",
                      description: "От 1 до 3 дней"
                    },
                    { 
                      icon: <Shield className="h-6 w-6 text-orange-500" />,
                      title: "Гарантия 2 года",
                      description: "Официальная гарантия"
                    },
                    { 
                      icon: <RotateCcw className="h-6 w-6 text-orange-500" />,
                      title: "Возврат 14 дней",
                      description: "Без вопросов"
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-3">{feature.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="mt-8">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b mb-0 rounded-b-none">
                <TabsTrigger value="description" className="text-base">
                  Описание
                </TabsTrigger>
                <TabsTrigger value="specifications" className="text-base">
                  Характеристики
                </TabsTrigger>
                <TabsTrigger value="reviews" className="text-base">
                  Отзывы ({product.reviewsCount})
                </TabsTrigger>
              </TabsList>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-tl-none rounded-lg">
                <TabsContent value="description" className="mt-0">
                  <div 
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.fullDescription }}
                  />
                  
                  {product.features && product.features.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <div 
                          key={index}
                          className="flex items-center p-4 bg-orange-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">
                            ✓
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="specifications" className="mt-0">
                  {product.specifications && product.specifications.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.specifications.map((spec, index) => (
                        <div 
                          key={index}
                          className="flex py-3 border-b border-gray-100 dark:border-gray-700"
                        >
                          <div className="w-1/2 text-gray-600 dark:text-gray-400">
                            {spec.name}
                          </div>
                          <div className="w-1/2 font-medium">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400">
                      Подробные характеристики не указаны
                    </p>
                  )}
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-0">
                  <div className="text-center py-8">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                      Отзывы о товаре
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Здесь будут отображаться отзывы о товаре
                    </p>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Написать отзыв
                    </Button>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Related products */}
          {relatedProductsData.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Похожие товары
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProductsData.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="transition-transform hover:scale-105"
                  >
                    <Card className="h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="flex-grow p-4">
                        <h3 className="font-medium text-lg">{relatedProduct.name}</h3>
                        <div className="flex items-baseline gap-2 mt-2">
                          <span className="font-bold">
                            {relatedProduct.price.toLocaleString()} ₽
                          </span>
                          {relatedProduct.oldPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {relatedProduct.oldPrice.toLocaleString()} ₽
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductView;
