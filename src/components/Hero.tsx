import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 top-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 lg:w-5/12 mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-orange-500">Инновационные</span> IT-решения для вашего бизнеса
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Мы помогаем компаниям оптимизировать процессы, повышать эффективность и развиваться, используя современные технологии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Наши услуги <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20">
                О компании
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-6/12 relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300"></div>
              <img 
                src="/placeholder.svg" 
                alt="IT решения" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-3">
                <span className="text-orange-500 text-xl">🚀</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Быстрый запуск</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">В течение 24 часов</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-3">
                <span className="text-orange-500 text-xl">💻</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Техподдержка</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">24/7 для клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
