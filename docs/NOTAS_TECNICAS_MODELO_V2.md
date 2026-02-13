# 📋 NOTAS TÉCNICAS: MODELO KAPPA v2.0
## Febrero 10, 2026

---

## 🎯 RESUMEN EJECUTIVO DE CAMBIOS

### **De 14 a 18 Preguntas**
- **Bloques ABC (Estructura/Subjetividad/Visión):** 9 preguntas (P1-P9)
- **Bloque D (Fricción):** 5 preguntas (P10-P14)
- **Bloque R (Refuerzo/Patrimonio Percibido):** 4 preguntas NUEVAS (P15-P18)

### **Cambio de Escalas**
| Bloque | Versión 1.0 | Versión 2.0 | Justificación |
|--------|-------------|-------------|---------------|
| **A, B, C** | Likert 1-5 | **0-4** | Un activo puede NO EXISTIR (0). Elimina ambigüedad en extremos. |
| **D** | Likert 1-5 | **1-5** | Fricción mínima siempre existe (entropía natural). |
| **R (nuevo)** | - | **1-5** | Preguntas específicas no-Likert, pero rango similar. |

---

## 📐 FÓRMULA ACTUALIZADA

### **Versión 1.0 (obsoleta):**
```
κ = (A + B + C - D) / D
```

### **Versión 2.0 (actual):**
```
κ = [(A + B + C) - (D + R)] / (D + R)

Donde:
  A = Estructura (P1+P2+P3)       → Rango 0-12
  B = Subjetividad (P4+P5+P6)     → Rango 0-12
  C = Visión (P7+P8+P9)           → Rango 0-12
  D = Fricción (P10+...+P14)      → Rango 5-25
  R = Patrimonio (P15+...+P18)    → Rango 4-20
```

### **Rango Esperado de κ:**
- **Mínimo teórico:** κ = (0-45) / 45 = **-1.0** (colapso total)
- **Máximo teórico:** κ = (36-9) / 9 = **3.0** (perfección organizacional)
- **Rango práctico esperado:** -0.5 a 2.5

---

## 🔬 EL BLOQUE R: PATRIMONIO PERCIBIDO

### **Propósito:**
Medir la **calidad del contexto de medición** para detectar sesgo, presión organizacional o respuestas automatizadas.

### **Las 4 Preguntas de Control:**

#### **P15: Condiciones de Aplicación** (valida Estructura)
*"¿La empresa le explicó cómo responder y le asignó tiempo?"*

| Opción | Texto | Interpretación |
|--------|-------|----------------|
| 1 | TODO desde la empresa | ✅ Estructura fluida, comunicación clara |
| 2 | Desde mi tiempo en casa | ⚠️ Poca prioridad organizacional |
| 3 | No estuve en explicación | 🟠 Desconexión de procesos |
| 4 | Un amigo me ayudó | 🔴 Confusión, falta de apoyo |
| 5 | Casi no tengo tiempo | 🔴 Sobrecarga laboral |

**Señal:** Respuesta 4-5 contradice P1 (Fluidez Organizacional) si esta es alta.

---

#### **P16: Mejor Beneficio Recibido** (valida Subjetividad)
*"¿Qué es lo mejor que ha recibido en su empresa?"*

| Opción | Texto | Interpretación |
|--------|-------|----------------|
| 1 | Todo (Salud, reconocimiento, desarrollo personal) | ✅ Alta percepción de valor |
| 2 | Reconocimiento profesional | ✅ Empresa valora méritos |
| 3 | Desarrollo personal | ⚠️ Beneficio moderado |
| 4 | Solo salud (EPS/ARL) | 🟠 Beneficios básicos únicamente |
| 5 | Ninguna de las anteriores | 🔴 Desconexión crítica |

**Señal:** Respuesta 4-5 contradice P4-P6 (Subjetividad) si estas son altas.

---

#### **P17: Tipo de Pregunta Deseada** (valida Visión) 🌟
*"¿Qué preguntas le gustaría que le hicieran en ADN Kappa?"*

| Opción | Texto | Maslow | Interpretación |
|--------|-------|--------|----------------|
| 1 | Tengo una pregunta que quiero hacer | **Autorrealización** | ✅ Pensamiento crítico activo |
| 2 | Sobre desarrollo profesional y ascensos | **Autorrealización** | ✅ Engagement estratégico |
| 3 | Prefiero sobre cesantías y pensiones | **Seguridad** | ⚠️ Preocupación defensiva |
| 4 | Solo sobre salud (EPS/ARL) | **Fisiológico** | 🟠 Necesidades básicas |
| 5 | No quiero que me hagan preguntas | **Desconexión** | 🔴 Apatía, burnout, miedo |

