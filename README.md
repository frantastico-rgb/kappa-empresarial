# Web Kappa Empresarial

Sistema de medición de vitalidad organizacional basado en el **Coeficiente Kappa (κ)** - Modelo Diacua Viva.

## 🎯 Objetivo

Proporcionar una métrica cuantitativa que evalúe la capacidad exportadora de empresas del Piedemonte Llanero mediante el análisis de su potencia organizacional vs. fricción interna.

## 📐 Fórmula Base

```
κ = (A + B + C - D) / D

Donde:
A = Estructura (Sincronía + Simplicidad + Coherencia)
B = Subjetividad (Orgullo + Identidad + Conexión)
C = Visión (Realización + Creatividad + Valor de Marca)
D = Fricción (Obstrucción + Desajuste + Entropía + Crisis + Commodity)
```

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
