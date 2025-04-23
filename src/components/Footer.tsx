import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-orange-500">IT</span>
              <span className="text-2xl font-bold text-white">Центр</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Инновационные IT-решения для бизнеса любого масштаба. Помогаем компаниям стать эффективнее с помощью современных технологий.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Разработка ПО</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Облачные решения</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">IT-инфраструктура</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">IT-безопасность</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Веб-разработка</a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">О нас</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-orange-500 transition-colors">Команда</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Карьера</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Блог</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">📍</span>
                <span className="text-gray-400">г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">📱</span>
                <a href="tel:+79991234567" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✉️</span>
                <a href="mailto:info@it-centr.ru" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@it-centr.ru
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">⏰</span>
                <span className="text-gray-400">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} IT-Центр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
