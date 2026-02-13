# TEMPLATE: Dashboard Empresa Individual
## Coeficiente Kappa - Diacua Viva

---

## 📋 INSTRUCCIONES DE USO

### 1. Crear nueva hoja en Google Sheets
**Nombre**: `DASHBOARD_XXX_[NombreEmpresa]`  
Ejemplo: `DASHBOARD_001_Dolores_Cano`

### 2. Copiar estructura y sustituir
**Variable a cambiar**: `EMP_XXX_NombreEmpresa`  
En las fórmulas, reemplazar por la hoja fuente correspondiente.

### 3. Columnas referenciadas de 'Form kappa'
- **Columna B**: EMPRESA (nombre)
- **Columna AE** (col 31): Dimensión Estructura
- **Columna AF** (col 32): Dimensión Subjetividad
- **Columna AG** (col 33): Dimensión Visión
- **Columna AH** (col 34): Dimensión Fricción
- **Columna AI** (col 35): Patrimonio Percibido
- **Columna AL** (col 38): STATUS_DUPLICADO
- **Columna AM** (col 39): CODIGO_ANONIMO (Arquetipo incluido)

---

## 📊 ESTRUCTURA DEL DASHBOARD

### SECCIÓN 1: MÉTRICAS GENERALES (Filas 1-10)

| Celda | Etiqueta | Fórmula | Descripción |
|-------|----------|---------|-------------|
| **A2** | `TOTAL EMPRESAS PARTICIPANTES` | `=COUNTIF('EMP_XXX_NombreEmpresa'!B:B,"<>")` | Cuenta filas con datos |
| **A3** | `Kappa Promedio (κ)` | `=AVERAGE('EMP_XXX_NombreEmpresa'!AL:AL)` | Promedio del coeficiente κ calculado |
| **A4** | `Empresas en Colapso (κ<-0.5)` | `=COUNTIFS('EMP_XXX_NombreEmpresa'!AL:AL,"<-0.5")` | Empresas en zona crítica |
| **A5** | `Empresas en Crisis (-0.5≤κ<0)` | `=COUNTIFS('EMP_XXX_NombreEmpresa'!AL:AL,">=-0.5",'EMP_XXX_NombreEmpresa'!AL:AL,"<0")` | Empresas en zona roja |
| **A6** | `Empresas Precarias (0≤κ<0.5)` | `=COUNTIFS('EMP_XXX_NombreEmpresa'!AL:AL,">=0",'EMP_XXX_NombreEmpresa'!AL:AL,"<0.5")` | Zona amarilla |
| **A7** | `Empresas Equilibrio (0.5≤κ<1)` | `=COUNTIFS('EMP_XXX_NombreEmpresa'!AL:AL,">=0.5",'EMP_XXX_NombreEmpresa'!AL:AL,"<1")` | Zona verde claro |
| **A8** | `Empresas Bronce (1≤κ<1.4)` | `=COUNTIFS('EMP_XXX_NombreEmpresa'!AL:AL,">=1",'EMP_XXX_NombreEmpresa'!AL:AL,"<1.4")` | Zona verde |
| **A9** | `Empresas Plata (1.4≤κ<1.8)` | `=COUNTIFS('EMP_XXX_NombreEmpresa'!AL:AL,">=1.4",'EMP_XXX_NombreEmpresa'!AL:AL,"<1.8")` | Zona verde oscuro |
| **A10** | `Empresas Oro (κ≥1.8)` | `=COUNTIFS('EMP_XXX_NombreEmpresa'!AL:AL,">=1.8")` | Zona dorada - excelencia |

---

### SECCIÓN 2: DIMENSIONES DEL MODELO (Filas 11-16)

