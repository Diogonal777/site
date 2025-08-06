import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import Sidebar from "@/components/sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // h-16 = 4rem = 64px
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsSidebarOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-inter">
      {/* Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <i className="fas fa-bolt text-white text-sm"></i>
                  </div>
                  <span className="ml-2 text-xl font-semibold text-slate-800">ModernSite</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/">
                <span className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium cursor-pointer">
                  Главная
                </span>
              </Link>
              <Link href="/about">
                <span className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium cursor-pointer">
                  О нас
                </span>
              </Link>
              <Link href="/services">
                <span className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium cursor-pointer">
                  Услуги
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium cursor-pointer">
                  Портфолио
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-slate-600 hover:text-primary transition-colors duration-200 font-medium cursor-pointer">
                  Контакты
                </span>
              </Link>
            </nav>

            {/* Menu Button */}
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={toggleSidebar}
                aria-expanded={isSidebarOpen}
              >
                <span className="sr-only">Открыть меню</span>
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative bg-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-slate-900 sm:text-5xl lg:text-6xl">
                Современные веб-решения
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600">
                Мы создаем инновационные и функциональные веб-сайты, которые помогают вашему бизнесу расти и развиваться в цифровой среде.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="inline-flex items-center px-8 py-3 text-base font-medium rounded-lg bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:scale-105">
                    Начать проект
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    variant="outline"
                    className="inline-flex items-center px-8 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                  >
                    Узнать больше
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  О нашей компании
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Мы команда профессионалов с многолетним опытом в области веб-разработки и дизайна. Наша миссия — создавать цифровые продукты, которые не только красивы, но и функциональны.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle text-accent text-xl"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-slate-900">Индивидуальный подход</h3>
                      <p className="text-slate-600">Каждый проект уникален и требует особого внимания</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle text-accent text-xl"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-slate-900">Современные технологии</h3>
                      <p className="text-slate-600">Используем передовые инструменты и фреймворки</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle text-accent text-xl"></i>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-slate-900">Полная поддержка</h3>
                      <p className="text-slate-600">Сопровождаем проект на всех этапах разработки</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern office workspace" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Наши услуги
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                Полный спектр услуг для создания успешного цифрового присутствия
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-8 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <i className="fas fa-laptop-code text-primary text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Веб-разработка</h3>
                  <p className="text-slate-600 mb-6">Создание современных и функциональных веб-сайтов с использованием передовых технологий.</p>
                  <a href="#" className="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                    Подробнее <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="p-8 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <i className="fas fa-palette text-accent text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">UI/UX Дизайн</h3>
                  <p className="text-slate-600 mb-6">Создание интуитивных и привлекательных пользовательских интерфейсов.</p>
                  <a href="#" className="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                    Подробнее <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="p-8 hover:shadow-md transition-shadow duration-300 hover:border-primary/20">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                    <i className="fas fa-mobile-alt text-secondary text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Мобильная адаптация</h3>
                  <p className="text-slate-600 mb-6">Оптимизация сайтов для всех типов устройств и экранов.</p>
                  <a href="#" className="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                    Подробнее <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Наши проекты
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                Примеры успешно реализованных проектов
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="E-commerce project" 
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">E-commerce платформа</h3>
                  <p className="text-slate-600 mb-4">Современный интернет-магазин с интегрированной системой платежей и управления заказами.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">MongoDB</span>
                  </div>
                  <a href="#" className="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                    Посмотреть проект <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="Corporate website" 
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Корпоративный сайт</h3>
                  <p className="text-slate-600 mb-4">Представительский сайт крупной компании с CMS для управления контентом.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Vue.js</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Laravel</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">MySQL</span>
                  </div>
                  <a href="#" className="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                    Посмотреть проект <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="Mobile app project" 
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Мобильное приложение</h3>
                  <p className="text-slate-600 mb-4">Кроссплатформенное мобильное приложение для управления финансами.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">React Native</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Firebase</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Redux</span>
                  </div>
                  <a href="#" className="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                    Посмотреть проект <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Свяжитесь с нами
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                Готовы обсудить ваш проект? Напишите нам!
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-slate-900">Адрес</h4>
                      <p className="text-slate-600">Москва, ул. Примерная, 123, офис 456</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-phone text-primary text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-slate-900">Телефон</h4>
                      <p className="text-slate-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-envelope text-primary text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-slate-900">Email</h4>
                      <p className="text-slate-600">info@modernsite.ru</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium text-slate-900 mb-4">Следите за нами</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-200">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-200">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-200">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-200">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Имя
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Расскажите о вашем проекте..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:scale-105"
                  >
                    Отправить сообщение
                    <i className="fas fa-paper-plane ml-2"></i>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <i className="fas fa-bolt text-white text-sm"></i>
                </div>
                <span className="ml-2 text-xl font-semibold">ModernSite</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Создаем современные веб-решения, которые помогают бизнесу расти и развиваться в цифровой среде.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors duration-200">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors duration-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors duration-200">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors duration-200">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Веб-разработка</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">UI/UX Дизайн</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Мобильные приложения</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-slate-400">Москва, ул. Примерная, 123</li>
                <li><a href="tel:+74951234567" className="text-slate-400 hover:text-white transition-colors duration-200">+7 (495) 123-45-67</a></li>
                <li><a href="mailto:info@modernsite.ru" className="text-slate-400 hover:text-white transition-colors duration-200">info@modernsite.ru</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 ModernSite. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
