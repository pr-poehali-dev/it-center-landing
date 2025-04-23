import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-orange-500" />,
    title: "Телефон",
    details: "+7 (999) 123-45-67",
    link: "tel:+79991234567"
  },
  {
    icon: <Mail className="h-6 w-6 text-orange-500" />,
    title: "Email",
    details: "info@it-centr.ru",
    link: "mailto:info@it-centr.ru"
  },
  {
    icon: <MapPin className="h-6 w-6 text-orange-500" />,
    title: "Адрес",
    details: "г. Москва, ул. Примерная, д. 123",
    link: "https://maps.google.com"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь был бы код для отправки данных формы
    console.log("Form submitted:", formData);
    alert("Спасибо! Ваше сообщение отправлено.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-orange-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Свяжитесь с нами</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Заполните форму ниже или воспользуйтесь контактной информацией, чтобы связаться с нами напрямую.
          </p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="animate-on-scroll border border-gray-100 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 mb-2">
                        {item.details}
                      </CardDescription>
                      <a 
                        href={item.link} 
                        className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 text-sm font-medium"
                      >
                        Связаться
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="md:col-span-2 animate-on-scroll">
            <Card className="border border-gray-100 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl">Отправьте сообщение</CardTitle>
                <CardDescription>
                  Заполните форму, и наш специалист свяжется с вами в ближайшее время.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Введите ваше имя"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите подробнее о вашем проекте..."
                      rows={4}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                  >
                    Отправить <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