| Celda | Etiqueta | Fórmula Promedio | Fórmula Máximo | Fórmula Mínimo |
|-------|----------|------------------|----------------|----------------|
| **A12** | `(Promedio Estructura)` | **B12**: `=AVERAGE('EMP_XXX_NombreEmpresa'!AE:AE)` | **C12**: `=MAX('EMP_XXX_NombreEmpresa'!AE:AE)` | **D12**: `=MIN('EMP_XXX_NombreEmpresa'!AE:AE)` |
| **A13** | `(Promedio Subjetividad)` | **B13**: `=AVERAGE('EMP_XXX_NombreEmpresa'!AF:AF)` | **C13**: `=MAX('EMP_XXX_NombreEmpresa'!AF:AF)` | **D13**: `=MIN('EMP_XXX_NombreEmpresa'!AF:AF)` |
| **A14** | `(Promedio Visión)` | **B14**: `=AVERAGE('EMP_XXX_NombreEmpresa'!AG:AG)` | **C14**: `=MAX('EMP_XXX_NombreEmpresa'!AG:AG)` | **D14**: `=MIN('EMP_XXX_NombreEmpresa'!AG:AG)` |
| **A15** | `(Promedio Fricción)` | **B15**: `=AVERAGE('EMP_XXX_NombreEmpresa'!AH:AH)` | **C15**: `=MAX('EMP_XXX_NombreEmpresa'!AH:AH)` | **D15**: `=MIN('EMP_XXX_NombreEmpresa'!AH:AH)` |
| **A16** | `Patrimonio Percibido` | **B16**: `=AVERAGE('EMP_XXX_NombreEmpresa'!AI:AI)` | **C16**: `=MAX('EMP_XXX_NombreEmpresa'!AI:AI)` | **D16**: `=MIN('EMP_XXX_NombreEmpresa'!AI:AI)` |

**Headers para columnas B, C, D (fila 11)**:
- **B11**: `PROMEDIO`
- **C11**: `MÁXIMO`
- **D11**: `MÍNIMO`

---

### SECCIÓN 3: ARQUETIPOS ORGANIZACIONALES (Filas 17-24)

Esta sección cuenta cuántos empleados identificaron cada arquetipo en la columna **AM** (CODIGO_ANONIMO).

| Celda | Arquetipo | Fórmula | Emoji |
|-------|-----------|---------|-------|
| **A18** | `UNICORNIO` | **C18**: `=COUNTIF('EMP_XXX_NombreEmpresa'!AM:AM,"🦄 *")` | 🦄 |
| **A19** | `Institución Sólida` | **C19**: `=COUNTIF('EMP_XXX_NombreEmpresa'!AM:AM,"🏛️ *")` | 🏛️ |
| **A20** | `Commodity Zombie` | **C20**: `=COUNTIF('EMP_XXX_NombreEmpresa'!AM:AM,"🧟 *")` | 🧟 |
| **A21** | `Artista Incomprendido` | **C21**: `=COUNTIF('EMP_XXX_NombreEmpresa'!AM:AM,"🎭 *")` | 🎭 |
| **A22** | `Elefante Blanco` | **C22**: `=COUNTIF('EMP_XXX_NombreEmpresa'!AM:AM,"🐘 *")` | 🐘 |
| **A23** | `Startup en Llamas` | **C23**: `=COUNTIF('EMP_XXX_NombreEmpresa'!AM:AM,"🔥 *")` | 🔥 |
| **A24** | `Titanic Dorado` | **C24**: `=COUNTIF('EMP_XXX_NombreEmpresa'!AM:AM,"🚢 *")` | 🚢 |

**Headers para fila 17**:
- **A17**: `ARQUETIPO`
- **C17**: `CANTIDAD`

---

## 🎨 FORMATO RECOMENDADO

### Colores de fondo:
- **Headers (fila 1, 11, 17)**: `#1a1a2e` (azul oscuro) con texto blanco
- **Etiquetas columna A**: `#16213e` (azul medio) con texto blanco
- **Valores columna B**: `#0f4c75` (azul) con texto blanco
- **Zona crítica (κ<0)**: `#ff6b6b` (rojo)
- **Zona segura (κ≥1)**: `#51cf66` (verde)

