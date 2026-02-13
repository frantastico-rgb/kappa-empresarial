# Web Kappa Empresarial

Sistema de medición de vitalidad organizacional basado en el **Coeficiente Kappa (κ)** - Modelo Diacua Viva.

> **Versión 2.0** - Febrero 2026 | 18 Preguntas + Sistema de Confianza de Datos

## 🎯 Objetivo

Proporcionar una métrica cuantitativa que evalúe la capacidad exportadora de empresas del Piedemonte Llanero mediante el análisis de su potencia organizacional vs. fricción interna, con sistema de validación de calidad de datos.

## 📐 Fórmula Actualizada (v2.0)

```
κ = [(A + B + C) - (D + R)] / (D + R)

Donde:
A = Estructura (Fluidez + Adaptabilidad + Simetría)          → Escala 0-4 | Rango 0-12
B = Subjetividad (Sentido Obra + Identidad + Conexión)      → Escala 0-4 | Rango 0-12
C = Visión (Realización + Creatividad + Valor Marca)        → Escala 0-4 | Rango 0-12
D = Fricción (5 preguntas de obstrucción y entropía)        → Escala 1-5 | Rango 5-25
R = Patrimonio Percibido (4 preguntas de control de sesgo)  → Escala 1-5 | Rango 4-20

Rango esperado: -1.0 a 3.0
```

### 🆕 Novedades v2.0:
- ✅ **Escala 0-4 para Bloques ABC**: Un activo puede NO EXISTIR (0)
- ✅ **Bloque R (Refuerzo)**: 4 preguntas que validan calidad de datos
- ✅ **Sistema de Alertas Categóricas**: Detecta sesgo sin manipular κ artificialmente
- ✅ **Rango acotado**: De valores ilimitados (1-8+) a rango interpretable (-1 a 3)

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilo**: Tailwind CSS
- **UI**: Shadcn/ui
- **Autenticación**: NextAuth.js
- **Data Source**: Google Sheets API
- **Gráficos**: Recharts
- **PDF**: react-pdf

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Configurar las variables en .env

# Ejecutar en desarrollo
npm run dev
```

## 🔐 Variables de Entorno Requeridas

Ver `.env.example` para la lista completa. Las principales son:

- `GOOGLE_SPREADSHEET_ID`: ID de tu Google Sheet
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Email de la cuenta de servicio
- `GOOGLE_PRIVATE_KEY`: Clave privada para autenticación
- `NEXTAUTH_SECRET`: Secreto para NextAuth (genera con `openssl rand -base64 32`)

## 📊 Estructura del Proyecto

```
/app
  /(marketing)/       # Landing page
  /(auth)/           # Login/Callback
  /(dashboard)/      # Dashboards empresa y analista
  /api/              # API routes
/components
  /ui/               # Componentes Shadcn
  /charts/           # Visualizaciones
/lib
  /google-sheets/    # Integración API
  /kappa/            # Lógica Coeficiente κ
  /validators/       # Schemas Zod
/types               # Tipos TypeScript
```

## 🎨 Niveles de Coeficiente κ

| κ         | Nivel       | Emoji |
|-----------|-------------|-------|
| < 0       | Crisis      | ⛔    |
| 0 - 0.5   | Precario    | 🟠    |
| 0.5 - 1   | Aceptable   | ⚠️    |
| 1 - 1.1   | Equilibrio  | ✅    |
| 1.1 - 1.4 | Bronce      | 🥉    |
| 1.4 - 1.8 | Plata       | 🥈    |
| ≥ 1.8     | Oro         | 🥇    |

## 👨‍💻 Autor

**Francisco Javier Valenzuela Forero**  
Investigador - SENA  
francisco.valenzuela@soy.sena.edu.co

## 📄 Licencia

Proyecto de investigación-acción para cambio de paradigma en evaluación de competitividad empresarial.

---

*"La soberanía empresarial no se decreta, se mide."*
