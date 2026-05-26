"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap, Globe, CheckCircle, ArrowRight, Code, ShoppingCart,
  Settings, Bot, Package, Building, FileText, Layers
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const automations = [
  { icon: Bot, title: "Chatbots Inteligentes", desc: "Asistentes virtuales con IA para atención al cliente 24/7 en WhatsApp, Web e Instagram." },
  { icon: Settings, title: "Flujos de Trabajo", desc: "Automatización de procesos internos con n8n, Make.com y Zapier para eliminar tareas manuales." },
  { icon: FileText, title: "Integración de Sistemas", desc: "Conectamos tus herramientas: CRM, ERP, plataformas de pagos y más mediante APIs." },
  { icon: Zap, title: "Email & Notificaciones", desc: "Secuencias automatizadas de email marketing y sistemas de notificación en tiempo real." },
];

const webTypes = [
  { icon: Layers, title: "Landing Pages", desc: "Páginas de aterrizaje optimizadas para conversión con diseño moderno y carga ultra-rápida.", tag: "Desde $150" },
  { icon: Globe, title: "Sitios Personales", desc: "Portfolio profesional o CV digital para destacar tu marca personal en el mundo digital.", tag: "Desde $120" },
  { icon: Building, title: "Web Corporativa", desc: "Presencia web profesional para empresas con secciones de servicios, equipo y contacto.", tag: "Desde $300" },
  { icon: ShoppingCart, title: "E-commerce", desc: "Tiendas online completas con carrito, pasarela de pagos, inventario y panel de administración.", tag: "Desde $500" },
  { icon: Code, title: "Web Apps", desc: "Aplicaciones web personalizadas con dashboards, autenticación de usuarios y lógica de negocio.", tag: "Cotización" },
  { icon: Package, title: "Portales Empresariales", desc: "Plataformas internas para gestión de equipos, proyectos, clientes y reportes.", tag: "Cotización" },
];

const process = [
  { step: "01", title: "Descubrimiento", desc: "Analizamos tus necesidades, objetivos de negocio y el mercado objetivo en una sesión de consulta." },
  { step: "02", title: "Propuesta & Diseño", desc: "Presentamos una propuesta detallada con wireframes, cronograma y presupuesto ajustado a tu realidad." },
  { step: "03", title: "Desarrollo", desc: "Construcción del producto con reportes de avance semanales y demos intermedios para tu aprobación." },
  { step: "04", title: "Entrega & Soporte", desc: "Lanzamiento, capacitación para tu equipo y soporte continuo post-entrega para asegurar el éxito." },
];

export default function ServiciosPage() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">Servicios</span>
            <h1 className="section-heading mt-3 mb-5">
              Soluciones tecnológicas<br />
              <span className="gradient-text">hechas a tu medida</span>
            </h1>
            <p className="section-sub mx-auto">
              Desde automatizar tus operaciones hasta lanzar tu presencia digital completa — tenemos la experiencia y las herramientas para hacerlo realidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Automatizaciones */}
      <section id="automatizaciones" className="py-20 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <Zap className="w-3.5 h-3.5" /> Automatizaciones
              </span>
              <h2 className="section-heading mb-5">
                Tu negocio trabajando<br />
                <span className="gradient-text">mientras tú descansas</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Implementamos sistemas de automatización que eliminan el trabajo manual repetitivo, reducen errores y liberan a tu equipo para tareas de mayor valor estratégico.
              </p>
              <ul className="space-y-3">
                {["Reducción de costos operativos hasta un 40%", "Procesos que corren 24/7 sin intervención humana", "Integración con +500 herramientas populares", "ROI visible en las primeras semanas"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {automations.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#060B18] border border-white/5 rounded-xl p-5 card-glow"
                >
                  <item.icon className="w-6 h-6 text-[#00D4FF] mb-3" />
                  <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desarrollo Web */}
      <section id="web" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Globe className="w-3.5 h-3.5" /> Desarrollo Web
            </span>
            <h2 className="section-heading mb-4">
              Sitios web que <span className="gradient-text">generan resultados</span>
            </h2>
            <p className="section-sub mx-auto">
              Diseñamos y desarrollamos cada tipo de presencia web con tecnología moderna, optimizada para velocidad, SEO y conversión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {webTypes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 card-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <span className="text-xs font-semibold text-[#00FF94] bg-[#00FF94]/10 px-2.5 py-1 rounded-full">{item.tag}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest">Nuestro Proceso</span>
            <h2 className="section-heading mt-3">
              De la idea al <span className="gradient-text">lanzamiento</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-[#00D4FF]/30 to-transparent z-0" />
                )}
                <div className="bg-[#060B18] border border-white/5 rounded-2xl p-6 relative z-10">
                  <div className="text-4xl font-black gradient-text mb-4 leading-none">{step.step}</div>
                  <h4 className="font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
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
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-400 mb-8">
              Cuéntanos tu idea y te ayudamos a convertirla en realidad con la tecnología adecuada.
            </p>
            <Link href="/contacto" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
              Solicitar Cotización <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
