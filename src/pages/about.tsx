import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              О нашей компании
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Мы команда профессионалов с многолетним опытом в области веб-разработки и дизайна
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Наша миссия</h2>
              <p className="text-lg text-slate-600 mb-6">
                Создавать цифровые продукты, которые не только красивы, но и функциональны. 
                Мы верим, что каждый проект должен решать реальные бизнес-задачи и приносить пользу пользователям.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-accent text-xl mt-1"></i>
                  <div className="ml-3">
                    <h3 className="font-semibold text-slate-900">Качество превыше всего</h3>
                    <p className="text-slate-600">Каждая деталь важна для нас</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-accent text-xl mt-1"></i>
                  <div className="ml-3">
                    <h3 className="font-semibold text-slate-900">Инновационный подход</h3>
                    <p className="text-slate-600">Используем самые современные технологии</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-accent text-xl mt-1"></i>
                  <div className="ml-3">
                    <h3 className="font-semibold text-slate-900">Клиентоориентированность</h3>
                    <p className="text-slate-600">Ваш успех - это наш успех</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Our team working together" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">50+</h3>
                <p className="text-slate-600">Довольных клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-project-diagram text-accent text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">100+</h3>
                <p className="text-slate-600">Реализованных проектов</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-secondary text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">5</h3>
                <p className="text-slate-600">Лет опыта</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}