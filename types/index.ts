// Tipos para el Coeficiente Kappa

export interface EmpresaData {
  timestamp: string;
  empresa: string;
  representanteLegal: string;
  celular: string;
  web?: string;
  email: string;
  numeroEmpleados: number;
}

export interface RespuestasKappa {
  // Bloque A - Estructura
  p1_sincronia: number; // 1-5
  p2_simplicidad: number; // 1-5
  p3_coherencia: number; // 1-5
  
  // Bloque B - Subjetividad
  p4_orgullo: number; // 1-5
  p5_identidadTerritorial: number; // 1-5
  p6_conexionMercado: number; // 1-5
  
  // Bloque C - Visión
  p7_realizacionPersonal: number; // 1-5
  p8_reaccionCreativa: number; // 1-5
  p9_valorMarca: number; // 1-5
  
  // Bloque D - Fricción
  p10_obstruccion: number; // 1-5
  p11_desajuste: number; // 1-5
  p12_entropia: number; // 1-5
  p13_crisisIdentidad: number; // 1-5
  p14_commodity: number; // 1-5
}

export interface BloquesKappa {
  A_estructura: number; // suma p1-p3 (3-15)
  B_subjetividad: number; // suma p4-p6 (3-15)
  C_vision: number; // suma p7-p9 (3-15)
  D_friccion: number; // suma p10-p14 (5-25)
}

export interface CalculoKappa extends BloquesKappa {
  potenciaTotal: number; // A + B + C - D
  kappa: number; // potenciaTotal / D
  nivel: string;
  alertasCriticas: string[];
  arquetipoRiesgo: string;
}

export interface EmpresaCompleta extends EmpresaData, RespuestasKappa, CalculoKappa {
  id?: string;
}

export interface DashboardStats {
  totalEmpresas: number;
  kappaPromedio: number;
  distribucion: {
    crisis: number; // κ < 0
    precario: number; // 0 ≤ κ < 0.5
    aceptable: number; // 0.5 ≤ κ < 1
    equilibrio: number; // 1 ≤ κ < 1.1
    bronce: number; // 1.1 ≤ κ < 1.4
    plata: number; // 1.4 ≤ κ < 1.8
    oro: number; // κ ≥ 1.8
  };
  promediosBloques: {
    estructura: number;
    subjetividad: number;
    vision: number;
    friccion: number;
  };
}

export type UserRole = "empresa" | "analista" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  empresaId?: string; // Si es empresa, ID de su empresa
}

// Alertas del Bloque D
export interface AlertaFriccion {
  codigo: string;
  titulo: string;
  mensaje: string;
  severidad: "critico" | "alto" | "medio";
}

export const ALERTAS_FRICCION: Record<string, AlertaFriccion> = {
  P10: {
    codigo: "P10",
    titulo: "Esquema Obstructor",
    mensaje: "¡Atención! Su estructura normativa está actuando como un ancla, no como un mapa. Sus colaboradores están gastando más energía en 'esquivar' la burocracia que en generar valor.",
    severidad: "critico",
  },
  P11: {
    codigo: "P11",
    titulo: "Parálisis por Desajuste",
    mensaje: "Alerta de Rigidez. El organismo empresarial no está 'metabolizando' los cambios del mercado. El estrés está fragmentando la visión colectiva.",
    severidad: "alto",
  },
  P12: {
    codigo: "P12",
    titulo: "Silencio de Entropía (Burnout)",
    mensaje: "Riesgo Crítico de Agotamiento. El silencio de su equipo no es paz, es erosión. Sin alegría de potencia, la innovación es imposible.",
    severidad: "critico",
  },
  P13: {
    codigo: "P13",
    titulo: "Crisis de Identidad",
    mensaje: "Fuga de Ventaja Competitiva. Intentar parecer 'genérico' para encajar en el mercado internacional es renunciar a su mayor activo: el Piedemonte.",
    severidad: "alto",
  },
  P14: {
    codigo: "P14",
    titulo: "Trampa de la Commodity",
    mensaje: "Alerta de Vulnerabilidad de Mercado. Si su cliente elige por precio, usted no tiene una marca, tiene una subasta.",
    severidad: "medio",
  },
};
