import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      service: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "hello@modernsite.ru",
      link: "mailto:hello@modernsite.ru"
    },
    {
      icon: "fas fa-phone",
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      link: "tel:+74951234567"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Адрес",
      content: "Москва, ул. Тверская, 1",
      link: "#"
    },
    {
      icon: "fas fa-clock",
      title: "Часы работы",
      content: "Пн-Пт: 9:00-18:00",
      link: "#"
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
              Свяжитесь с нами
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку и мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Отправить сообщение</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Компания
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Название компании"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Интересующая услуга
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="web-development">Веб-разработка</option>
                      <option value="design">UI/UX Дизайн</option>
                      <option value="mobile">Мобильная разработка</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="seo">SEO продвижение</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full hover:scale-105 transition-transform duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Отправляем...
                      </>
                    ) : (
                      <>
                        Отправить сообщение
                        <i className="fas fa-paper-plane ml-2"></i>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Контактная информация</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className={`${info.icon} text-primary text-lg`}></i>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                          {info.link.startsWith('http') || info.link.startsWith('mailto') || info.link.startsWith('tel') ? (
                            <a 
                              href={info.link}
                              className="text-slate-600 hover:text-primary transition-colors duration-200"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-slate-600">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Мы в социальных сетях
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all duration-200"
                    >
                      <i className="fab fa-telegram"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all duration-200"
                    >
                      <i className="fab fa-vk"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all duration-200"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all duration-200"
                    >
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}