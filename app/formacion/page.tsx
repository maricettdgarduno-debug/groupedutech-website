"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain, CheckCircle, ArrowRight, Users, Star, BookOpen,
  Layers, TrendingUp, Zap, Globe, Shield, Clock
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const levels = [
  {
    icon: BookOpen,
    color: "#00D4FF",
    level: "Nivel Básico",
    title: "Introducción a la IA",
    audience: "Para todos — sin conocimientos previos",
    duration: "8 horas · 2 sesiones",
    topics: [
      "¿Qué es la Inteligencia Artificial?",
      "Historia y evolución de la IA",
      "Herramientas de IA para el día a día",
      "ChatGPT, Gemini, Copilot: uso práctico",
      "Ética y responsabilidad en la IA",
    ],
    price: "Bs. accesible",
  },
  {
    icon: Layers,
    color: "#7C3AED",
    level: "Nivel Intermedio",
    title: "IA Aplicada a Negocios",
    audience: "Para emprendedores y profesionales",
    duration: "20 horas · 5 sesiones",
    topics: [
      "Automatización con herramientas de IA",
      "Prompts efectivos para máxima productividad",
      "IA en Marketing y contenido digital",
      "Análisis de datos con IA",
      "Casos de uso por industria",
    ],
    price: "Cotización",
    popular: true,
  },
  {
    icon: Brain,
    color: "#00FF94",
    level: "Nivel Avanzado",
    title: "Desarrollo e Integración de IA",
    audience: "Para desarrolladores y técnicos",
    duration: "40 horas · 10 sesiones",
    topics: [
      "Machine Learning con Python",
      "APIs de IA: OpenAI, Google, Anthropic",
      "Fine-tuning de modelos de lenguaje",
      "Agentes autónomos con IA",
      "Proyecto integrador con certificación",
    ],
    price: "Cotización",
  },
];

const audiences = [
  { icon: Users, title: "Estudiantes", desc: "Desde bachillerato hasta universitarios. Programas adaptados para preparar a la próxima generación de profesionales digitales." },
  { icon: BookOpen, title: "Docentes", desc: "Capacitación especial para educadores que quieren integrar la IA en sus métodos de enseñanza y planificación curricular." },
  { icon: TrendingUp, title: "Emprendedores", desc: "Aprende a usar la IA para potenciar tu negocio: atención al cliente, marketing, operaciones y toma de decisiones." },
  { icon: Globe, title: "Empresas", desc: "Formación corporativa personalizada para equipos completos, adaptada a los objetivos y procesos específicos de tu empresa." },
  { icon: Zap, title: "Profesionales", desc: "Actualiza tus competencias digitales con IA sin importar tu área: contabilidad, salud, derecho, comunicación y más." },
  { icon: Shield, title: "Instituciones Educativas", desc: "Programas especiales para colegios, universidades e institutos que quieren incorporar la IA a su oferta educativa." },
];

const features = [
  "Instructores con experiencia real en proyectos de IA",
  "Materiales en español adaptados al contexto venezolano",
  "Clases prácticas con herramientas reales del mercado",
  "Acceso grabaciones para repasar a tu ritmo",
  "Certificado de participación al completar el programa",
  "Grupos reducidos para atención personalizada",
];

export default function FormacionPage() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#00FF94]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-[#00FF94]/10 text-[#00FF94] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Brain className="w-4 h-4" /> Formación en IA — Venezuela
            </span>
            <h1 className="section-heading mt-2 mb-5">
              El futuro ya está aquí.<br />
              <span className="gradient-text">Aprende a dominarlo.</span>
            </h1>
            <p className="section-sub mx-auto">
              Programas de formación en Inteligencia Artificial para todos los niveles educativos — desde estudiantes hasta empresas. En español, con contexto venezolano y enfoque práctico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Por quién */}
      <section className="py-16 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="section-heading mb-3">¿Para quién es <span className="gradient-text">esta formación?</span></h2>
            <p className="section-sub mx-auto">Diseñamos programas adaptados a cada tipo de aprendiz y necesidad.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#060B18] border border-white/5 rounded-2xl p-6 card-glow"
              >
                <a.icon className="w-6 h-6 text-[#00FF94] mb-3" />
                <h4 className="font-bold text-white mb-2">{a.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">Planes de Formación</span>
            <h2 className="section-heading mt-3 mb-4">
              Elige tu <span className="gradient-text">nivel de aprendizaje</span>
            </h2>
            <p className="section-sub mx-auto">
              Ofrecemos cursos desde cero hasta nivel experto, con modalidad presencial y virtual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {levels.map((lvl, i) => (
              <motion.div
                key={lvl.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative bg-[#0D1526] border rounded-2xl p-7 card-glow ${
                  lvl.popular ? "border-[#7C3AED]/40" : "border-white/5"
                }`}
              >
                {lvl.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      ⭐ Más Popular
                    </span>
                  </div>
                )}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${lvl.color}15`, border: `1px solid ${lvl.color}25` }}
                >
                  <lvl.icon className="w-5.5 h-5.5" style={{ color: lvl.color }} />
                </div>
                <div className="text-xs font-semibold mb-1" style={{ color: lvl.color }}>{lvl.level}</div>
                <h3 className="text-xl font-bold text-white mb-2">{lvl.title}</h3>
                <div className="text-xs text-gray-400 mb-1">{lvl.audience}</div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
                  <Clock className="w-3.5 h-3.5" /> {lvl.duration}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {lvl.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: lvl.color }} />
                      <span className="text-gray-300 text-xs leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-white font-bold text-sm">{lvl.price}</span>
                  <Link href="/contacto" className="flex items-center gap-1 text-sm font-semibold" style={{ color: lvl.color }}>
                    Inscribirme <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#0D1526]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="section-heading mb-4">
              Por qué aprender IA<br />
              <span className="gradient-text">con GroupEduTech</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-[#060B18] border border-white/5 rounded-xl p-5"
              >
                <Star className="w-4 h-4 text-[#00FF94] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{f}</span>
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
              ¿Listo para dominar<br />
              <span className="gradient-text">la Inteligencia Artificial?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Agenda una sesión informativa gratuita y te orientamos sobre el programa ideal para ti o tu organización.
            </p>
            <Link href="/contacto" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
              Más Información <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
