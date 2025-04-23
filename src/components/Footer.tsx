import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-orange-500">3D</span>
              <span className="text-2xl font-bold">Shop</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Инновационный магазин с 3D-визуализацией товаров для лучшего опыта покупок
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Магазин
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  Все товары
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  Новинки
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  Распродажа
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  Популярное
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Информация
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  Возврат и гарантия
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  г. Москва, ул. Примерная, д. 123
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-2" />
                <a href="tel:+78001234567" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-2" />
                <a href="mailto:info@3dshop.ru" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                  info@3dshop.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} 3DShop. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
