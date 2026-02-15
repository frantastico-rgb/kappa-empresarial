"use client";
import React, { useState } from "react";
import KappaNavbar from "@/components/KappaNavbar";

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((item: AccordionItem, idx: number) => (
        <div key={idx} className="bg-[#0A4D8C]/80 rounded-lg shadow-lg border border-[#00D9A3]/30">
          <button
            className="w-full text-left p-4 font-bold text-white text-md focus:outline-none flex justify-between items-center hover:bg-[#0A4D8C] transition-colors"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            aria-controls={`accordion-panel-${idx}`}
          >
            <span>{item.q}</span>
            <span className="text-2xl text-[#00D9A3]">{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && (
            <div id={`accordion-panel-${idx}`} className="p-4 pt-0 text-[#F7FAFC] text-sm leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const matrizData = [
  [
    {
      title: "Fluidez Organizacional",
      desc: "¿Fluye la información y la energía en tu organización?",
      example: "Ejemplo: Comunicación clara entre áreas, sin silos departamentales."
    },
    {
      title: "Adaptabilidad a la Plaza",
      desc: "¿Tu equipo se adapta fácilmente a los cambios del mercado?",
      example: "Ejemplo: Respuesta rápida ante nuevos retos y oportunidades."
    },
    {
      title: "Simetría Asertiva",
      desc: "¿Existe alineación entre lo que se dice y lo que se hace?",
      example: "Ejemplo: Coherencia entre valores declarados y acciones reales."
    }
  ],
  [
    {
      title: "Sentido de Obra",
      desc: "¿El sentido de pertenencia y propósito es fuerte en tu equipo?",
      example: "Ejemplo: Orgullo por el trabajo realizado, motivación intrínseca."
    },
    {
      title: "Identidad Territorial",
      desc: "¿La identidad cultural y organizacional es clara y compartida?",
      example: "Ejemplo: Cultura organizacional definida y vivida diariamente."
    },
    {
      title: "Conexión de Mercado",
      desc: "¿La empresa está verdaderamente conectada con su mercado objetivo?",
      example: "Ejemplo: Estrategias de posicionamiento efectivas y medibles."
    }
  ],
  [
    {
      title: "Psicometría",
      desc: "Evaluación científica de percepción, motivación y visión de los equipos.",
      example: "Ejemplo: Encuestas de clima laboral con análisis estadístico."
    },
    {
      title: "Estructura Informática",
      desc: "Tecnología y datos para diagnósticos confiables y automatizados.",
      example: "Ejemplo: Dashboards en tiempo real, análisis comparativo sectorial."
    },
    {
      title: "Filosofía Empresarial",
      desc: "Principios de soberanía, propósito y sentido de obra integrados.",
      example: "Ejemplo: Misión y visión alineadas con la operación diaria."
    }
  ]
];

const filas = ["Estructura", "Subjetividad", "Visión"];
const columnas = ["Sincronía", "Simplicidad", "Coherencia"];

export default function MetodologiaPage() {
  const [activeCell, setActiveCell] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Colores de la Identidad Kappa
  const colores = {
    azulProfundo: "#0A4D8C",
    verdeEsmeralda: "#00D9A3",
    naranjaEnergia: "#FF6B35",
    grisCarbono: "#2D3748",
    blancoRoto: "#F7FAFC",
    fondoOscuro: "#1A2332",
  };

  // Google Form URL
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScFDUw3OL_mzl3kplHUIPvqeLp5BXPfRDiuKpiK4V6zbHNavA/viewform?usp=header";

  // Preguntas frecuentes
  const faqs = [
    {
      q: "¿Qué es el Coeficiente Kappa (κ)?",
      a: "Es un indicador científico de vitalidad organizacional que mide 9 dimensiones clave para el desarrollo empresarial sostenible. κ < 1 indica consumo de capital humano; κ ≥ 1.4 indica preparación para exportación."
    },
    {
      q: "¿Cómo se calcula el Coeficiente κ?",
      a: "A través de la Matriz Kappa 3×3, que evalúa Estructura, Subjetividad y Visión en tres ejes: Sincronía, Simplicidad y Coherencia. Usamos psicometría, estructura informática y filosofía empresarial para un diagnóstico preciso."
    },
    {
      q: "¿Qué beneficios obtengo al medir mi κ?",
      a: "Diagnóstico rápido (48h), identificación de fricción invisible, certificado de resultados, comparativo sectorial, acceso a recursos exclusivos, y ruta parametrizada de optimización en 90 días."
    },
    {
      q: "¿Es confidencial el proceso?",
      a: "Absolutamente. Todos los datos son tratados con máxima confidencialidad y seguridad. Solo tú recibes el reporte completo de tu organización."
    },
    {
      q: "¿Cómo solicito mi cupo en el programa piloto 2026?",
      a: "Haz clic en 'Solicita tu cupo', completa el formulario de inscripción, y nos pondremos en contacto contigo en 24-48 horas para agendar tu diagnóstico."
    }
  ];

  // Valor único
  const valorUnico = [
    {
      icon: "🧬",
      title: "Filosofía Empresarial",
      desc: "Integra principios de soberanía organizacional, propósito claro y sentido de obra para fortalecer la cultura desde adentro."
    },
    {
      icon: "📊",
      title: "Psicometría Científica",
      desc: "Evalúa la percepción, motivación y visión de los equipos usando métodos estadísticos validados, identificando oportunidades precisas."
    },
    {
      icon: "💻",
      title: "Estructura Informática",
      desc: "Utiliza tecnología de punta y análisis de datos para asegurar diagnósticos confiables, automatizados y comparativos en tiempo real."
    }
  ];

  // Tarjetas motivadoras con colores Kappa
  const cardMotivadoras = [
    { 
      color: `bg-gradient-to-br from-[${colores.naranjaEnergia}] to-orange-400`, 
      text: '"Sin estos datos, usted está navegando a ciegas en el Piedemonte."', 
      idx: 0,
      textColor: 'text-white'
    },
    { 
      color: `bg-gradient-to-br from-[${colores.azulProfundo}] to-blue-700`, 
      text: '"La fricción invisible devora entre el 12% y el 20% de su rentabilidad anual."', 
      idx: 1,
      textColor: 'text-white'
    },
    { 
      color: `bg-gradient-to-br from-[${colores.verdeEsmeralda}] to-green-400`, 
      text: '"Conocer su Kappa es recuperar el mando del organismo."', 
      idx: 2,
      textColor: 'text-white'
    },
  ];

  const filas = ["Estructura", "Subjetividad", "Visión"];
  const columnas = ["Sincronía", "Simplicidad", "Coherencia"];

  return (
    <>
      <KappaNavbar />
      <main 
        style={{ background: `linear-gradient(135deg, ${colores.fondoOscuro} 0%, ${colores.grisCarbono} 100%)` }} 
        className="min-h-screen flex flex-col items-center justify-start pt-24 pb-12 px-2 md:px-4"
      >
        {/* Hero Section con Logo y botones */}
        <section className="max-w-4xl text-center mb-16 px-4">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src="/logoKappa/kappa-logo-horizontal.svg" 
              alt="Coeficiente Kappa" 
              className="h-32 md:h-40 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Descubre el ADN Empresarial con la Matriz Kappa
          </h1>
          <p className="text-lg md:text-xl text-[#F7FAFC] mb-8 max-w-2xl mx-auto leading-relaxed">
            La herramienta científica que revela el potencial oculto de tu organización 
            y elimina la fricción invisible que consume tu rentabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-gradient-to-r from-[#0A4D8C] to-[#00D9A3] text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              onClick={() => setShowForm(true)}
            >
              <span>Medir mi κ ahora</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a
              href="#matriz"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#0A4D8C] px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Conocer la Metodología
            </a>
          </div>
          {/* Indicadores rápidos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#00D9A3]/30">
              <div className="text-3xl font-bold text-[#00D9A3]">48h</div>
              <div className="text-sm text-white/80">Diagnóstico completo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#FF6B35]/30">
              <div className="text-3xl font-bold text-[#FF6B35]">90 días</div>
              <div className="text-sm text-white/80">Ruta de optimización</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#0A4D8C]/30">
              <div className="text-3xl font-bold text-[#0A4D8C]">κ ≥ 1.4</div>
              <div className="text-sm text-white/80">Listo para exportar</div>
            </div>
          </div>
        </section>

        {/* Matriz Kappa Empresarial */}
        <section id="matriz" className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: colores.azulProfundo }}>
              Matriz Kappa Empresarial
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Evalúa 9 dimensiones críticas de tu organización en tres ejes fundamentales
            </p>
          </div>
          {/* Versión Desktop de la Matriz */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-2 border-[#0A4D8C] rounded-xl overflow-hidden">
              <thead>
                <tr style={{ background: `linear-gradient(135deg, ${colores.azulProfundo} 0%, ${colores.verdeEsmeralda} 100%)` }}>
                  <th className="p-4 border-2 border-white/20 text-white font-bold text-lg"> </th>
                  {columnas.map((col) => (
                    <th key={col} className="p-4 border-2 border-white/20 text-white font-bold text-xl">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrizData.map((row, i) => (
                  <tr key={filas[i]}> 
                    <th 
                      className="p-4 border-2 border-white/20 font-bold text-xl text-white"
                      style={{ background: `linear-gradient(135deg, ${colores.azulProfundo} 0%, ${colores.verdeEsmeralda} 100%)` }}
                    >
                      {filas[i]}
                    </th>
                    {row.map((cell, j) => (
                      <td
                        key={`${i}-${j}`}
                        className="p-6 border-2 border-gray-200 text-4xl font-bold cursor-pointer relative transition-all duration-300 hover:shadow-xl group"
                        style={{ 
                          background: `linear-gradient(135deg, ${colores.verdeEsmeralda}20 0%, ${colores.azulProfundo}10 100%)`,
                          color: colores.azulProfundo 
                        }}
                        onClick={() => setActiveCell(`${i}-${j}`)}
                      >
                        <div className="flex flex-col items-center justify-center min-h-[100px]">
                          <span className="inline-block group-hover:scale-125 transition-transform duration-300">🔑</span>
                          <span className="text-xs font-normal mt-2 opacity-60 group-hover:opacity-100">Click para detalles</span>
                        </div>
                        {activeCell === `${i}-${j}` && (
                          <div 
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" 
                            onClick={() => setActiveCell(null)}
                          >
                            <div 
                              className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md text-left border-4 border-[#00D9A3]" 
                              onClick={e => e.stopPropagation()}
                            >
                              <button
                                className="absolute top-4 right-4 text-[#0A4D8C] hover:text-[#FF6B35] text-3xl font-bold p-2 bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all"
                                onClick={() => setActiveCell(null)}
                                aria-label="Cerrar"
                              >
                                ×
                              </button>
                              <div className="mb-4 text-[#0A4D8C] font-bold text-2xl pr-12">
                                {cell.title}
                              </div>
                              <div className="mb-4 text-gray-700 text-base leading-relaxed">
                                {cell.desc}
                              </div>
                              <div className="text-[#00D9A3] text-sm italic bg-[#F7FAFC] p-3 rounded-lg">
                                {cell.example}
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Versión Mobile de la Matriz (Cards) */}
          <div className="md:hidden space-y-4">
            {matrizData.map((row, i) => (
              <div key={filas[i]}>
                <h3 
                  className="text-xl font-bold text-white p-3 rounded-lg mb-2"
                  style={{ background: `linear-gradient(135deg, ${colores.azulProfundo} 0%, ${colores.verdeEsmeralda} 100%)` }}
                >
                  {filas[i]}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {row.map((cell, j) => (
                    <div
                      key={`${i}-${j}`}
                      className="p-4 rounded-lg border-2 border-[#00D9A3]/30 cursor-pointer active:scale-95 transition-transform"
                      style={{ background: `linear-gradient(135deg, ${colores.verdeEsmeralda}10 0%, white 100%)` }}
                      onClick={() => setActiveCell(`${i}-${j}`)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold text-[#0A4D8C] mb-1">{columnas[j]}</div>
                          <div className="text-sm text-gray-600">{cell.title}</div>
                        </div>
                        <span className="text-2xl">🔑</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-600 italic">
            Cada dimensión se evalúa mediante indicadores específicos validados científicamente
          </p>
        </section>

        {/* Frases motivadoras */}
        <section className="max-w-5xl w-full mb-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardMotivadoras.map(card => (
              <div
                key={card.idx}
                className={`${card.color} ${card.textColor} rounded-xl p-6 text-center font-semibold shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 text-base md:text-lg border-2 border-white/20`}
                onClick={() => setActiveCard(card.idx)}
              >
                {card.text}
                {activeCard === card.idx && (
                  <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" 
                    onClick={() => setActiveCard(null)}
                  >
                    <div 
                      className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center" 
                      onClick={e => e.stopPropagation()}
                    >
                      <button
                        className="absolute top-4 right-4 text-[#0A4D8C] hover:text-[#FF6B35] text-3xl font-bold p-2 bg-gray-100 rounded-full shadow-lg transition-all"
                        onClick={() => setActiveCard(null)}
                        aria-label="Cerrar"
                      >
                        ×
                      </button>
                      <div className="text-xl md:text-2xl font-bold mb-4" style={{ color: colores.azulProfundo }}>
                        {card.text}
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        La Matriz Kappa te ayuda a visualizar y cuantificar esta realidad invisible.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios claros */}
        <section className="max-w-4xl w-full mb-12 px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: colores.azulProfundo }}>
              ¿Qué obtiene tu organización?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "⚡", text: "Diagnóstico rápido y confidencial (48h)" },
                { icon: "🎯", text: "Identificación de puntos críticos y oportunidades" },
                { icon: "📈", text: "Fortalecimiento de cultura y toma de decisiones" },
                { icon: "🏆", text: "Certificado de resultados y comparativo sectorial" },
                { icon: "🔬", text: "Acceso a recursos exclusivos y metodología" },
                { icon: "🗺️", text: "Seguimiento personalizado y ruta parametrizada" },
              ].map((beneficio, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-[#F7FAFC] to-white border border-[#00D9A3]/20">
                  <span className="text-2xl flex-shrink-0">{beneficio.icon}</span>
                  <span className="text-gray-700 font-medium">{beneficio.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Llamada a la acción principal */}
        <section id="diagnostico" className="max-w-3xl w-full mb-12 px-4">
          <div className="bg-gradient-to-br from-[#0A4D8C] to-[#00D9A3] rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Solo quedan 7 cupos para marzo 2026
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Programa piloto sin costo para empresas seleccionadas
            </p>
            <button
              className="bg-white text-[#0A4D8C] px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4"
              onClick={() => setShowForm(true)}
            >
              Solicitar Acceso al Protocolo →
            </button>
            <p className="text-sm opacity-75">
              O escríbenos a{' '}
              <a href="mailto:kappaempresarial@gmail.com" className="underline hover:opacity-100 font-semibold">
                kappaempresarial@gmail.com
              </a>
            </p>
          </div>
          {/* Modal del formulario */}
          {showForm && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-auto" 
              onClick={() => setShowForm(false)}
            >
              <div 
                className="relative bg-white rounded-2xl shadow-2xl p-4 md:p-6 w-full max-w-3xl flex flex-col" 
                style={{ maxHeight: '90vh', overflowY: 'auto' }}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[#0A4D8C] font-bold text-xl md:text-2xl text-center w-full">
                    Formulario de Inscripción
                  </div>
                  <button
                    className="text-[#0A4D8C] hover:text-[#FF6B35] text-3xl font-bold p-2 bg-gray-100 rounded-full shadow-lg z-10 transition-all"
                    style={{ marginLeft: '8px' }}
                    onClick={() => setShowForm(false)}
                    aria-label="Cerrar"
                  >
                    ×
                  </button>
                </div>
                <iframe
                  src={formUrl}
                  title="Formulario de Inscripción"
                  className="w-full h-[500px] md:h-[700px] border rounded-lg"
                  style={{ background: '#f9f9f9' }}
                  allowFullScreen
                />
                <div className="mt-4 text-xs text-gray-500 text-center">
                  🔒 Tus datos serán tratados con máxima confidencialidad y seguridad
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#0A4D8C] to-[#00D9A3] text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition"
                  >
                    Abrir formulario en otra página
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Sección de valor único */}
        <section className="max-w-5xl w-full mb-12 px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            ¿Por qué Kappa es único?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valorUnico.map((item, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#00D9A3]/30">
                <div className="text-5xl mb-4 text-center">{item.icon}</div>
                <div className="font-bold text-xl mb-3 text-center" style={{ color: colores.azulProfundo }}>
                  {item.title}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed text-center">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de preguntas frecuentes */}
        <section className="max-w-4xl w-full mb-12 px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Preguntas Frecuentes
          </h3>
          <Accordion items={faqs} />
        </section>

        {/* Mensaje final */}
        <section className="max-w-3xl w-full text-center mt-8 mb-8 px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#00D9A3]/30">
            <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed mb-6">
              "La Matriz Kappa no solo mide, sino que impulsa la transformación."
            </p>
            <p className="text-lg text-white/80">
              Da el primer paso hacia una organización más fuerte, coherente y rentable.
            </p>
          </div>
        </section>

        {/* Sección de aliados estratégicos */}
        <section className="max-w-5xl w-full mx-auto mb-12 px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">
            Nuestros Aliados Estratégicos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 bg-white/10 rounded-2xl py-6 px-2 md:px-8 shadow-lg border border-[#00D9A3]/20">
            {/* Lista de logos aliados */}
            {[
              { src: "/logoKappa/log_passio_vertice.png", alt: "Log Passio / Vertce" },
              { src: "/logoKappa/logo nexus.png", alt: "Nexus" },
              { src: "/logoKappa/logo_fundacyt.png", alt: "Funccyt" },
              { src: "/logoKappa/logo_sena.png", alt: "SENA" },
              { src: "/logoKappa/ekine logo 3.png", alt: "Ekine" },
              { src: "/logoKappa/LOGO_teopol.png", alt: "Teopol" },
              { src: "/logoKappa/mini_dominion.png", alt: "Dominion" },
              { src: "/logoKappa/logo_casa_meta.png", alt: "Casameta" },
              { src: "/logoKappa/logo.png", alt: "Diacua Viva" },
              { src: "/logoKappa/logo slb.png", alt: "SLB" },
            ].map((logo, idx) => (
              <div key={logo.alt} className="flex flex-col items-center w-24 md:w-28">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain h-14 md:h-20 w-full mb-2 bg-white/80 rounded-lg shadow-md p-2 border border-[#0A4D8C]/10 hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <span className="text-xs text-white/80 text-center font-medium truncate w-full">{logo.alt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer actualizado: emails, enlaces funcionales */}
        <footer className="max-w-5xl w-full border-t border-white/20 pt-8 mt-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-white/60 text-sm">
            <div>
              <div className="font-semibold tracking-wide text-base mb-1">© 2026 Diacua Viva - Protocolo Coeficiente Kappa (κ)</div>
              <div className="mt-2 text-white/90 text-sm font-mono bg-white/10 rounded px-3 py-2 w-fit md:w-auto">
                <span className="block">Email:</span>
                <a href="mailto:kappaempresarial@gmail.com" className="underline hover:text-[#00D9A3] block">kappaempresarial@gmail.com</a>
                <a href="mailto:diacuaviva@gmail.com" className="underline hover:text-[#00D9A3] block mt-1">diacuaviva@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/metodologia/avanzada" className="hover:text-white transition-colors">Metodología</a>
              <a href="/metodologia/avanzada" className="hover:text-white transition-colors">Casos</a>
              <a href="mailto:kappaempresarial@gmail.com" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
