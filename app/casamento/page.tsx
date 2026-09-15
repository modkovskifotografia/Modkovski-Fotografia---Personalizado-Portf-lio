import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { brandConfig } from '@/lib/config';
import { Heart, Camera, Film, Sparkles, MessageCircle, Check, ArrowRight, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Casamentos | Modkovski Fotografia',
  description: 'O registro certo pode eternizar o seu momento. Fotografia e filmes de casamento com sensibilidade e olhar artístico.',
  openGraph: {
    title: 'Casamentos | Modkovski Fotografia',
    description: 'O registro certo pode eternizar o seu momento. Fotografia e filmes de casamento.',
  },
};

export default function CasamentoPage() {
  const weddingPhotos = [
    { src: '/images/portfolio-05.jpg', fallback: 'https://picsum.photos/seed/modkovski-wedding1/1200/1500', caption: 'A Cerimônia', alt: 'Noivos na cerimônia de casamento' },
    { src: '/images/portfolio-01.jpg', fallback: 'https://picsum.photos/seed/modkovski-wedding2/1200/1500', caption: 'O Primeiro Olhar', alt: 'Olhar dos noivos' },
    { src: '/images/portfolio-03.jpg', fallback: 'https://picsum.photos/seed/modkovski-wedding3/1200/1500', caption: 'Cumplicidade', alt: 'Casal apaixonado' },
    { src: '/images/portfolio-04.jpg', fallback: 'https://picsum.photos/seed/modkovski-wedding4/1200/1500', caption: 'A Aliança', alt: 'Troca de alianças' },
    { src: '/images/portfolio-02.jpg', fallback: 'https://picsum.photos/seed/modkovski-wedding5/1200/1500', caption: 'Celebração', alt: 'Festa de casamento' },
    { src: '/images/portfolio-06.jpg', fallback: 'https://picsum.photos/seed/modkovski-wedding6/1200/1500', caption: 'Para Sempre', alt: 'Casamento ao pôr do sol' },
  ];

  const weddingHighlights = [
    {
      icon: Camera,
      title: 'Fotografia Autêntica',
      description: 'Capturamos a espontaneidade dos sentimentos, sem poses engessadas, priorizando a verdade e a beleza do instante.',
    },
    {
      icon: Film,
      title: 'Filmes Cinematográficos',
      description: 'Vídeos com narrativa emocionante, edição dinâmica, color grading acolhedor e trilha sonora envolvente.',
    },
    {
      icon: Sparkles,
      title: 'Direção Delicada',
      description: 'Condução leve e acolhedora durante o ensaio do casal para que vocês se sintam completamente à vontade.',
    },
    {
      icon: Award,
      title: 'Entrega Premium',
      description: 'Tratamento fino de imagem, curadoria criteriosa de fotos e galeria digital segura de alta resolução.',
    },
  ];

  const weddingSteps = [
    { num: '01', title: 'Alinhamento & Reunião', desc: 'Conversamos sobre o estilo, cronograma e preferências do casal.' },
    { num: '02', title: 'Ensaio Pré-Wedding', desc: 'Sessão intimista para criar sintonia e memórias antes do grande dia.' },
    { num: '03', title: 'O Grande Dia', desc: 'Cobertura completa desde o making of, cerimônia até os melhores momentos da festa.' },
    { num: '04', title: 'Galeria & Filme', desc: 'Seleção em plataforma online e entrega de fotos tratadas e teaser/filme.' },
  ];

  return (
    <div className="w-full min-h-screen bg-brand-cream text-brand-text flex flex-col selection:bg-brand-wine selection:text-white" id="casamento-page">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-brand-wine/10 overflow-hidden bg-radial from-brand-wine/5 via-transparent to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-wine font-semibold block mb-4">
            Fotografia & Filme de Casamento
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-brand-wine leading-[1.1] mb-6">
            O registro certo pode <br />
            <span className="italic font-normal">eternizar o seu momento.</span>
          </h1>
          <p className="font-serif italic text-base md:text-xl text-brand-text-soft max-w-2xl mx-auto leading-relaxed mb-10">
            Cada olhar trocado no altar, a lágrima discreta e o abraço apertado registrados com sensibilidade e arte para as próximas gerações.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${brandConfig.whatsApp.number}?text=${encodeURIComponent('Olá! Gostaria de receber um orçamento para cobertura de Casamento com a Modkovski Fotografia.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-wine text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-wine-dark transition-all duration-300 flex items-center gap-2.5 shadow-md group"
              id="hero-casamento-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Orçamento de Casamento</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white border border-brand-wine/20 text-brand-wine text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-wine/5 transition-all duration-300"
            >
              Ver Portfólio Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Pillars */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-wine font-semibold block mb-2">
            Nossa Proposta
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-wine font-light">
            Como contamos a história do seu amor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {weddingHighlights.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white/80 p-8 border border-brand-wine/10 flex flex-col items-start hover:border-brand-wine/30 transition-all duration-300 shadow-2xs"
              >
                <div className="w-12 h-12 bg-brand-wine/10 text-brand-wine flex items-center justify-center rounded-xs mb-6">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-brand-wine mb-3 font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-soft font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Photo Gallery preview */}
      <section className="py-16 bg-white/60 border-y border-brand-wine/10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-wine font-semibold block mb-2">
                Galeria
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-wine font-light">
                Fragmentos de emoção
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-wine font-medium hover:underline"
            >
              <span>Acessar acervo completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingPhotos.map((photo, i) => (
              <div key={i} className="group relative aspect-4/5 overflow-hidden bg-brand-wine/5 border border-brand-wine/10 shadow-xs">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-wine-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-serif text-white text-lg italic tracking-wide">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Process Steps */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-wine font-semibold block mb-2">
            Etapas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-wine font-light">
            Como funciona a contratação
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingSteps.map((step, idx) => (
            <div key={idx} className="border-t-2 border-brand-wine/30 pt-6">
              <span className="font-serif text-3xl text-brand-wine/40 font-light block mb-2">
                {step.num}
              </span>
              <h3 className="font-serif text-lg text-brand-wine font-medium mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-brand-text-soft font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 bg-brand-wine text-white px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-8 h-8 mx-auto mb-6 text-white/70 fill-white/20" />
          <blockquote className="font-serif italic text-lg md:text-2xl font-light leading-relaxed mb-6">
            “Eu queria muito eternizar esse momento e compartilhar a nossa alegria, sou muito grata. A equipe nos conduziu de forma leve e divertida.”
          </blockquote>
          <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-medium">
            Andressa e Deivison — 1 Ano de Casados
          </span>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-brand-wine font-light mb-6">
          Vamos planejar a cobertura do seu casamento?
        </h2>
        <p className="text-sm md:text-base text-brand-text-soft font-light leading-relaxed mb-8 max-w-xl mx-auto">
          Entre em contato conosco para verificar a disponibilidade da sua data e receber uma proposta detalhada para o seu grande dia.
        </p>
        <a
          href={`https://wa.me/${brandConfig.whatsApp.number}?text=${encodeURIComponent('Olá! Gostaria de verificar a disponibilidade de data e receber uma proposta para casamento com a Modkovski Fotografia.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-wine text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-wine-dark transition-all duration-300 shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Falar no WhatsApp com a Fotógrafa</span>
        </a>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
