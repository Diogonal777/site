import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce платформа",
      description: "Современный интернет-магазин с интегрированной системой платежей и управления заказами.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Корпоративный сайт",
      description: "Представительский сайт для крупной компании с системой управления контентом.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      category: "Корпоративный",
      year: "2024"
    },
    {
      title: "Мобильное приложение",
      description: "iOS и Android приложение для управления задачами и проектами.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      year: "2023"
    },
    {
      title: "Образовательная платформа",
      description: "Онлайн-платформа для дистанционного обучения с видеоконференциями.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "WebRTC", "PostgreSQL"],
      category: "EdTech",
      year: "2023"
    },
    {
      title: "Финтех решение",
      description: "Платформа для онлайн-платежей и финансовой аналитики.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Angular", "Python", "Redis"],
      category: "FinTech",
      year: "2023"
    },
    {
      title: "CRM система",
      description: "Система управления взаимоотношениями с клиентами для малого бизнеса.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Express", "MongoDB"],
      category: "SaaS",
      year: "2022"
    }
  ];

  const categories = ["Все", "E-commerce", "Корпоративный", "Mobile", "EdTech", "FinTech", "SaaS"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-inter">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <i className="fas fa-bolt text-white text-sm"></i>
                </div>
                <span className="ml-2 text-xl font-semibold text-slate-800">ModernSite</span>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline">
                <i className="fas fa-arrow-left mr-2"></i>
                Назад на главную
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Наши проекты
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Примеры успешно реализованных проектов в различных сферах бизнеса
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Все" ? "default" : "outline"}
                size="sm"
                className="hover:scale-105 transition-transform duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-white/90 text-slate-700 text-xs rounded-full font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-blue-700">
                      <i className="fas fa-external-link-alt mr-2 text-xs"></i>
                      Подробнее
                    </Button>
                    <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-800">
                      <i className="fas fa-code mr-2 text-xs"></i>
                      Код
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Готовы начать свой проект?
                </h3>
                <p className="text-slate-600 mb-6">
                  Давайте обсудим ваши идеи и создадим что-то удивительное вместе
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="hover:scale-105 transition-transform duration-200">
                      Начать проект
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200">
                    Посмотреть кейсы
                    <i className="fas fa-file-alt ml-2"></i>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}