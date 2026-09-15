'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Portfolio from '@/components/Portfolio';
import { brandConfig } from '@/lib/config';
import { Camera, Film, Sparkles, MessageCircle, ArrowRight, Instagram, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'casamentos' | 'eventos' | 'ensaios' | 'videos';
  title: string;
  subtitle: string;
  type: 'image' | 'video';
  src: string;
  fallbackSrc: string;
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'casamentos' | 'eventos' | 'ensaios' | 'videos'>('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-casamento-1',
      category: 'casamentos',
      title: 'A Cerimônia',
      subtitle: 'O ápice da promessa e do amor.',
      type: 'image',
      src: '/images/portfolio-05.jpg',
      fallbackSrc: 'https://picsum.photos/seed/modkovski-port-casamento1/1200/1500',
    },
    {
      id: 'g-casamento-2',
      category: 'casamentos',
      title: 'Primeiro Olhar',
      subtitle: 'A emoção silenciosa antes do altar.',
      type: 'image',
      src: '/images/portfolio-01.jpg',
      fallbackSrc: 'https://picsum.photos/seed/modkovski-port-casamento2/1200/1500',
    },
    {
      id: 'g-casamento-3',
      category: 'casamentos',
      title: 'Cumplicidade',
      subtitle: 'A conexão capturada de forma pura.',
      type: 'image',
      src: '/images/portfolio-03.jpg',
      fallbackSrc: 'https://picsum.photos/seed/modkovski-port-casamento3/1200/1500',
    },
    {
      id: 'g-evento-1',
      category: 'eventos',
      title: 'Palestras & Palco',
      subtitle: 'Autoridade e engajamento da plateia.',
      type: 'image',
      src: '/images/portfolio-02.jpg',
      fallbackSrc: 'https://picsum.photos/seed/modkovski-port-evento1/1200/1500',
    },
    {
      id: 'g-evento-2',
      category: 'eventos',
      title: 'Celebração de Aniversário',
      subtitle: 'Sorrisos e momentos em família.',
      type: 'image',
      src: '/images/portfolio-04.jpg',
      fallbackSrc: 'https://picsum.photos/seed/modkovski-port-evento2/1200/1500',
    },
    {
      id: 'g-ensaio-1',
      category: 'ensaios',
      title: 'Retrato de Autoridade',
      subtitle: 'Posicionamento e elegância feminina.',
      type: 'image',
      src: '/images/portfolio-06.jpg',
      fallbackSrc: 'https://picsum.photos/seed/modkovski-port-ensaio1/1200/1500',
    },
  ];

  const filteredItems = activeFilter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="w-full min-h-screen bg-brand-cream text-brand-text flex flex-col selection:bg-brand-wine selection:text-white" id="portfolio-page">
      <Navbar />

      {/* Header Section */}
      <section className="py-20 px-6 md:px-12 border-b border-brand-wine/10 bg-radial from-brand-wine/5 via-transparent to-transparent text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-wine font-semibold block mb-4">
            Acervo Visual & Audiovisual
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-brand-wine leading-[1.1] mb-6">
            Portfólio Modkovski Fotografia
          </h1>
          <p className="font-serif italic text-base md:text-xl text-brand-text-soft max-w-2xl mx-auto leading-relaxed mb-8">
            Uma seleção de olhares, enquadramentos e narrativas que eternizam sentimentos reais.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/70 border border-brand-wine/15 rounded-full shadow-2xs">
            {[
              { label: 'Todos', value: 'todos' },
              { label: 'Casamentos', value: 'casamentos' },
              { label: 'Eventos & Palestras', value: 'eventos' },
              { label: 'Ensaios', value: 'ensaios' },
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value as typeof activeFilter)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.value
                    ? 'bg-brand-wine text-white shadow-xs'
                    : 'text-brand-text-soft hover:text-brand-wine hover:bg-brand-wine/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery Grid */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer relative aspect-4/5 overflow-hidden bg-brand-wine/5 border border-brand-wine/10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-wine/30"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-wine-dark/85 via-brand-wine-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-white text-xl font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section using main Portfolio component */}
      <section className="py-8 bg-white/40 border-t border-brand-wine/10">
        <div className="text-center pt-8 pb-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-wine font-semibold block mb-2">
            Produção Audiovisual
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-wine font-light">
            Filmes & Vídeos em Destaque
          </h2>
        </div>
        <Portfolio />
      </section>

      {/* Instagram banner */}
      <section className="py-16 px-6 md:px-12 bg-brand-wine text-white text-center">
        <div className="max-w-2xl mx-auto">
          <Instagram className="w-8 h-8 mx-auto mb-4 text-white/80" />
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-3">
            Acompanhe mais publicações no Instagram
          </h2>
          <p className="text-xs md:text-sm text-white/80 font-light mb-6">
            Confira nossos bastidores diários, postagens recentes e novos projetos em nosso perfil oficial.
          </p>
          <a
            href={brandConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-wine text-xs tracking-[0.18em] uppercase font-semibold hover:bg-brand-cream transition-colors duration-200"
          >
            <span>{brandConfig.instagram.handle}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-brand-cream p-4 border border-brand-wine/20 shadow-2xl flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-brand-wine hover:text-brand-wine-dark bg-white/80 rounded-full cursor-pointer z-10"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-[80vw] max-w-3xl h-[65vh] overflow-hidden bg-brand-wine/10">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-serif text-xl text-brand-wine font-medium">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-brand-text-soft font-light mt-1">
                {selectedImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
