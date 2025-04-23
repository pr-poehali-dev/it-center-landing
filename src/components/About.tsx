import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const benefits = [
    "Команда сертифицированных IT-специалистов",
    "Более 50 успешно реализованных проектов",
    "Индивидуальный подход к каждому клиенту",
    "Современные технологии и методологии"
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="О нашей компании" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 w-32 h-32 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 border-2 border-orange-500 w-32 h-32 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-on-scroll">
            <p className="text-orange-500 font-semibold mb-2">О нас</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ваш надежный IT-партнер</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              IT-Центр — команда профессионалов с более чем 10-летним опытом работы в IT-сфере. 
              Мы помогаем бизнесу расти и развиваться с помощью современных технологий.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Наши специалисты постоянно совершенствуют свои навыки, следят за новыми технологиями 
              и применяют лучшие практики в разработке и обслуживании IT-инфраструктуры.
            </p>

            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Подробнее о компании
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
