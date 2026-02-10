import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calcula el Coeficiente Kappa (κ)
 * κ = (A + B + C - D) / D
 */
export function calculateKappa(
  estructura: number,
  subjetividad: number,
  vision: number,
  friccion: number
): number {
  if (friccion === 0) {
    throw new Error("Fricción no puede ser 0");
  }
  
  const potenciaTotal = estructura + subjetividad + vision - friccion;
  return potenciaTotal / friccion;
}

/**
 * Determina el nivel según el valor de κ
 */
export function getKappaLevel(kappa: number): {
  label: string;
  color: string;
  emoji: string;
} {
  if (kappa < 0) {
    return { label: "CRISIS", color: "kappa-crisis", emoji: "⛔" };
  } else if (kappa < 0.5) {
    return { label: "PRECARIO", color: "kappa-precario", emoji: "🟠" };
  } else if (kappa < 1) {
    return { label: "ACEPTABLE", color: "kappa-aceptable", emoji: "⚠️" };
  } else if (kappa < 1.1) {
    return { label: "EQUILIBRIO", color: "kappa-equilibrio", emoji: "✅" };
  } else if (kappa < 1.4) {
    return { label: "BRONCE", color: "kappa-bronce", emoji: "🥉" };
  } else if (kappa < 1.8) {
    return { label: "PLATA", color: "kappa-plata", emoji: "🥈" };
  } else {
    return { label: "ORO", color: "kappa-oro", emoji: "🥇" };
  }
}

/**
 * Determina el arquetipo organizacional
 */
export function getArquetipo(
  kappa: number,
  estructura: number,
  subjetividad: number,
  vision: number,
  friccion: number
): string {
  if (kappa >= 1.4 && estructura < 8 && vision >= 12 && friccion < 10) {
    return "🦄 Unicornio Caótico - Alto Riesgo";
  }
  
  if (kappa >= 1.4 && estructura >= 11 && subjetividad >= 11 && vision >= 11) {
    return "🏛️ Institución Sólida - Bajo Riesgo";
  }
  
  if (kappa < 1 && subjetividad < 8 && vision < 9 && friccion >= 15) {
    return "🧟 Commodity Zombie - Crítico";
  }
  
  if (kappa < 1 && estructura >= 11 && subjetividad >= 11 && vision < 9) {
    return "🎭 Artista Incomprendido - Medio Riesgo";
  }
  
  if (kappa < 0.5 && estructura >= 11 && friccion >= 18) {
    return "🐘 Elefante Blanco - Terminal";
  }
  
  return "✅ Revisar Manualmente";
}

/**
 * Formatea número con 2 decimales
 */
export function formatKappa(kappa: number): string {
  return kappa.toFixed(2);
}
