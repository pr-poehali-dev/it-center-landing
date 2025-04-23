import { Check } from "lucide-react";

const advantages = [
  "Более 10 лет опыта в IT-сфере",
  "Команда сертифицированных специалистов",
  "Индивидуальный подход к каждому клиенту",
  "Гибкие условия сотрудничества",
  "Поддержка на каждом этапе внедрения",
  "Гарантия качества на все услуги"
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-orange-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 lg:w-5/12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-300 rounded-lg"></div>
              <div className="relative z-10 bg-white dark:bg-gray-900 p-2 rounded-lg shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="О нашей компании" 
                  className="w-full h-auto rounded"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500/90 text-white p-4 sm:p-6 rounded-lg backdrop-blur-sm">
                  <p className="text-2xl sm:text-3xl font-bold">10+</p>
                  <p className="text-sm sm:text-base">лет на рынке IT</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-7/12 animate-on-scroll">
            <p className="text-orange-500 font-semibold mb-2">О нас</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему выбирают наш IT-центр</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Мы предлагаем комплексный подход к цифровой трансформации вашего бизнеса. Наша команда профессионалов поможет подобрать оптимальные решения под ваши задачи и бюджет.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-200">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
