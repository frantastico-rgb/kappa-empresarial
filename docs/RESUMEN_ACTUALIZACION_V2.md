# 📋 RESUMEN EJECUTIVO: ACTUALIZACIÓN MODELO KAPPA v2.0
**Fecha:** Febrero 10, 2026  
**Status:** Listo para cargar P15-P18 al Google Form

---

## 🎯 CAMBIOS PRINCIPALES

### **1. Estructura del Cuestionario**
- ✅ **14 → 18 preguntas** (4 nuevas de control)
- ✅ **Escalas diferenciadas:**
  - Bloques ABC (P1-P9): **0-4** (antes 1-5)
  - Bloque D (P10-P14): **1-5** (sin cambio)
  - Bloque R (P15-P18): **1-5 específicas** (NUEVO)

### **2. Fórmula Actualizada**
```
κ = [(A + B + C) - (D + R)] / (D + R)

Rango esperado: -1.0 a 3.0 (antes: valores ilimitados hasta 8+)
```

### **3. Sistema de Confianza**
- ✅ **Alertas categóricas** en lugar de factor cuantitativo
- ✅ Bloque R detecta sesgo sin manipular κ artificialmente
- ✅ Transparencia metodológica sobre limitaciones

---

## 📊 ESTRUCTURA DE COLUMNAS EN GOOGLE SHEETS

### **Columnas de Datos (Del Form):**
```
A-G:  Metadatos (Timestamp, Empresa, Contacto, etc.)
H-J:  P1-P3   Bloque A - Estructura       (0-4)
K-M:  P4-P6   Bloque B - Subjetividad     (0-4)
N-P:  P7-P9   Bloque C - Visión           (0-4)
Q-U:  P10-P14 Bloque D - Fricción         (1-5)
V-Y:  P15-P18 Bloque R - Refuerzo/Control (1-5) ← NUEVAS
```

### **Columnas de Cálculo:**
```
Z:  A_Estructura      = SUM(H:J)     [0-12]
AA: B_Subjetividad    = SUM(K:M)     [0-12]
AB: C_Visión          = SUM(N:P)     [0-12]
AC: D_Fricción        = SUM(Q:U)     [5-25]
AD: R_Patrimonio      = SUM(V:Y)     [4-20]
AE: Potencia_Total    = Z+AA+AB-AC-AD
AF: Base_Fricción     = AC+AD
AG: Kappa_κ           = AE/AF
AH: Nivel             (Bronce/Plata/Oro)
AI: Confianza_Datos   (✅/⚠️/🟠/🔴)
AJ: Alerta_Crítica    (P10-P14 ≥4)
AK: Arquetipo_Riesgo  (Unicornio, Zombie, etc.)
```

---

## 🔧 FÓRMULAS EXACTAS PARA COPIAR/PEGAR

### **Fila 1 (Headers):**
```
Z1:  A_Estructura
AA1: B_Subjetividad
AB1: C_Visión
AC1: D_Fricción
AD1: R_Patrimonio
AE1: Potencia_Total
AF1: Base_Fricción
AG1: Kappa_κ
AH1: Nivel
AI1: Confianza_Datos
AJ1: Alerta_Crítica
AK1: Arquetipo_Riesgo
```

### **Fila 2 (copiar hacia abajo):**

