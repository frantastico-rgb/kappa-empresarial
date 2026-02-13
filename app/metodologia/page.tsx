"use client";
import React, { useState } from "react";

function Accordion({ items }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="bg-green-900/60 rounded-lg shadow">
          <button
            className="w-full text-left p-4 font-bold text-green-100 text-md focus:outline-none flex justify-between items-center"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            aria-controls={`accordion-panel-${idx}`}
          >
            <span>{item.q}</span>
            <span className="text-xl">{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && (
            <div id={`accordion-panel-${idx}`} className="p-4 pt-0 text-green-50 text-sm">
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
      example: "Ejemplo: Comunicación clara entre áreas."
    },
    {
      title: "Adaptabilidad a la Plaza",
      desc: "¿Tu equipo se adapta fácilmente a los cambios?",
      example: "Ejemplo: Respuesta rápida ante nuevos retos."
    },
    {
      title: "Simetría Asertiva",
      desc: "¿Existe alineación entre lo que se dice y lo que se hace?",
      example: "Ejemplo: Coherencia entre valores y acciones."
    }
  ],
  [
    {
      title: "Sentido de Obra",
      desc: "¿El sentido de pertenencia es fuerte?",
      example: "Ejemplo: Orgullo por el trabajo realizado."
    },
    {
      title: "Identidad Territorial",
      desc: "¿Identidad territorial clara?",
      example: "Ejemplo: Cultura organizacional definida."
    },
    {
      title: "Conexión de Mercado",
      desc: "¿La empresa está conectada con su mercado?",
      example: "Ejemplo: Estrategias de posicionamiento efectivas."
    }
  ],
  [
    {
      title: "Psicometría",
      desc: "Evalúa la percepción, motivación y visión de los equipos, identificando oportunidades de mejora.",
      example: "Ejemplo: Encuestas de clima laboral."
    },
    {
      title: "Estructura Informática",
      desc: "Utiliza tecnología y datos para asegurar diagnósticos confiables, automatizados y comparativos.",
      example: "Ejemplo: Uso de plataformas de análisis."
    },
    {
      title: "Filosofía Empresarial",
      desc: "Integra principios de soberanía, propósito y sentido de obra para fortalecer la cultura organizacional.",
      example: "Ejemplo: Misión y visión claras."
    }
  ]
];

const filas = ["Estructura", "Subjetividad", "Visión"];
const columnas = ["Sincronía", "Simplicidad", "Coherencia"];