**Innovación metodológica:** Esta pregunta captura la **jerarquía de Maslow implícita** sin ser invasiva.

**Señal:** Respuesta 5 es **red flag total** - indica silencio de entropía avanzado.

---

#### **P18: Honestidad de Respuestas** (valida TODO)
*"¿Sintió que pudo responder con tiempo y honestidad?"*

| Opción | Texto | Señal |
|--------|-------|-------|
| 1 | Sí | ✅ Datos confiables |
| 2 | No | 🔴 Respuestas bajo presión |
| 3 | Más o menos | ⚠️ Dudas sobre veracidad |
| 4 | Muy poco tiempo | 🟠 Respuestas apresuradas |
| 5 | No sabe | 🔴 Respondió por inercia |

**Señal:** Respuesta 3-5 invalida TODO el cuestionario.

---

## 📊 SISTEMA DE CONFIANZA DE DATOS

### **Enfoque Adoptado: Alertas Categóricas**

En lugar de ajustar κ con un factor multiplicador (que sería arbitrario), usamos **umbrales de alerta**:

```excel
Confianza_Datos = 
  SI(R ≤ 8,  "✅ DATOS CONFIABLES")
  SI(R ≤ 12, "⚠️ CONFIANZA MEDIA - Revisar contexto")
  SI(R ≤ 16, "🟠 BAJA CONFIANZA - Entrevista recomendada")
  SI(R ≥ 17, "🔴 DATOS SOSPECHOSOS - No usar para decisiones críticas")
```

### **Interpretación:**
- **R = 4-8:** Contexto ideal, respuestas confiables
- **R = 9-12:** Contexto aceptable, κ es válido con reservas
- **R = 13-16:** Sesgo probable, validar con entrevista
- **R = 17-20:** Datos comprometidos, reaplicar cuestionario

### **¿Por qué NO usar factor de confianza cuantitativo?**
El "64" en `Factor = 1 - (R-4)/64` es **arbitrario** (25% penalización máxima sin justificación empírica).

**Decisión metodológica:** Para v2.0 usamos alertas categóricas. En v2.1 (post-piloto con 30+ empresas) se calibrará un factor basado en datos reales.

---

## 🎯 UMBRALES DE κ ACTUALIZADOS

| Rango | Clasificación | Emoji | Significado |
|-------|---------------|-------|-------------|
| κ < -0.5 | Colapso Crítico | 🔴 | Fricción supera potencia dramáticamente |
| -0.5 ≤ κ < 0 | Crisis Operativa | 🟠 | Fricción mayor que potencia |
| 0 ≤ κ < 0.5 | Precario | 🟡 | Potencia apenas iguala fricción |
| 0.5 ≤ κ < 1 | Equilibrio Frágil | ⚪ | Potencia ligeramente superior a fricción |
| 1 ≤ κ < 1.4 | **Bronce** | 🥉 | Organismo en flujo |
| 1.4 ≤ κ < 1.8 | **Plata** | 🥈 | Potencia identitaria |
| κ ≥ 1.8 | **Oro** | 🥇 | Soberanía exportadora |

---

## 🧪 VALIDACIÓN PENDIENTE

### **Antes de Lanzamiento Oficial:**

1. **Simulación con 10 empresas ficticias:**
   - Empresa perfecta (A=12, B=12, C=12, D=5, R=4) → κ esperado: ~3.0
   - Empresa en crisis (A=0, B=0, C=0, D=25, R=20) → κ esperado: ~-1.0
   - Empresa equilibrada (A=6, B=6, C=6, D=15, R=10) → κ esperado: ~-0.28

   **Verificar:** ¿Los resultados son intuitivamente correctos?

2. **Piloto con 3 empresas reales conocidas:**
   - Aplicar cuestionario completo
   - Calcular κ
   - Entrevista de validación: "¿Este resultado refleja su realidad?"
   - Ajustar umbrales si es necesario

