import { 
  Linkedin, Mail, Twitter 
} from "lucide-react";
import { 
  Card, CardContent, CardFooter, CardHeader 
} from "@/components/ui/card";

const team = [
  {
    name: "Александр Петров",
    position: "CEO / Основатель",
    image: "/placeholder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:alex@itcenter.com"
    }
  },
  {
    name: "Елена Смирнова",
    position: "Технический директор",
    image: "/placeholder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:elena@itcenter.com"
    }
  },
  {
    name: "Дмитрий Иванов",
    position: "Руководитель разработки",
    image: "/placeholder.svg",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:dmitriy@itcenter.com"
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">Наша команда</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Профессионалы своего дела</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            За каждым успешным проектом стоит команда опытных специалистов, 
            готовых решать самые сложные задачи
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="animate-on-scroll">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden pt-[100%]">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full flex justify-center space-x-4">
                        <a 
                          href={member.socials.linkedin} 
                          className="text-white hover:text-orange-400 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a 
                          href={member.socials.twitter} 
                          className="text-white hover:text-orange-400 transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a 
                          href={member.socials.email} 
                          className="text-white hover:text-orange-400 transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-center pt-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500">{member.position}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-5 flex justify-center">
                  <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
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
