import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { brandConfig } from '@/lib/config';
import { Presentation, Video, Camera, Clock, Users, Calendar, Check, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eventos e Palestras | Modkovski Fotografia',
  description: 'Cobertura fotográfica e em vídeo para eventos corporativos, palestras, congressos e celebrações especiais.',
  openGraph: {
    title: 'Eventos e Palestras | Modkovski Fotografia',
    description: 'Cobertura fotográfica e em vídeo para eventos corporativos, palestras e celebrações.',
  },
};

export default function EventosPage() {
  const eventTypes = [
    {
      title: 'Palestras & Workshops',
      desc: 'Registro completo do palestrante no palco, engajamento do público, fotos em alta resolução e cortes em vídeo com áudio limpo.',
      icon: Presentation,
    },
    {
      title: 'Eventos Corporativos',
      desc: 'Imagens institucionais elegantes, networking, estandes e materiais prontos para divulgação no LinkedIn e imprensa.',
      icon: Users,
    },
    {
      title: 'Celebrações & Aniversários',
      desc: 'Momentos espontâneos, fotos protocolares, alegria dos convidados e cobertura carinhosa para festas sociais e marcos de vida.',
      icon: Sparkles,
    },
    {
      title: 'Conteúdo para Redes (Reels/Stories)',
      desc: 'Captação na vertical, cortes rápidos, legendas dinâmicas e entregas ágeis para publicação durante e logo após o evento.',
      icon: Video,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-brand-cream text-brand-text flex flex-col selection:bg-brand-wine selection:text-white" id="eventos-page">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 border-b border-brand-wine/10 bg-radial from-brand-wine/5 via-transparent to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-wine font-semibold block mb-4">
            Cobertura Audiovisual Profissional
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-brand-wine leading-[1.1] mb-6">
            Eventos, Palestras & <br />
            <span className="italic font-normal">Momentos Memoráveis.</span>
          </h1>
          <p className="font-serif italic text-base md:text-xl text-brand-text-soft max-w-2xl mx-auto leading-relaxed mb-10">
            A energia, a autoridade e as conexões do seu evento registradas com estética refinada, velocidade de entrega e máxima qualidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${brandConfig.whatsApp.number}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para cobertura de evento/palestra com a Modkovski Fotografia.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-wine text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-wine-dark transition-all duration-300 flex items-center gap-2.5 shadow-md group"
              id="hero-eventos-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Orçamento de Evento</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white border border-brand-wine/20 text-brand-wine text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-wine/5 transition-all duration-300"
            >
              Ver Portfólio em Vídeo e Foto
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Rate Card */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto w-full">
        <div className="bg-brand-wine text-white p-8 md:p-12 border border-brand-wine-dark shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 text-[10px] tracking-widest uppercase font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Pacote Especial para Palestras</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-light">
              Cobertura de Palestras e Eventos Curtos
            </h2>
            <p className="text-xs md:text-sm text-white/80 font-light max-w-xl leading-relaxed">
              Investimento base de <strong className="text-white font-bold">R$ 150,00</strong> para até 2 horas de captação. Também ajustamos horários, diárias completas e valores de acordo com as particularidades do seu evento.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center md:items-end">
            <span className="text-3xl md:text-4xl font-serif font-light text-white mb-2">
              R$ 150<span className="text-base font-sans font-light">,00</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-white/70 mb-4">
              Até 2 horas de cobertura
            </span>
            <a
              href={`https://wa.me/${brandConfig.whatsApp.number}?text=${encodeURIComponent('Olá! Gostaria de agendar ou personalizar a cobertura de palestra/evento (base R$ 150,00 para até 2 horas).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-brand-wine text-xs tracking-[0.18em] uppercase font-semibold hover:bg-brand-cream transition-colors duration-200 flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reservar Data</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-brand-wine font-semibold block mb-2">
            Modalidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-wine font-light">
            Soluções completas de cobertura
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/90 p-8 border border-brand-wine/10 hover:border-brand-wine/30 transition-all duration-300 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="w-12 h-12 bg-brand-wine/10 text-brand-wine flex items-center justify-center rounded-xs mb-5">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-wine mb-3 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-soft font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-wine/10 flex items-center justify-between text-xs text-brand-wine font-medium">
                  <span className="tracking-widest uppercase text-[10px]">Sob consulta & cronograma</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Event Testimonial */}
      <section className="py-16 bg-white/70 border-y border-brand-wine/10 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-wine font-semibold block mb-4">
            Depoimento Real de Evento
          </span>
          <blockquote className="font-serif italic text-lg md:text-2xl text-brand-text-soft leading-relaxed mb-6">
            “A gente recebeu o serviço de fotografia e de filmagem, gostamos muito, elas foram bem atenciosas com todos os nossos convidados. A gente teve algumas intercorrências aqui na festa, elas aguardaram e fizeram um serviço maravilhoso. A gente ficou encantado, agradecemos muito.”
          </blockquote>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-wine block">
            Poliane e Julian — Aniversário de 1 Ano da Heloísa
          </span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-brand-wine font-light mb-6">
          Precisa de cobertura para o seu evento?
        </h2>
        <p className="text-sm md:text-base text-brand-text-soft font-light leading-relaxed mb-8 max-w-xl mx-auto">
          Fale diretamente com nossa equipe no WhatsApp para receber um alinhamento personalizado e garantir a data na nossa agenda.
        </p>
        <a
          href={`https://wa.me/${brandConfig.whatsApp.number}?text=${encodeURIComponent('Olá! Gostaria de consultar disponibilidade para um evento/palestra com a Modkovski Fotografia.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-wine text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-wine-dark transition-all duration-300 shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Solicitar Orçamento no WhatsApp</span>
        </a>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