### Formatos numéricos:
- **Kappa Promedio (B3)**: 2 decimales (`2.44`)
- **Dimensiones (B12-B16)**: 0 decimales (`8`, `15`, `9`)
- **Conteos**: 0 decimales

---

## 🔄 PROCESO DE IMPLEMENTACIÓN

### Para crear dashboard de PRUEBA:
1. Crear hoja: `DASHBOARD_001_Dolores_Cano`
2. Copiar estructura de esta template
3. Buscar/Reemplazar: `EMP_XXX_NombreEmpresa` → `EMP_001_Dolores_Cano`
4. Aplicar formatos de color
5. Probar con datos existentes

### Para crear dashboard de PRODUCCIÓN:
1. Crear hoja: `DASHBOARD_[ID]_[NombreReal]`  
   Ejemplo: `DASHBOARD_027_TecnoSolutions`
2. Buscar/Reemplazar: `EMP_XXX_NombreEmpresa` → `EMP_027_TecnoSolutions`
3. Verificar que exista la hoja fuente `EMP_027_TecnoSolutions`
4. Validar que las columnas AE-AM existan en Form kappa

---

## 📌 NOTAS IMPORTANTES

### ✅ Ventajas de esta template:
- **Reutilizable**: Crear 20+ dashboards en minutos
- **Mantenible**: Cambios en estructura se replican fácilmente
- **Escalable**: Funciona igual con 5 o 500 empleados por empresa
- **Portable**: Se puede exportar/importar entre spreadsheets

### ⚠️ Consideraciones:
- **Dependencia de columnas**: Si cambias columnas en Form kappa, actualizar referencias
- **Nombres de hojas**: Respetar formato `EMP_XXX_NombreEmpresa` para consistencia
- **Arquetipos**: Los emojis deben coincidir exactamente con los definidos en el sistema

### 🔍 Validación pre-implementación:
1. Verificar que la hoja fuente (`EMP_XXX_...`) exista
2. Confirmar que tiene datos (mínimo 1 fila)
3. Validar columnas AE-AM con datos
4. Probar fórmula B2 (debe devolver número > 0)

---

## 📚 REFERENCIAS

- **Documentación modelo**: `/docs/NOTAS_TECNICAS_MODELO_V2.md`
- **Guía empresas**: `/docs/GUIA_GESTION_EMPRESAS.md`
- **Fórmulas Google Sheets**: `/docs-referencia/GUIA_FORMULAS_GOOGLE_SHEETS.txt`

---

## 🚀 AUTOMATIZACIÓN FUTURA (Opcional)

Si en el futuro necesitas crear múltiples dashboards automáticamente, puedes usar **Apps Script**:

```javascript
function crearDashboardEmpresa(idEmpresa, nombreEmpresa) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var templateSheet = ss.getSheetByName('TEMPLATE_DASHBOARD');
  var nombreHoja = 'DASHBOARD_' + idEmpresa + '_' + nombreEmpresa;
  
  // Duplicar template
  var nuevaHoja = templateSheet.copyTo(ss);
  nuevaHoja.setName(nombreHoja);
  
  // Reemplazar referencias (buscar todas las celdas con fórmulas)
  var rangoFormulas = nuevaHoja.getDataRange();
  var formulas = rangoFormulas.getFormulas();
  
  for (var i = 0; i < formulas.length; i++) {
    for (var j = 0; j < formulas[i].length; j++) {
      if (formulas[i][j]) {
        formulas[i][j] = formulas[i][j].replace(
          /EMP_XXX_NombreEmpresa/g, 
          'EMP_' + idEmpresa + '_' + nombreEmpresa
        );
      }
    }
  }
  
  rangoFormulas.setFormulas(formulas);
  Logger.log('✓ Dashboard creado: ' + nombreHoja);
}
```

---

**Versión**: 1.0  
**Fecha**: 2026-02-12  
**Autor**: Sistema Kappa - Diacua Viva
