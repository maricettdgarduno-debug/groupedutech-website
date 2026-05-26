"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp, CheckCircle, ArrowRight, Star, Hash,
  Image, Globe, BarChart3, MessageSquare, Zap, Activity
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  {
    id: "imagen",
    icon: Image,
    color: "#F59E0B",
    title: "Identidad & Imagen Corporativa",
    desc: "Creamos o renovamos la identidad visual de tu marca para proyectar profesionalismo y coherencia en todos los canales digitales.",
    items: ["Diseño de Logo & Isotipo", "Manual de Marca", "Paleta de colores & Tipografía", "Papelería corporativa digital", "Plantillas para redes sociales"],
  },
  {
    id: "redes",
    icon: Hash,
    color: "#00D4FF",
    title: "Gestión de Redes Sociales",
    desc: "Gestionamos tu presencia en Instagram, Facebook, LinkedIn y TikTok con contenido estratégico que conecta con tu audiencia y genera resultados.",
    items: ["Estrategia de contenido mensual", "Diseño de posts & Reels", "Community management", "Calendario editorial", "Reportes de desempeño"],
  },
  {
    id: "seo",
    icon: Globe,
    color: "#7C3AED",
    title: "SEO & Posicionamiento Web",
    desc: "Optimizamos tu sitio web para que aparezca en las primeras posiciones de Google cuando tus clientes busquen lo que ofreces.",
    items: ["Auditoría SEO completa", "Optimización On-Page", "Link Building", "SEO Local Venezuela", "Reportes de posicionamiento"],
  },
  {
    id: "ads",
    icon: TrendingUp,
    color: "#00FF94",
    title: "Publicidad Digital (Ads)",
    desc: "Campañas publicitarias en Meta Ads y Google Ads optimizadas para maximizar el retorno de inversión en el mercado venezolano.",
    items: ["Estrategia de campañas", "Diseño de creativos", "Segmentación de audiencias", "Optimización continua", "ROI mensual detallado"],
  },
  {
    id: "contenido",
    icon: MessageSquare,
    color: "#EC4899",
    title: "Producción de Contenido",
    desc: "Creamos contenido de alto impacto: posts, videos, stories, newsletters y artículos de blog que posicionan tu marca como referente.",
    items: ["Copywriting persuasivo", "Diseño gráfico digital", "Video marketing", "Email marketing", "Infografías & Carruseles"],
  },
  {
    id: "analytics",
    icon: BarChart3,
    color: "#00D4FF",
    title: "Analítica & Reportes",
    desc: "Medimos todo lo que importa. Dashboards de rendimiento en tiempo real para que tomes decisiones basadas en datos reales.",
    items: ["Google Analytics 4", "Meta Business Insights", "KPIs personalizados", "Reportes ejecutivos", "Recomendaciones estratégicas"],
  },
];

const results = [
  { metric: "+300%", label: "Alcance promedio en redes en 3 meses" },
  { metric: "2.5x", label: "Retorno sobre inversión en ads" },
  { metric: "+120%", label: "Tráfico orgánico vía SEO en 6 meses" },
  { metric: "85%", label: "Mejora en engagement de marca" },
];

const plans = [
  {
    name: "Starter",
    desc: "Ideal para marcas personales y pequeños negocios",
    color: "#00D4FF",
    features: ["Gestión de 2 redes sociales", "12 posts/mes diseñados", "Identidad básica de marca", "Reporte mensual", "Soporte por WhatsApp"],
  },
  {
    name: "Business",
    desc: "Para empresas que quieren crecer con estrategia",
    color: "#7C3AED",
    popular: true,
    features: ["Gestión de 4 redes sociales", "20 posts + Stories/mes", "Identidad corporativa completa", "SEO básico incluido", "Ads management (hasta $300/mes)", "Reporte semanal", "Reunión estratégica mensual"],
  },
  {
    name: "Enterprise",
    desc: "Solución integral para empresas en crecimiento",
    color: "#00FF94",
    features: ["Gestión completa de marca digital", "Contenido ilimitado", "Ads management sin límite", "SEO avanzado", "Producción de video mensual", "Analítica avanzada", "Estrategia trimestral", "Gerente de cuenta dedicado"],
  },
];

export default function MarketingPage() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4" /> Marketing & Imagen Corporativa Digital
            </span>
            <h1 className="section-heading mt-2 mb-5">
              Tu marca, potenciada.<br />
              <span className="gradient-text">Tu audiencia, conquistada.</span>
            </h1>
            <p className="section-sub mx-auto">
              Estrategias integrales de marketing digital e imagen corporativa que posicionan tu marca, generan leads y convierten seguidores en clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-[#0D1526]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-extrabold gradient-text mb-2">{r.metric}</div>
                <div className="text-gray-400 text-xs">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">Servicios</span>
            <h2 className="section-heading mt-3 mb-4">
              Marketing integral para tu <span className="gradient-text">crecimiento digital</span>
            </h2>
            <p className="section-sub mx-auto">
              Cada servicio está diseñado para generar impacto real y medible en tu presencia online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                id={svc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 card-glow"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${svc.color}12`, border: `1px solid ${svc.color}20` }}
                >
                  <svc.icon className="w-5 h-5" style={{ color: svc.color }} />
                </div>
                <h3 className="font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-1.5">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: svc.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">Planes</span>
            <h2 className="section-heading mt-3 mb-4">
              Elige el plan que <span className="gradient-text">impulse tu marca</span>
            </h2>
            <p className="text-gray-400">Todos los planes incluyen consultoría inicial gratuita y objetivos claros desde el día uno.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative bg-[#060B18] border rounded-2xl p-7 card-glow ${
                  plan.popular ? "border-[#7C3AED]/40" : "border-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      ⭐ Recomendado
                    </span>
                  </div>
                )}
                <div className="mb-2 text-xs font-semibold" style={{ color: plan.color }}>Plan</div>
                <h3 className="text-2xl font-extrabold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Activity className="w-4 h-4 shrink-0 mt-0.5" style={{ color: plan.color }} />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="btn-outline w-full text-center block" style={{ borderColor: plan.color, color: plan.color }}>
                  Solicitar Cotización
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="section-heading mb-5">
              Eleva tu presencia digital<br />
              <span className="gradient-text">a otro nivel</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Hablemos de tus objetivos. Primera sesión de estrategia completamente gratuita.
            </p>
            <Link href="/contacto" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
              Hablar con un Estratega <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
