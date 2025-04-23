import { 
  Linkedin, Twitter, Mail 
} from "lucide-react";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";

const team = [
  {
    name: "Алексей Иванов",
    role: "Генеральный директор",
    image: "/placeholder.svg",
    bio: "Более 15 лет опыта в IT-индустрии. Специалист по стратегическому планированию и развитию IT-бизнеса.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:alexey@itcentr.ru"
    }
  },
  {
    name: "Мария Петрова",
    role: "Технический директор",
    image: "/placeholder.svg",
    bio: "Эксперт в области разработки ПО и архитектуры IT-систем. Сертифицированный специалист Microsoft и AWS.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:maria@itcentr.ru"
    }
  },
  {
    name: "Дмитрий Сидоров",
    role: "Руководитель отдела разработки",
    image: "/placeholder.svg",
    bio: "Fullstack разработчик с опытом создания высоконагруженных систем. Руководитель команды из 15 разработчиков.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:dmitry@itcentr.ru"
    }
  },
  {
    name: "Елена Козлова",
    role: "Менеджер проектов",
    image: "/placeholder.svg",
    bio: "Сертифицированный PMI специалист. Успешно реализовала более 50 проектов различной сложности.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:elena@itcentr.ru"
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Наша команда</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Эксперты IT-центра</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Профессионалы с многолетним опытом, готовые решать самые сложные задачи и помогать вашему бизнесу расти.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="animate-on-scroll">
              <Card className="border border-gray-100 dark:border-gray-800 h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-900">
                <div className="relative h-64 bg-orange-50 dark:bg-gray-800 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-orange-500 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 dark:text-gray-400">
                  <p>{member.bio}</p>
                </CardContent>
                <CardFooter className="flex gap-3 pt-2">
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.email} 
                    className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
