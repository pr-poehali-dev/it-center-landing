import { 
  Code, Server, Smartphone, Globe, Database, Shield 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Code className="h-12 w-12 text-orange-500" />,
    title: "Разработка ПО",
    description: "Создаем кастомные приложения под ваши бизнес-задачи"
  },
  {
    icon: <Server className="h-12 w-12 text-orange-500" />,
    title: "IT-инфраструктура",
    description: "Проектирование и обслуживание IT-систем любой сложности"
  },
  {
    icon: <Smartphone className="h-12 w-12 text-orange-500" />,
    title: "Мобильные приложения",
    description: "Разработка приложений для iOS и Android"
  },
  {
    icon: <Globe className="h-12 w-12 text-orange-500" />,
    title: "Веб-разработка",
    description: "Создание современных адаптивных сайтов и веб-приложений"
  },
  {
    icon: <Database className="h-12 w-12 text-orange-500" />,
    title: "Облачные решения",
    description: "Миграция и управление данными в облачных сервисах"
  },
  {
    icon: <Shield className="h-12 w-12 text-orange-500" />,
    title: "IT-безопасность",
    description: "Комплексная защита IT-инфраструктуры вашего бизнеса"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Наши сервисы</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что мы предлагаем</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Полный спектр IT-услуг для бизнеса любого масштаба. От разработки ПО до обслуживания IT-инфраструктуры.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll">
              <Card className="border border-gray-100 dark:border-gray-800 h-full transition-all duration-300 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-900">
                <CardHeader className="pb-4">
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg inline-block mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
