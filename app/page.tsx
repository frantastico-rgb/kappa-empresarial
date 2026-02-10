'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  const [sliderValues, setSliderValues] = useState({
    estructura: 3,
    subjetividad: 3,
    vision: 3,
  });

  // Simulación simple del κ para el teaser
  const calculateTeaser = () => {
    const suma = sliderValues.estructura + sliderValues.subjetividad + sliderValues.vision;
    const friccion = 8; // Valor fijo para demo
    return ((suma - friccion) / friccion * 100).toFixed(0);
  };

  const potencia = calculateTeaser();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Minimalista y Potente */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-transparent to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              10 Cupos Disponibles - Ciclo 2026
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
              ¿Su empresa<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400">
                pierde potencia
              </span>
              <br />
              sin saberlo?
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl">
              El <strong className="text-white">80% de las empresas</strong> consumen su propio futuro por fricción interna invisible.
            </p>

            <p className="text-lg text-blue-200 mb-12 max-w-2xl">
              Descubra su <strong className="text-yellow-300">Coeficiente κ</strong> en 3 minutos. 
              La métrica que separa sistemas vivos de organismos en colapso.
            </p>

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                variant="kappa" 
                size="xl"
                className="shadow-2xl"
              >
                Medir mi κ ahora
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Ver caso de éxito
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-1">κ &lt; 1</div>
                <div className="text-sm text-blue-200">Consumiendo capital humano</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-1">κ ≥ 1.4</div>
                <div className="text-sm text-blue-200">Listo para exportar</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-1">90 días</div>
                <div className="text-sm text-blue-200">Ruta de optimización</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Teaser Interactivo - Menos teoría, más experiencia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Prueba rápida: ¿Cómo está su organismo hoy?
              </h2>
              <p className="text-lg text-slate-600">
                Mueva los controles. Esto es solo el 10% de su diagnóstico real.
              </p>
            </div>

            <Card className="p-8 shadow-xl border-2">
              <div className="space-y-8">
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      📋 Claridad de Procesos
                    </label>
                    <span className="text-sm font-bold text-blue-600">
                      {sliderValues.estructura}/5
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={sliderValues.estructura}
                    onChange={(e) => setSliderValues({...sliderValues, estructura: parseInt(e.target.value)})}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      💪 Orgullo del Equipo
                    </label>
                    <span className="text-sm font-bold text-green-600">
                      {sliderValues.subjetividad}/5
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={sliderValues.subjetividad}
                    onChange={(e) => setSliderValues({...sliderValues, subjetividad: parseInt(e.target.value)})}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                </div>

                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      🚀 Capacidad de Respuesta
                    </label>
                    <span className="text-sm font-bold text-purple-600">
                      {sliderValues.vision}/5
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={sliderValues.vision}
                    onChange={(e) => setSliderValues({...sliderValues, vision: parseInt(e.target.value)})}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                {/* Resultado teaser */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">Potencia Neta Estimada</div>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                      {potencia}%
                    </div>
                    <p className="text-sm text-slate-700 font-medium mb-4">
                      {parseInt(potencia) < 20 
                        ? "⚠️ Zona de fricción crítica detectada"
                        : parseInt(potencia) < 50
                        ? "📊 Potencial de mejora significativo"
                        : "✨ Señales positivas, pero hay más por descubrir"
                      }
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      Para ver la fricción real (D) y su κ completo, ingrese al protocolo
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button variant="kappa" size="lg" className="w-full sm:w-auto">
                  Ver mi diagnóstico completo →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios - Visual y directo */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Qué obtiene en 90 días
            </h2>
            <p className="text-lg text-slate-600">
              No es consultoría. Es ingeniería de vitalidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:scale-105 transition-transform cursor-pointer bg-white">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Escáner Digital</h3>
              <p className="text-sm text-slate-600">
                Localice dónde se fuga su dinero por agotamiento invisible
              </p>
              <div className="mt-4 text-xs text-blue-600 font-semibold">
                Reporte en 48h
              </div>
            </Card>

            <Card className="p-6 hover:scale-105 transition-transform cursor-pointer bg-white">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Mapa de Calor 3×3</h3>
              <p className="text-sm text-slate-600">
                Visualice sus 9 dimensiones de potencia vs. fricción
              </p>
              <div className="mt-4 text-xs text-green-600 font-semibold">
                Dashboard vivo
              </div>
            </Card>

            <Card className="p-6 hover:scale-105 transition-transform cursor-pointer bg-white">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Ruta Parametrizada</h3>
              <p className="text-sm text-slate-600">
                Manual de ajustes específicos para su organismo
              </p>
              <div className="mt-4 text-xs text-purple-600 font-semibold">
                Paso a paso
              </div>
            </Card>

            <Card className="p-6 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Certificación κ</h3>
              <p className="text-sm text-slate-600">
                Sello de soberanía reconocido por mercados internacionales
              </p>
              <div className="mt-4 text-xs text-yellow-700 font-bold">
                PDF descargable
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Rápido */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-6">
                <div className="text-6xl">💡</div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-slate-800 mb-3">
                    &ldquo;Descubrimos que el 23% de nuestra energía se evaporaba en procesos que nadie entendía. 
                    Ajustamos en 60 días. Nuestro κ pasó de 0.8 a 1.6.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      MR
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">María Rodríguez</div>
                      <div className="text-sm text-slate-600">CEO - Frutos del Llano Export</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Urgencia */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-red-500/30">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              Solo quedan 7 cupos para febrero 2026
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Su competencia ya está midiendo su κ.
            </h2>
            
            <p className="text-xl text-slate-300 mb-10">
              No deje que la fricción invisible consuma su futuro exportador.
            </p>

            <Button variant="kappa" size="xl" className="mb-6">
              Solicitar Acceso al Protocolo →
            </Button>

            <p className="text-sm text-slate-400">
              Sin costo para empresas seleccionadas del programa piloto 2026
            </p>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>
              © 2026 Diacua Viva - Protocolo Coeficiente Kappa (κ)
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Metodología</a>
              <a href="#" className="hover:text-white transition-colors">Casos</a>
              <a href="#" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