3. **Prueba de consistencia interna (Cronbach's α):**
   - Verificar que P1-P3 (Estructura) midan lo mismo
   - Verificar que P15 valide realmente el Bloque A
   - Verificar que P17 correlacione con P7-P9 (Visión)

---

## 📝 DOCUMENTACIÓN PARA LA WEB

### **Transparencia Metodológica (Landing Page):**

```markdown
## ¿Qué mide el Coeficiente Kappa?

κ es un **indicador exploratorio de vitalidad organizacional**, 
no una verdad absoluta. Captura la relación entre:

- **Potencia:** Estructura + Subjetividad + Visión (0-36 puntos)
- **Fricción:** Obstrucciones + Burnout + Crisis identitarias (9-45 puntos)

### Limitaciones reconocidas:
- κ captura una **fotografía instantánea**, no predice futuro sin seguimiento
- Basado en autopercepción, susceptible a sesgo de deseabilidad social
- Requiere validación cualitativa (entrevistas) para decisiones críticas

### ¿Para qué SÍ sirve?
✅ Detectar empresas en crisis vs. floreciendo  
✅ Priorizar intervenciones organizacionales  
✅ Iniciar diálogos estratégicos con fundadores  
✅ Comparar vitalidad antes/después de programas de mejora  

### ¿Para qué NO sirve?
❌ Reemplazar due diligence financiera  
❌ Tomar decisiones de inversión sin análisis complementario  
❌ Evaluar desempeño individual de empleados  
```

---

## 🔄 ROADMAP DE VALIDACIÓN

### **Fase 1: Piloto Exploratorio (Feb-Ago 2026)**
- 20-30 empresas del Piedemonte
- Medición κ inicial
- Entrevistas de validación con 5-7 empresas

### **Fase 2: Seguimiento Longitudinal (Ago 2026)**
- Re-medición κ a los 6 meses
- Análisis de supervivencia empresarial
- ¿Cuántas siguen operando? ¿Cuántas crecieron?

### **Fase 3: Ajuste Empírico (Sep 2026)**
- Calibrar ponderaciones (¿A, B o C predice mejor supervivencia?)
- Definir benchmarks sectoriales
- Calibrar factor de confianza basado en R

### **Fase 4: Publicación (Oct 2026)**
- Whitepaper con resultados
- Modelo v3.0 con ponderaciones validadas
- Potencial publicación académica

---

## 🎓 CITAS METODOLÓGICAS

### **Fundamentos:**
- **Spinoza (1677):** Concepto de *conatus* (esfuerzo por perseverar)
- **Maslow (1943):** Jerarquía de necesidades (aplicado en P17)
- **Maslach & Jackson (1981):** Burnout Inventory (base del Bloque D)
- **DeVellis (2016):** Teoría de desarrollo de escalas

### **Precedentes:**
- **NPS (Reichheld, 2003):** Métrica simple con limitaciones metodológicas que se volvió estándar de industria
- **Balanced Scorecard (Kaplan & Norton):** Múltiples dimensiones de desempeño organizacional

---

## ✅ CHECKLIST PRE-LANZAMIENTO

- [ ] Subir P15-P18 al Google Form
- [ ] Verificar que caigan en columnas V, W, X, Y del Sheet
- [ ] Copiar fórmulas Z-AK en Sheet principal
- [ ] Crear hoja "Dashboard_Kappa" con estadísticas
- [ ] Probar con 3 respuestas ficticias (perfecta, crisis, intermedia)
- [ ] Validar que κ esté en rango -1 a 3
- [ ] Actualizar landing page con transparencia metodológica
- [ ] Preparar plantilla de reporte para empresas
- [ ] Documentar protocolo de entrevista de validación

---

## 🚨 ALERTAS PARA EL ANALISTA

### **Cuando R ≥ 13:**
> "Los datos de esta empresa requieren validación cualitativa. 
> El contexto de aplicación sugiere respuestas bajo presión o 
> sin suficiente reflexión. Recomendación: Entrevista telefónica 
> de 15 minutos para confirmar resultados."

### **Cuando P17 = 5 (No quiero preguntas):**
> "Esta persona muestra signos de desconexión organizacional severa. 
> Posible burnout avanzado o ambiente laboral tóxico. Priorizar 
> para intervención en Bloque B (Subjetividad)."

### **Cuando κ < 0 pero R ≤ 8:**
> "Datos confiables indican crisis real. La empresa está en zona 
> crítica donde la fricción supera la potencia. Requiere 
> diagnóstico urgente de Bloque D (Fricción)."

---

**Documento vivo** - Actualizar tras cada aplicación del instrumento.

---

*Francisco Javier Valenzuela Forero*  
*Proyecto Diacua Viva - Coeficiente Kappa*  
*Febrero 10, 2026*
