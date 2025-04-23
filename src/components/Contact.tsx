import { 
  MapPin, Phone, Mail, Clock, Send 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Свяжитесь с нами</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Заполните форму, и наши специалисты свяжутся с вами в ближайшее время
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Input 
                    placeholder="Имя" 
                    className="border-gray-200 dark:border-gray-700 focus:border-orange-500"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="border-gray-200 dark:border-gray-700 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <Input 
                  placeholder="Тема" 
                  className="border-gray-200 dark:border-gray-700 focus:border-orange-500"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Сообщение" 
                  rows={4}
                  className="resize-none border-gray-200 dark:border-gray-700 focus:border-orange-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Отправить сообщение <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      г. Москва, ул. Технологическая, 42, офис 301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +7 (999) 123-45-67
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      info@itcenter.ru
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: Выходной
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
