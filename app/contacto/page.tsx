"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Zap, Globe, Brain, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  { icon: Zap, label: "Automatizaciones", color: "#00D4FF" },
  { icon: Globe, label: "Desarrollo Web", color: "#7C3AED" },
  { icon: Brain, label: "Formación en IA", color: "#00FF94" },
  { icon: TrendingUp, label: "Marketing Digital", color: "#F59E0B" },
  { label: "Imagen Corporativa", color: "#EC4899" },
  { label: "Otro", color: "#9CA3AF" },
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "", budget: ""
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-[#00D4FF]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[#7C3AED]/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Mail className="w-4 h-4" /> Contáctanos
            </span>
            <h1 className="section-heading mt-2 mb-5">
              Hablemos de tu<br />
              <span className="gradient-text">próximo proyecto</span>
            </h1>
            <p className="section-sub mx-auto">
              Cuéntanos qué necesitas. Respondemos en menos de 24 horas con una propuesta inicial sin compromiso.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <motion.div {...fadeUp} className="space-y-6">
              <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-7">
                <h3 className="font-bold text-white text-lg mb-5">Información de Contacto</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", val: "groupedutech.ve@gmail.com", href: "mailto:groupedutech.ve@gmail.com" },
                    { icon: Phone, label: "Venezuela", val: "+58 (414) 633-0903", href: "https://wa.me/584146330903" },
                    { icon: Phone, label: "USA", val: "+1 (661) 743-8491", href: "tel:+16617438491" },
                    { icon: MapPin, label: "Ubicación", val: "Venezuela", href: "#" },
                    { icon: Globe, label: "Web", val: "groupedutech.com", href: "https://groupedutech.com" },
                    { icon: Clock, label: "Horario", val: "Lun–Vie 8am–6pm VET", href: "#" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                      <div className="w-9 h-9 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-[#00D4FF]" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs">{item.label}</div>
                        <div className="text-white text-sm group-hover:text-[#00D4FF] transition-colors">{item.val}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-7">
                <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">¿Por qué GroupEduTech?</h3>
                <ul className="space-y-3">
                  {[
                    "Consulta inicial completamente gratuita",
                    "Respuesta en menos de 24 horas",
                    "Sin letra pequeña ni cargos ocultos",
                    "Soporte continuo post-entrega",
                    "Equipo venezolano que entiende tu contexto",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#00FF94] shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-8">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#00FF94]/10 border border-[#00FF94]/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-[#00FF94]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">¡Mensaje Enviado!</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Gracias por contactarnos. Un miembro de nuestro equipo se comunicará contigo en las próximas 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-bold text-white text-xl mb-6">Cuéntanos sobre tu proyecto</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">Nombre completo *</label>
                        <input
                          name="name" required value={form.name} onChange={handleChange}
                          placeholder="Tu nombre"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">Email *</label>
                        <input
                          name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="tu@correo.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">WhatsApp / Teléfono</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+58 412..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs font-medium mb-1.5 block">Empresa / Organización</label>
                        <input
                          name="company" value={form.company} onChange={handleChange}
                          placeholder="Nombre de tu empresa (opcional)"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-3 block">Servicio de interés *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {services.map((svc) => (
                          <button
                            key={svc.label}
                            type="button"
                            onClick={() => setForm({ ...form, service: svc.label })}
                            className={`flex items-center gap-2 p-3 rounded-xl border text-sm text-left transition-all ${
                              form.service === svc.label
                                ? "border-[#00D4FF]/50 bg-[#00D4FF]/10 text-white"
                                : "border-white/10 bg-white/3 text-gray-400 hover:border-white/20"
                            }`}
                          >
                            {svc.icon && <svc.icon className="w-4 h-4 shrink-0" style={{ color: svc.color }} />}
                            <span className="text-xs leading-tight">{svc.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1.5 block">Presupuesto aproximado</label>
                      <select
                        name="budget" value={form.budget} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                      >
                        <option value="" className="bg-[#0D1526]">Selecciona un rango</option>
                        <option value="<300" className="bg-[#0D1526]">Menos de $300</option>
                        <option value="300-1000" className="bg-[#0D1526]">$300 – $1,000</option>
                        <option value="1000-5000" className="bg-[#0D1526]">$1,000 – $5,000</option>
                        <option value=">5000" className="bg-[#0D1526]">Más de $5,000</option>
                        <option value="conversar" className="bg-[#0D1526]">Prefiero conversarlo</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-gray-400 text-xs font-medium mb-1.5 block">Cuéntanos sobre tu proyecto *</label>
                      <textarea
                        name="message" required value={form.message} onChange={handleChange}
                        rows={5}
                        placeholder="Describe brevemente qué necesitas, cuáles son tus objetivos y cualquier detalle relevante..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-base disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar Mensaje
                        </>
                      )}
                    </button>

                    <p className="text-gray-500 text-xs text-center">
                      Al enviar este formulario aceptas nuestra política de privacidad. No compartimos tus datos con terceros.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
