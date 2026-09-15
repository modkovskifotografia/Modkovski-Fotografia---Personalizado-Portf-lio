'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { brandConfig } from '@/lib/config';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Casamentos', href: '/casamento' },
    { name: 'Eventos & Palestras', href: '/eventos' },
    { name: 'Portfólio', href: '/portfolio' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-xs border-b border-brand-wine/10 py-3' 
          : 'bg-brand-cream/90 backdrop-blur-xs py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="inline-flex items-center gap-2 group" id="nav-logo-link">
          <Logo className="transform group-hover:opacity-90 transition-opacity" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 ${
                  isActive 
                    ? 'text-brand-wine font-semibold' 
                    : 'text-brand-text/70 hover:text-brand-wine'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-wine rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp CTA desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`https://wa.me/${brandConfig.whatsApp.number}?text=${encodeURIComponent(
              pathname === '/casamento' 
                ? 'Olá! Vi o site da Modkovski Fotografia e gostaria de receber um orçamento para Casamento.' 
                : pathname === '/eventos'
                ? 'Olá! Vi o site da Modkovski Fotografia e gostaria de um orçamento para cobertura de Evento/Palestra.'
                : 'Olá! Vi a proposta da Modkovski Fotografia e gostaria de conversar sobre meu projeto.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-brand-wine text-white text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-brand-wine-dark transition-all duration-300 flex items-center gap-2 shadow-xs group"
            id="nav-whatsapp-cta"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Fale Conosco</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-wine hover:text-brand-wine-dark focus:outline-hidden"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="md:hidden bg-brand-cream border-b border-brand-wine/15 px-6 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.18em] py-2 border-b border-brand-wine/10 ${
                    isActive ? 'text-brand-wine font-bold' : 'text-brand-text/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <a
            href={`https://wa.me/${brandConfig.whatsApp.number}?text=${encodeURIComponent(
              pathname === '/casamento' 
                ? 'Olá! Vi o site da Modkovski Fotografia e gostaria de receber um orçamento para Casamento.' 
                : pathname === '/eventos'
                ? 'Olá! Vi o site da Modkovski Fotografia e gostaria de um orçamento para cobertura de Evento/Palestra.'
                : 'Olá! Vi a proposta da Modkovski Fotografia e gostaria de conversar sobre meu projeto.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 bg-brand-wine text-white text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 shadow-xs text-center"
            id="mobile-nav-whatsapp-cta"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
