"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap, Globe, Brain, TrendingUp, ArrowRight, CheckCircle,
  Users, Star, Shield, Play, ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Zap,
    color: "#00D4FF",
    title: "Automatizaciones",
    desc: "Optimizamos tus procesos de negocio con flujos inteligentes que trabajan 24/7, reduciendo costos y eliminando tareas repetitivas.",
    features: ["n8n & Make.com", "Integraciones API", "Bots & Chatbots", "CRM Automation"],
    href: "/servicios#automatizaciones",
  },
  {
    icon: Globe,
    color: "#7C3AED",
    title: "Desarrollo Web",
    desc: "Creamos sitios web modernos, rápidos y escalables para personas, profesionales y empresas con diseño enfocado en resultados.",
    features: ["Landing Pages", "E-commerce", "Portales Empresariales", "Web Apps"],
    href: "/servicios#web",
  },
  {
    icon: Brain,
    color: "#00FF94",
    title: "Formación en IA",
    desc: "Programas educativos personalizados en Inteligencia Artificial para estudiantes, docentes y profesionales de todos los niveles en Venezuela.",
    features: ["Cursos Básicos a Avanzados", "Talleres Prácticos", "Certificaciones", "Formación Empresarial"],
    href: "/formacion",
  },
  {
    icon: TrendingUp,
    color: "#F59E0B",
    title: "Marketing Digital",
    desc: "Estrategias de marketing e imagen corporativa digital que posicionan tu marca y generan resultados medibles y sostenibles.",
    features: ["Identidad Corporativa", "Redes Sociales", "SEO & SEM", "Branding Digital"],
    href: "/marketing",
  },
];

const stats = [
  { number: "150+", label: "Proyectos Entregados" },
  { number: "200+", label: "Estudiantes Formados" },
  { number: "50+", label: "Clientes Activos" },
  { number: "98%", label: "Satisfacción" },
];

const testimonials = [
  {
    name: "María González",
    role: "Directora, TechStart VE",
    text: "GroupEduTech transformó nuestros procesos internos. Las automatizaciones que implementaron nos ahorraron 30 horas semanales. ¡Increíble equipo!",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Emprendedor Digital",
    text: "El curso de IA para mi equipo fue excepcional. Ahora usamos herramientas de inteligencia artificial en nuestras operaciones diarias con total confianza.",
    rating: 5,
  },
  {
    name: "Laura Sánchez",
    role: "CEO, Moda Caracas",
    text: "Renovaron nuestra presencia digital completamente. El e-commerce y la estrategia de marketing superaron todas nuestras expectativas de ventas.",
    rating: 5,
  },
];

const whyUs = [
  { icon: Shield, text: "Equipo certificado con experiencia internacional" },
  { icon: Zap, text: "Soluciones hechas a medida para el mercado venezolano" },
  { icon: Users, text: "Acompañamiento continuo post-entrega" },
  { icon: Star, text: "Tecnología de vanguardia accesible para todos" },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function HomePage() {
  const [typed, setTyped] = useState("");
  const words = ["Automatizamos.", "Desarrollamos.", "Educamos.", "Potenciamos."];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const speed = deleting ? 50 : 90;
    const timer = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setTyped(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setCharIdx(0);
          setWordIdx((w) => (w + 1) % words.length);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIdx, deleting, wordIdx]);

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00D4FF]/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[120px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-sm font-medium px-4 py-2 rounded-full mb-8"
            >
              <Zap className="w-3.5 h-3.5" />
              Tecnología · Educación · Innovación — Venezuela
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              <span className="gradient-text">{typed}</span>
              <span className="animate-pulse text-[#00D4FF]">|</span>
              <br />
              <span className="text-white">Tu negocio al siguiente nivel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Somos el grupo venezolano que une <strong className="text-white">automatizaciones</strong>,{" "}
              <strong className="text-white">desarrollo web</strong>,{" "}
              <strong className="text-white">formación en IA</strong> y{" "}
              <strong className="text-white">marketing digital</strong> para impulsar tu éxito.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contacto" className="btn-primary text-base px-8 py-4 flex items-center gap-2">
                Iniciar Proyecto <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/servicios" className="btn-outline text-base px-8 py-4 flex items-center gap-2">
                Ver Servicios <Play className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold gradient-text mb-1">{s.number}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">Nuestras Áreas</span>
            <h2 className="section-heading mt-3 mb-4">
              Todo lo que tu negocio<br />
              <span className="gradient-text">necesita para crecer</span>
            </h2>
            <p className="section-sub mx-auto">
              Ofrecemos un ecosistema completo de servicios tecnológicos para que tu empresa avance con confianza.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={svc.href}
                  className="block bg-[#0D1526] border border-white/5 rounded-2xl p-8 card-glow h-full"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}25` }}
                  >
                    <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: svc.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="flex items-center gap-1 text-sm font-medium" style={{ color: svc.color }}>
                    Conocer más <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">¿Por qué elegirnos?</span>
              <h2 className="section-heading mt-3 mb-6">
                Comprometidos con tu<br />
                <span className="gradient-text">transformación digital</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                En GroupEduTech no solo entregamos proyectos, construimos alianzas estratégicas. Nuestro enfoque integral combina tecnología de punta con comprensión profunda del contexto venezolano.
              </p>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item.text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                    <span className="text-gray-300 pt-2.5 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Visual card stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-[#7C3AED]/10 rounded-3xl blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { label: "Automatizaciones", val: "40%", sub: "Ahorro de tiempo promedio" },
                  { label: "Rendimiento Web", val: "99%", sub: "Uptime garantizado" },
                  { label: "Satisfacción", val: "4.9/5", sub: "Calificación de clientes" },
                  { label: "Soporte", val: "24/7", sub: "Disponibilidad de asistencia" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#060B18] border border-white/8 rounded-2xl p-5">
                    <div className="text-2xl font-extrabold gradient-text mb-1">{item.val}</div>
                    <div className="text-white text-sm font-semibold mb-1">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">Testimonios</span>
            <h2 className="section-heading mt-3">
              Lo que dicen <span className="gradient-text">nuestros clientes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-[#0D1526] border border-white/5 rounded-2xl p-7 card-glow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/8 via-transparent to-[#7C3AED]/8" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="section-heading mb-6">
              ¿Listo para llevar tu negocio<br />
              <span className="gradient-text">al siguiente nivel?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Agenda una consulta gratuita y descubre cómo GroupEduTech puede transformar tu empresa con tecnología, educación e innovación.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contacto" className="btn-primary text-base px-10 py-4 flex items-center gap-2">
                Consulta Gratuita <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/nosotros" className="btn-outline text-base px-10 py-4">
                Conocer el Equipo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
