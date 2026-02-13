# 📋 GUÍA DE GESTIÓN DE EMPRESAS - Sistema Kappa

## 🏷️ Sistema de Identificación

### Formato de IDs
```
Estructura: [ID] [Nombre Empresa]
Ejemplo: 001 Dolores Cano
```

**Rango:** 001-099 (99 empresas máximo con 3 dígitos)

---

## 📊 Estado Actual (Febrero 2026)

### Empresas de Prueba

| ID  | Nombre Completo | Estado | Cupo | Notas |
|-----|-----------------|--------|------|-------|
| 001 | 001 Dolores Cano | PRUEBA | 20 | Datos de testing inicial |
| 002 | 002 Empresa Resiliente del Llano | PRUEBA | 30 | Simulación |
| 003 | 003 Orfebreria el Cuerno | PRUEBA | 15 | Simulación |
| 004 | 004 Empresa Test SAS | PRUEBA | 45 | Simulación |

**⚠️ IMPORTANTE:** Estos son datos de prueba. En producción se reemplazarán con empresas reales.

---

## ➕ Agregar Nueva Empresa

### Paso 1: Asignar ID
1. Revisar último ID usado en CATALOGO_EMPRESAS
2. Asignar siguiente número secuencial (ej: 005)
3. Formato: `005 Nombre Nueva Empresa`

### Paso 2: Actualizar Formulario
1. Google Forms > Modo edición
2. Pregunta "EMPRESA"
3. Agregar nueva opción: `005 Nombre Nueva Empresa`
4. ⚠️ Verificar que "Add other" esté DESACTIVADO

### Paso 3: Actualizar Script
```javascript
// En Apps Script, agregar a la lista:
var empresasAutorizadas = [
  '001 Dolores Cano',
  '002 Empresa Resiliente del Llano',
  '003 Orfebreria el Cuerno',
  '004 Empresa Test SAS',
  '005 Nombre Nueva Empresa'  // ← NUEVA
];

// Agregar cupo:
var cuposEmpresa = {
  //... empresas existentes
  '005 Nombre Nueva Empresa': 25  // ← NUEVA
};
```

### Paso 4: Crear Hoja Individual
1. En Google Sheets: `+` Nueva hoja
2. Nombre: `EMP_005_NombreCorto`
3. En celda A1:
   ```excel
   =QUERY('Form kappa'!A:AM,
     "SELECT * WHERE B='005 Nombre Nueva Empresa' AND B<>''", 1)
   ```

### Paso 5: Generar Link Único
```
Base: https://docs.google.com/forms/d/e/[FORM_ID]/viewform

Link: ?entry.[CAMPO_ID]=005%20Nombre%20Nueva%20Empresa
```

### Paso 6: Actualizar CATALOGO_EMPRESAS
Agregar fila con: ID, Nombre, Cupo, Sector, Email contacto, Estado

---

## 🔄 Cambiar Nombre de Empresa (Sin cambiar ID)

### Escenario: "001 Dolores Cano" → "001 Alimentos del Llano SAS"

**IMPORTANTE:** El ID no cambia, solo el nombre.

1. **Formulario:** Editar opción, cambiar nombre
2. **Script:** Actualizar listas (empresasAutorizadas, cuposEmpresa)
3. **Fórmulas QUERY:** Actualizar WHERE B='...'
4. **CATALOGO_EMPRESAS:** Actualizar nombre
5. **Links:** Regenerar con nuevo nombre

**⚠️ Las respuestas antiguas mantendrán el nombre anterior en el sheet.**

---

## 🗑️ Desactivar Empresa

### NO eliminar, marcar como INACTIVA

1. **CATALOGO_EMPRESAS:** Estado → INACTIVA
2. **Formulario:** Eliminar opción de la lista
3. **Script:** Comentar en lista autorizada
4. **Sheet individual:** Renombrar a `_INACTIVA_EMP_001_...`

**Mantener datos históricos para auditoría.**

---

## 📊 Estructura de Archivos

```
Google Sheets:
├── Form kappa (Responses)           ← Todas las respuestas
├── CATALOGO_EMPRESAS                ← Registro maestro
├── DASHBOARD_GENERAL                ← Consolidado
├── EMP_001_Dolores_Cano             ← Individual
├── EMP_002_Resiliente               ← Individual
└── ...

Google Forms:
└── ADN EMPRESARIAL COEF. KAPPA
    └── Pregunta "EMPRESA" (Multiple choice)
        ├── 001 Dolores Cano
        ├── 002 Empresa Resiliente...
        └── [Sin "Add other"]

Apps Script:
└── Control Duplicados Kappa
    ├── onFormSubmit()               ← Detector automático
    ├── agregarHeaders()             ← Setup inicial
    └── Variables: empresasAutorizadas, cuposEmpresa
```

---

## 🔐 Control de Acceso

### Campo "EMPRESA" - Configuración Crítica

✅ **DEBE estar:**
- Tipo: Multiple choice
- Obligatoria: SÍ
- Add other: **NO** ← Evita empresas no autorizadas

✅ **NO debe tener:**
- Campo abierto de texto
- Opción "Otro"
- Validación regex (no aplica para multiple choice)

---

## 📝 Registro de Cambios

### Febrero 11, 2026
- ✅ Sistema de IDs implementado (001-004)
- ✅ Empresas de prueba configuradas
- ✅ Script de detección de duplicados activo
- ✅ Control de empresas autorizadas implementado

### [Próximas actualizaciones]
- [ ] Migración a empresas reales (producción)
- [ ] Sistema de cupos automático
- [ ] Dashboard general consolidado

---

## 📞 Contacto Administración

**Responsable:** Francisco Javier Valenzuela Forero  
**Email:** francisco.valenzuela@soy.sena.edu.co  
**Proyecto:** Coeficiente Kappa - Diacua Viva

---

**Última actualización:** Febrero 11, 2026
