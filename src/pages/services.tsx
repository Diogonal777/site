import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Веб-разработка",
      description: "Создание современных и функциональных веб-сайтов с использованием передовых технологий.",
      features: ["React/Vue.js", "Node.js/Python", "База данных", "API интеграция"],
      price: "от 50 000 ₽"
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Дизайн",
      description: "Создание интуитивных и привлекательных пользовательских интерфейсов.",
      features: ["Прототипирование", "Дизайн-система", "Пользовательские тесты", "Адаптивный дизайн"],
      price: "от 30 000 ₽"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Мобильная адаптация",
      description: "Оптимизация сайтов для всех типов устройств и экранов.",
      features: ["Responsive дизайн", "Touch интерфейсы", "Оптимизация скорости", "PWA"],
      price: "от 20 000 ₽"
    },
    {
      icon: "fas fa-search",
      title: "SEO оптимизация",
      description: "Продвижение сайта в поисковых системах для увеличения трафика.",
      features: ["Техническое SEO", "Контент-стратегия", "Аналитика", "Отчетность"],
      price: "от 15 000 ₽"
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce решения",
      description: "Разработка интернет-магазинов и платежных систем.",
      features: ["Каталог товаров", "Корзина и заказы", "Платежные системы", "Админ-панель"],
      price: "от 80 000 ₽"
    },
    {
      icon: "fas fa-tools",
      title: "Техническая поддержка",
      description: "Обслуживание и развитие существующих проектов.",
      features: ["Мониторинг", "Обновления", "Резервное копирование", "Консультации"],
      price: "от 10 000 ₽/мес"
    }
  ];

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
              Наши услуги
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Полный спектр услуг для создания успешного цифрового присутствия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <i className={`${service.icon} text-primary text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-slate-900 mb-3">Что включено:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <i className="fas fa-check text-accent text-xs mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-900">{service.price}</span>
                      <Button size="sm" className="hover:scale-105 transition-transform duration-200">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Нужно индивидуальное решение?
                </h3>
                <p className="text-slate-600 mb-6">
                  Свяжитесь с нами для обсуждения вашего проекта и получения персонального предложения
                </p>
                <Link href="/contact">
                  <Button size="lg" className="hover:scale-105 transition-transform duration-200">
                    Получить консультацию
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}