export default function MetodologiaPage() {
  const [activeCell, setActiveCell] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Colores
  const fondo = "#2B3A30";
  const encabezado = "#6CBF4A";
  const celda = "#A1D68B";
  const celdaHover = "#C6E8B1";

  // Google Form URL
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScFDUw3OL_mzl3kplHUIPvqeLp5BXPfRDiuKpiK4V6zbHNavA/viewform?usp=header";

  // Preguntas frecuentes
  const faqs = [
    {
      q: "¿Qué es el Coeficiente Kappa?",
      a: "Es un indicador de vitalidad organizacional que mide 9 dimensiones clave para el desarrollo empresarial."
    },
    {
      q: "¿Cómo se calcula el Kappa?",
      a: "A través de una matriz de evaluación psicométrica, filosófica y estructural, basada en datos confiables."
    },
    {
      q: "¿Qué beneficios obtengo al participar?",
      a: "Diagnóstico rápido, certificado, comparativo sectorial, recursos exclusivos y seguimiento personalizado."
    },
    {
      q: "¿Es confidencial el proceso?",
      a: "Sí, todos los datos son tratados con máxima confidencialidad y seguridad."
    },
    {
      q: "¿Cómo solicito mi cupo?",
      a: "Haz clic en el botón, completa el formulario y nos pondremos en contacto contigo."
    }
  ];

  // Valor único
  const valorUnico = [
    {
      title: "Filosofía Empresarial",
      desc: "Integra principios de soberanía, propósito y sentido de obra para fortalecer la cultura organizacional."
    },
    {
      title: "Psicometría",
      desc: "Evalúa la percepción, motivación y visión de los equipos, identificando oportunidades de mejora."
    },
    {
      title: "Estructura Informática",
      desc: "Utiliza tecnología y datos para asegurar diagnósticos confiables, automatizados y comparativos."
    }
  ];

  // Tarjetas motivadoras
  const cardMotivadoras = [
    { 
      color: 'bg-yellow-200', 
      text: '"Sin estos datos, usted está navegando a ciegas en el Piedemonte."', 
      idx: 0 
    },
    { 
      color: 'bg-orange-200', 
      text: '"La fricción invisible devora entre el 12% y el 20% de su rentabilidad anual."', 
      idx: 1 
    },
    { 
      color: 'bg-green-200', 
      text: '"Conocer su Kappa es recuperar el mando del organismo."', 
      idx: 2 
    },
  ];

  return (
    <main style={{ background: fondo }} className="min-h-screen flex flex-col items-center justify-start py-12 px-2 md:px-4">
      {/* Hero Section */}
      <section className="max-w-2xl text-center mb-12">
        {/* Logo Kappa */}
        <div className="flex justify-center mb-6">
          <img 
            src="/logoKappa/kappa-logo-horizontal.svg" 
            alt="Coeficiente Kappa" 
            className="h-24 md:h-32"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow">
          Descubre el ADN Empresarial con la Matriz Kappa
        </h1>
        <p className="text-lg text-green-100 mb-6">
          La herramienta que revela el potencial oculto y fortalece la cultura organizacional.
        </p>
        <button 
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-400 transition"
          onClick={() => setShowForm(true)}
        >
          Solicita tu Diagnóstico
        </button>
      </section>

      {/* Matriz Kappa Empresarial */}
      <section className="w-full max-w-3xl bg-white/90 rounded-xl shadow-lg p-4 md:p-8 mb-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold" style={{ color: encabezado }}>
          Matriz Kappa Empresarial
        </h2>
        <div className="overflow-x-auto w-full mt-6">
          <table className="w-full border border-green-200 rounded-lg">
            <thead>
              <tr style={{ background: encabezado }}>
                <th className="p-2 border text-white font-bold"> </th>
                {columnas.map((col) => (
                  <th key={col} className="p-2 border text-white font-bold text-lg">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrizData.map((row, i) => (
                <tr key={filas[i]}> 
                  <th 
                    className="p-2 border font-bold text-lg" 
                    style={{ background: encabezado, color: 'white' }}
                  >
                    {filas[i]}
                  </th>
                  {row.map((cell, j) => (
                    <td
                      key={`${i}-${j}`}
                      className="p-4 border text-3xl font-bold cursor-pointer relative rounded-lg transition"
                      style={{ background: celda, color: '#2B3A30' }}
                      onClick={() => setActiveCell(`${i}-${j}`)}
                      onMouseOver={e => e.currentTarget.style.background = celdaHover}
                      onMouseOut={e => e.currentTarget.style.background = celda}
                    >
                      <span className="inline-block animate-pulse">?</span>
                      {activeCell === `${i}-${j}` && (
                        <div 
                          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" 
                          onClick={() => setActiveCell(null)}
                        >
                          <div 
                            className="relative bg-white border border-green-300 rounded-xl shadow-lg p-6 w-11/12 max-w-xs text-left mx-2" 
                            onClick={e => e.stopPropagation()}
                          >
                            <button
                              className="absolute top-2 right-2 text-green-700 hover:text-green-900 text-2xl font-bold p-2 bg-white/80 rounded-full shadow"
                              style={{ zIndex: 10 }}
                              onClick={() => setActiveCell(null)}
                              aria-label="Cerrar"
                            >
                              ×
                            </button>
                            <div className="mb-2 text-green-900 font-semibold text-lg">
                              {cell.title}
                            </div>
                            <div className="mb-2 text-gray-700 text-sm">
                              {cell.desc}
                            </div>
                            <div className="text-green-700 text-xs italic">
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
        <p className="mt-6 text-center" style={{ color: encabezado }}>
          La Matriz Kappa evalúa 9 dimensiones clave para el desarrollo organizacional.
        </p>
      </section>

      {/* Frases motivadoras */}
      <section className="max-w-3xl w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardMotivadoras.map(card => (
          <div
            key={card.idx}
            className={`${card.color} rounded-lg p-4 text-center font-medium shadow-lg cursor-pointer hover:scale-105 transition text-lg`}
            onClick={() => setActiveCard(card.idx)}
          >
            {card.text}
            {activeCard === card.idx && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" 
                onClick={() => setActiveCard(null)}
              >
                <div 
                  className="relative bg-white rounded-2xl shadow-2xl p-8 w-11/12 max-w-md text-center" 
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-green-700 hover:text-green-900 text-2xl font-bold p-2 bg-white/80 rounded-full shadow"
                    style={{ zIndex: 10 }}
                    onClick={() => setActiveCard(null)}
                    aria-label="Cerrar"
                  >
                    ×
                  </button>
                  <div className="text-xl md:text-2xl font-semibold mb-2" style={{ color: fondo }}>
                    {card.text}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Beneficios claros */}
      <section className="max-w-2xl w-full mb-10">
        <h3 className="text-xl font-semibold text-green-100 mb-4 text-center">
          ¿Qué beneficios obtiene tu organización?
        </h3>
        <ul className="list-disc list-inside text-green-50 space-y-2">
          <li>Diagnóstico rápido y confidencial</li>
          <li>Identificación de puntos críticos y oportunidades</li>
          <li>Fortalecimiento de la cultura y la toma de decisiones</li>
          <li>Certificado de resultados y comparativo sectorial</li>
          <li>Acceso a recursos exclusivos y seguimiento personalizado</li>
        </ul>
      </section>

      {/* Llamada a la acción */}
      <section className="max-w-2xl w-full mb-10 text-center">
        <button
          className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold shadow hover:bg-green-400 transition mb-2"
          onClick={() => setShowForm(true)}
        >
          Solicita tu cupo
        </button>
        <p className="text-yellow-200 font-semibold">
          Cupos limitados por empresa. ¡No te quedes fuera!
        </p>
        <div className="mt-4 text-green-100 text-sm">
          O escríbenos a{' '}
          <a href="mailto:kappaempresarial@gmail.com" className="underline hover:text-green-300">
            kappaempresarial@gmail.com
          </a>
        </div>
        
        {/* Modal del formulario */}
        {showForm && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" 
            onClick={() => setShowForm(false)}
          >
            <div 
              className="relative bg-white rounded-2xl shadow-2xl p-4 w-11/12 max-w-2xl mx-2 flex flex-col items-center" 
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-green-700 hover:text-green-900 text-2xl font-bold p-2 bg-white/80 rounded-full shadow"
                style={{ zIndex: 10 }}
                onClick={() => setShowForm(false)}
                aria-label="Cerrar"
              >
                ×
              </button>
              <div className="mb-2 text-green-900 font-semibold text-lg">
                Formulario de Inscripción
              </div>
              <iframe
                src={formUrl}
                title="Formulario de Inscripción"
                className="w-full h-[500px] md:h-[600px] border rounded-lg"
                style={{ background: '#f9f9f9' }}
                allowFullScreen
              />
              <div className="mt-2 text-xs text-gray-500">
                Tus datos serán tratados con máxima confidencialidad.
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Sección de valor único */}
      <section className="max-w-2xl w-full mb-10 text-center">
        <h3 className="text-xl font-semibold mb-4 text-green-100">
          ¿Por qué Kappa es único?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valorUnico.map((item, idx) => (
            <div key={idx} className="bg-green-900/80 rounded-lg p-4 text-green-100 shadow-lg">
              <div className="font-bold text-lg mb-2">{item.title}</div>
              <div className="text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de preguntas frecuentes */}
      <section className="max-w-2xl w-full mb-10 text-left">
        <h3 className="text-xl font-semibold mb-4 text-green-100 text-center">
          Preguntas frecuentes
        </h3>
        <Accordion items={faqs} />
      </section>

      {/* Mensaje final y footer */}
      <section className="max-w-2xl w-full text-center mt-8 mb-4">
        <p className="text-lg text-green-100 font-medium">
          "La Matriz Kappa no solo mide, sino que impulsa la transformación.<br/>
          Da el primer paso hacia una organización más fuerte, coherente y rentable."
        </p>
        <div className="mt-6 text-green-100 text-sm">
          Contacto:{' '}
          <a href="mailto:kappaempresarial@gmail.com" className="underline hover:text-green-300">
            kappaempresarial@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
