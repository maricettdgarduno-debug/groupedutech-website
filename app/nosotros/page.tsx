"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Target, Eye, Heart, ArrowRight, Zap, Globe, Brain, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const team = [
  {
    name: "Carlos Rodríguez",
    role: "Director General & Automatizaciones",
    bio: "Especialista en automatización de procesos y arquitectura de sistemas. Más de 5 años construyendo soluciones tecnológicas para el mercado venezolano.",
    skills: ["n8n", "Make.com", "Python", "APIs"],
  },
  {
    name: "Andrea Martínez",
    role: "Directora de Desarrollo Web",
    bio: "Desarrolladora Full Stack con experiencia en React, Next.js y plataformas e-commerce. Apasionada por la experiencia de usuario y el diseño.",
    skills: ["React", "Next.js", "UX Design", "E-commerce"],
  },
  {
    name: "Luis Vargas",
    role: "Director de Formación IA",
    bio: "Educador e investigador en Inteligencia Artificial. Diseña programas formativos adaptados a cada nivel y contexto venezolano.",
    skills: ["Machine Learning", "LLMs", "Pedagogía", "Python"],
  },
  {
    name: "María Torres",
    role: "Directora de Marketing Digital",
    bio: "Estratega de marketing con visión creativa y analítica. Experta en branding, redes sociales y campañas de alto impacto.",
    skills: ["Branding", "Meta Ads", "SEO", "Contenido"],
  },
];

const values = [
  { icon: Heart, title: "Compromiso", desc: "Nos comprometemos con el éxito de cada cliente como si fuera nuestro propio negocio." },
  { icon: Zap, title: "Innovación", desc: "Adoptamos las últimas tecnologías para ofrecer soluciones de vanguardia accesibles en Venezuela." },
  { icon: Users, title: "Comunidad", desc: "Creemos en el desarrollo del ecosistema tecnológico venezolano y en el talento local." },
  { icon: Target, title: "Resultados", desc: "Cada proyecto tiene métricas claras. Si no hay resultados, no estamos haciendo bien nuestro trabajo." },
];

const areas = [
  { icon: Zap, color: "#00D4FF", label: "Automatizaciones" },
  { icon: Globe, color: "#7C3AED", label: "Desarrollo Web" },
  { icon: Brain, color: "#00FF94", label: "Formación IA" },
  { icon: TrendingUp, color: "#F59E0B", label: "Marketing Digital" },
];

export default function NosotrosPage() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" /> Sobre Nosotros
            </span>
            <h1 className="section-heading mt-2 mb-5">
              El equipo detrás de<br />
              <span className="gradient-text">GroupEduTech</span>
            </h1>
            <p className="section-sub mx-auto">
              Somos un grupo de venezolanos apasionados por la tecnología, la educación y la innovación, comprometidos con el progreso digital de Venezuela.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="py-16 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              {...fadeUp}
              className="bg-[#060B18] border border-white/5 rounded-2xl p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-5">
                <Target className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nuestra Misión</h3>
              <p className="text-gray-400 leading-relaxed">
                Democratizar el acceso a la tecnología avanzada, la inteligencia artificial y las herramientas digitales en Venezuela, empoderando a personas y empresas para que puedan competir en la economía global con soluciones innovadoras y accesibles.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#060B18] border border-white/5 rounded-2xl p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center mb-5">
                <Eye className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nuestra Visión</h3>
              <p className="text-gray-400 leading-relaxed">
                Ser el grupo tecnológico de referencia en Venezuela y la región, reconocido por transformar organizaciones a través de la automatización inteligente, el desarrollo digital de excelencia y la formación que prepara al talento venezolano para los retos del futuro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="section-heading mb-4">
              Cuatro áreas, <span className="gradient-text">un solo equipo</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              La fortaleza de GroupEduTech está en la integración de nuestras cuatro unidades de negocio que trabajan de forma sinérgica.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {areas.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 card-glow text-center"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${a.color}15`, border: `1px solid ${a.color}25` }}
                  >
                    <a.icon className="w-6 h-6" style={{ color: a.color }} />
                  </div>
                  <div className="text-white font-semibold text-sm">{a.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">Nuestro Equipo</span>
            <h2 className="section-heading mt-3">
              Las personas que<br />
              <span className="gradient-text">hacen posible la magia</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#060B18] border border-white/5 rounded-2xl p-6 card-glow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center mb-4 text-xl font-bold text-white">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h4 className="font-bold text-white mb-0.5">{member.name}</h4>
                <div className="text-[#00D4FF] text-xs mb-3">{member.role}</div>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((s) => (
                    <span key={s} className="text-xs bg-white/5 text-gray-300 px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="section-heading mb-3">
              Nuestros <span className="gradient-text">Valores</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 text-center card-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <h4 className="font-bold text-white mb-2">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="section-heading mb-5">
              Hagamos algo<br />
              <span className="gradient-text">increíble juntos</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Estamos listos para ser parte de tu historia de éxito digital.
            </p>
            <Link href="/contacto" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
              Contactar al Equipo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