```excel
Z2:  =SUM(H2:J2)
AA2: =SUM(K2:M2)
AB2: =SUM(N2:P2)
AC2: =SUM(Q2:U2)
AD2: =SUM(V2:Y2)
AE2: =Z2+AA2+AB2-AC2-AD2
AF2: =AC2+AD2
AG2: =SI(AF2=0;"ERROR";AE2/AF2)

AH2: =SI(AG2="ERROR";"⚠️ REVISAR";SI(AG2<-0.5;"🔴 COLAPSO";SI(AG2<0;"🟠 CRISIS";SI(AG2<0.5;"🟡 PRECARIO";SI(AG2<1;"⚪ EQUILIBRIO";SI(AG2<1.4;"🥉 BRONCE";SI(AG2<1.8;"🥈 PLATA";"🥇 ORO")))))))

AI2: =SI(AD2<=8;"✅ DATOS CONFIABLES";SI(AD2<=12;"⚠️ CONFIANZA MEDIA";SI(AD2<=16;"🟠 BAJA CONFIANZA";"🔴 DATOS SOSPECHOSOS")))

AJ2: =SI(Q2>=4;"⚠️ Esquema Obstructor | ";"")&SI(R2>=4;"⚠️ Parálisis | ";"")&SI(S2>=4;"🔥 Burnout | ";"")&SI(T2>=4;"⚠️ Crisis Identidad | ";"")&SI(U2>=4;"⚠️ Commodity";"")

AK2: =SI(ESNUMERO(AG2);SI(Y(AG2>=1.4;Z2<6;AB2>=9);"🦄 Unicornio Caótico";SI(Y(AG2>=1.4;Z2>=9;AA2>=9;AB2>=9);"🏛️ Institución Sólida";SI(Y(AG2<1;AA2<6;AB2<7);"🧟 Commodity Zombie";SI(Y(AG2<1;Z2>=9;AA2>=9);"🎭 Artista Incomprendido";SI(Y(AG2<0;Z2>=9;AC2>=18);"🐘 Elefante Blanco";"📊 Revisar")))));"❓ Incompleto")
```

---

## 🌟 LA PREGUNTA 17: JOYA METODOLÓGICA

```
P17: ¿Qué preguntas le gustaría que le hicieran en ADN Kappa 
     que considera importantes para su desempeño?
```

| Opción | Respuesta | Nivel Maslow | Señal |
|--------|-----------|--------------|-------|
| 1 | Tengo una pregunta que quiero hacer | Autorrealización | ✅ Pensamiento crítico |
| 2 | Sobre desarrollo profesional y ascensos | Autorrealización | ✅ Engagement estratégico |
| 3 | Prefiero sobre cesantías y pensiones | Seguridad | ⚠️ Preocupación defensiva |
| 4 | Solo sobre salud (EPS/ARL) | Fisiológico | 🟠 Necesidades básicas |
| 5 | No quiero que me hagan preguntas | Desconexión | 🔴 RED FLAG TOTAL |

**Por qué es brillante:**
- Captura **jerarquía de necesidades** sin ser invasiva
- Respuesta 5 detecta **silencio de entropía** (burnout avanzado)
- Valida si P7-P9 (Visión) son respuestas honestas
- Sin ambigüedad: cada opción tiene UNA interpretación

---

## ⚖️ DECISIÓN: ALERTAS vs. FACTOR CUANTITATIVO

### **Rechazado (por ahora):**
```
Factor_Confianza = 1 - (R-4)/64
κ_ajustado = κ_bruto × Factor
```

**Problema:** El 64 es arbitrario (penalización 25% sin justificación empírica).

### **Adoptado (v2.0):**
```
SI(R ≤ 8)  → "✅ DATOS CONFIABLES"
SI(R ≤ 12) → "⚠️ CONFIANZA MEDIA"
SI(R ≤ 16) → "🟠 BAJA CONFIANZA"
SI(R ≥ 17) → "🔴 DATOS SOSPECHOSOS"
```

**Ventaja:** Transparencia metodológica. No manipulas κ con parámetros sin validar.

**Futuro (v2.1):** Tras piloto con 30+ empresas, calibrar factor empíricamente.

---

## 📈 VALORES ESPERADOS DE κ

| Escenario | A | B | C | D | R | κ Calculado | Clasificación |
|-----------|---|---|---|---|---|-------------|---------------|
| **Empresa perfecta** | 12 | 12 | 12 | 5 | 4 | (36-9)/9 = **3.0** | 🥇 Oro |
| **Empresa equilibrada** | 6 | 6 | 6 | 15 | 10 | (18-25)/25 = **-0.28** | 🟠 Crisis |
| **Empresa en colapso** | 0 | 0 | 0 | 25 | 20 | (0-45)/45 = **-1.0** | 🔴 Colapso |
| **Unicornio caótico** | 3 | 6 | 12 | 8 | 6 | (21-14)/14 = **0.5** | 🟡 Precario |
| **Institución sólida** | 10 | 10 | 10 | 12 | 6 | (30-18)/18 = **0.67** | ⚪ Equilibrio |

---

