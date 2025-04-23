import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Search, ShoppingCart, Filter, Cube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Геймерское кресло XYZ",
    description: "Эргономичное кресло с 3D-регулировкой",
    price: 15999,
    category: "furniture",
    has3D: true,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Механическая клавиатура V1",
    description: "Механические переключатели с RGB-подсветкой",
    price: 8499,
    category: "electronics",
    has3D: true,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Беспроводная мышь Pro",
    description: "Оптический сенсор 20000 DPI",
    price: 3999,
    category: "electronics",
    has3D: true,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Монитор 27\" UltraHD",
    description: "4K разрешение, 144 Гц, HDR10",
    price: 32999,
    category: "electronics",
    has3D: false,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Стол Ergonomic Plus",
    description: "Регулируемая высота, кабель-менеджмент",
    price: 19999,
    category: "furniture",
    has3D: true,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Наушники AudioX",
    description: "Активное шумоподавление, 30 часов работы",
    price: 12999,
    category: "electronics",
    has3D: false,
    image: "/placeholder.svg",
  },
];

type SortOption = "popular" | "low-to-high" | "high-to-low";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [show3DOnly, setShow3DOnly] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      // Filter by category
      if (activeCategory !== "all" && product.category !== activeCategory) {
        return false;
      }

      // Filter by search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filter by 3D availability
      if (show3DOnly && !product.has3D) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sort products
      switch (sortBy) {
        case "low-to-high":
          return a.price - b.price;
        case "high-to-low":
          return b.price - a.price;
        case "popular":
        default:
          return 0; // In real app would sort by popularity
      }
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Магазин
            </h1>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Поиск товаров..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="sm:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
                {showFilters ? (
                  <ChevronUp className="h-4 w-4 ml-2" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-2" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar filters - responsive */}
            <div
              className={`w-full md:w-1/4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md ${
                showFilters ? "block" : "hidden md:block"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Категории
                </h3>
                <div className="flex flex-col gap-2">
                  {["all", "electronics", "furniture"].map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "default" : "ghost"}
                      className={
                        activeCategory === category
                          ? "bg-orange-500 hover:bg-orange-600 justify-start"
                          : "justify-start"
                      }
                      onClick={() => setActiveCategory(category)}
                    >
                      {category === "all"
                        ? "Все категории"
                        : category === "electronics"
                        ? "Электроника"
                        : "Мебель"}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Сортировка
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    { value: "popular", label: "По популярности" },
                    { value: "low-to-high", label: "Сначала дешевые" },
                    { value: "high-to-low", label: "Сначала дорогие" },
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={
                        sortBy === option.value as SortOption
                          ? "default"
                          : "ghost"
                      }
                      className={
                        sortBy === option.value
                          ? "bg-orange-500 hover:bg-orange-600 justify-start"
                          : "justify-start"
                      }
                      onClick={() => setSortBy(option.value as SortOption)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Дополнительно
                </h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={show3DOnly ? "default" : "outline"}
                    className={
                      show3DOnly
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "border-orange-500 text-orange-500"
                    }
                    onClick={() => setShow3DOnly(!show3DOnly)}
                  >
                    <Cube className="h-4 w-4 mr-2" />
                    Только с 3D-моделями
                  </Button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="flex-1">
              <Tabs defaultValue="grid" className="mb-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Найдено товаров: {filteredProducts.length}
                  </p>
                  <TabsList>
                    <TabsTrigger value="grid">Сетка</TabsTrigger>
                    <TabsTrigger value="list">Список</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="grid" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="transition-transform hover:scale-105"
                      >
                        <Card className="h-full flex flex-col">
                          <CardHeader className="relative p-0">
                            <div className="h-48 w-full overflow-hidden rounded-t-lg">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {product.has3D && (
                              <Badge
                                className="absolute top-2 right-2 bg-orange-500"
                                variant="default"
                              >
                                <Cube className="h-3 w-3 mr-1" />
                                3D
                              </Badge>
                            )}
                          </CardHeader>
                          <CardContent className="flex-grow pt-4">
                            <CardTitle className="text-lg">
                              {product.name}
                            </CardTitle>
                            <CardDescription className="mt-2">
                              {product.description}
                            </CardDescription>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center">
                            <p className="font-bold text-lg">
                              {product.price.toLocaleString()} ₽
                            </p>
                            <Button
                              size="sm"
                              className="bg-orange-500 hover:bg-orange-600"
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              В корзину
                            </Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="list" className="mt-6">
                  <div className="flex flex-col gap-4">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="transition-transform hover:translate-x-1"
                      >
                        <Card>
                          <div className="flex flex-col sm:flex-row">
                            <div className="relative w-full sm:w-48 h-48">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                              />
                              {product.has3D && (
                                <Badge
                                  className="absolute top-2 right-2 bg-orange-500"
                                  variant="default"
                                >
                                  <Cube className="h-3 w-3 mr-1" />
                                  3D
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-col flex-grow p-4">
                              <CardTitle>{product.name}</CardTitle>
                              <CardDescription className="mt-2 mb-4">
                                {product.description}
                              </CardDescription>
                              <div className="mt-auto flex justify-between items-center">
                                <p className="font-bold text-lg">
                                  {product.price.toLocaleString()} ₽
                                </p>
                                <Button
                                  size="sm"
                                  className="bg-orange-500 hover:bg-orange-600"
                                >
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  В корзину
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {filteredProducts.length === 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    Товары не найдены
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Попробуйте изменить параметры поиска или фильтрации
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                      setShow3DOnly(false);
                      setSortBy("popular");
                    }}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Сбросить все фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
