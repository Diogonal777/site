import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [location] = useLocation();

  // Close sidebar when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const menuItems = [
    {
      title: "Главная",
      icon: "fas fa-home",
      href: "/",
      description: "Главная страница"
    },
    {
      title: "О нас",
      icon: "fas fa-users",
      href: "/about",
      description: "О нашей компании"
    },
    {
      title: "Услуги",
      icon: "fas fa-briefcase",
      href: "/services",
      description: "Наши услуги и цены"
    },
    {
      title: "Портфолио",
      icon: "fas fa-image",
      href: "/portfolio",
      description: "Наши проекты"
    },
    {
      title: "Контакты",
      icon: "fas fa-envelope",
      href: "/contact",
      description: "Связаться с нами"
    }
  ];

  const handleItemClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <i className="fas fa-bolt text-white text-sm"></i>
            </div>
            <span className="ml-2 text-xl font-semibold text-slate-800">ModernSite</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-600 hover:text-slate-800 hover:bg-slate-100"
          >
            <i className="fas fa-times text-lg"></i>
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="p-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => {
              const isActive = location === item.href;
              return (
                <Link key={index} href={item.href} onClick={handleItemClick}>
                  <div
                    className={`group flex items-center p-4 rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? "bg-white/20"
                          : "bg-slate-100 group-hover:bg-primary/10"
                      }`}
                    >
                      <i
                        className={`${item.icon} text-lg ${
                          isActive ? "text-white" : "text-slate-600 group-hover:text-primary"
                        }`}
                      ></i>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3
                        className={`font-medium text-base ${
                          isActive ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isActive ? "text-white/80" : "text-slate-500"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className="ml-2">
                      <i
                        className={`fas fa-chevron-right text-sm transition-transform duration-200 ${
                          isActive
                            ? "text-white/80"
                            : "text-slate-400 group-hover:text-primary group-hover:translate-x-1"
                        }`}
                      ></i>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 bg-slate-50">
          <div className="text-center">
            <p className="text-sm text-slate-600 mb-3">Нужна помощь?</p>
            <Link href="/contact" onClick={handleItemClick}>
              <Button
                size="sm"
                className="w-full hover:scale-105 transition-transform duration-200"
              >
                <i className="fas fa-phone mr-2"></i>
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}