## ✅ CHECKLIST PARA HOY

### **1. Subir al Google Form:**
- [ ] **P15:** ¿La empresa le explicó cómo responder y le asignó tiempo?
  - Opciones: 1) TODO desde empresa | 2) Desde mi tiempo | 3) No estuve en explicación | 4) Amigo ayudó | 5) Casi no tengo tiempo

- [ ] **P16:** ¿Qué es lo mejor que ha recibido en su empresa?
  - Opciones: 1) Todo (salud+reconocimiento+desarrollo) | 2) Reconocimiento profesional | 3) Desarrollo personal | 4) Solo salud (EPS/ARL) | 5) Ninguna

- [ ] **P17:** ¿Qué preguntas le gustaría que le hagan en ADN Kappa?
  - Opciones: 1) Tengo pregunta importante | 2) Sobre desarrollo profesional | 3) Sobre cesantías/pensiones | 4) Solo sobre salud | 5) No quiero preguntas

- [ ] **P18:** ¿Sintió que pudo responder con tiempo y honestidad?
  - Opciones: 1) Sí | 2) No | 3) Más o menos | 4) Muy poco tiempo | 5) No sabe

### **2. Verificar en Google Sheets:**
- [ ] Confirmar que P15-P18 caigan en columnas **V, W, X, Y**
- [ ] Si no, ajustar fórmulas en consecuencia

### **3. Copiar Fórmulas:**
- [ ] Agregar headers en Z1:AK1
- [ ] Pegar fórmulas en Z2:AK2
- [ ] Copiar hacia abajo hasta última fila con datos
- [ ] Verificar que no haya errores (#REF!, #DIV/0!)

### **4. Prueba con Datos Ficticios:**
- [ ] Responder el Form como "Empresa Perfecta" (todo 4 o todo 1 según escala)
- [ ] Ver si κ ≈ 3.0
- [ ] Responder como "Empresa Crisis" (todo 0 en ABC, todo 5 en D/R)
- [ ] Ver si κ ≈ -1.0

---

## 🎯 PRÓXIMOS PASOS (Post-Carga)

1. **Validar cálculos** con 3 respuestas de prueba
2. **Crear Dashboard_Kappa** (hoja de análisis estadístico)
3. **Actualizar landing page** con transparencia metodológica
4. **Preparar plantilla de reporte** para entregar a empresas
5. **Documentar protocolo de entrevista** de validación

---

## 📚 DOCUMENTOS DE REFERENCIA

- ✅ `GUIA_FORMULAS_GOOGLE_SHEETS.txt` - Actualizado con v2.0
- ✅ `NOTAS_TECNICAS_MODELO_V2.md` - Fundamentos metodológicos completos
- ✅ `VALIDACION_METODOLOGICA_MODELO_KAPPA.txt` - Alcances y limitaciones
- ✅ `MATRIZ KAPPA 9 ITEMS.txt` - Justificación de cambios

---

## 🧠 NOTAS PARA EL INVESTIGADOR

### **Sobre el "64":**
El número 64 en `Factor = 1-(R-4)/64` surgió de elegir **penalización máxima = 25%**:
```
Rango_R = 20-4 = 16
Para que 16/X = 0.25 → X = 64
```

Es una **decisión de diseño razonable**, pero sin validación empírica. Por eso se decidió usar alertas categóricas en v2.0 y reservar el factor cuantitativo para v2.1 tras tener datos reales.

### **Analogía con estrés hídrico en plantas:**
Tu intuición sobre los "rangos de estrés hídrico" es acertada. En agronomía, mides tensión de agua en suelo (kPa) y estableces umbrales críticos. Similar aquí:
- R = 4-8 → "Riego óptimo" (datos confiables)
- R = 9-12 → "Estrés leve" (tolerable)
- R = 13-16 → "Estrés moderado" (requiere intervención)
- R = 17-20 → "Marchitez permanente" (datos inválidos)

El "64" sería equivalente a un "coeficiente de ajuste por déficit de presión de vapor"... que también se calibra empíricamente. 🌱

---

**¡Listo para subir las preguntas! 🚀**

*Una vez cargues P15-P18 al Form, avísame y validamos juntos que todo esté funcionando correctamente.*
