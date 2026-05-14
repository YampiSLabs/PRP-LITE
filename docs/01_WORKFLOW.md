# 01 - Workflow PRP Lite

## Flujo corto

```text
Petición
→ Investigación mínima
→ PRP Lite
→ Diálogo de decisión
→ Plan
→ Prompt XML final
→ Ejecución por agente
→ Review y validación
→ Nota de memoria
```

## 1. Captura

Define:

- Qué se quiere lograr.
- Por qué importa.
- Qué repo/issue/feature afecta.
- Qué no debe tocarse.
- Cómo se validará.

Salida mínima:

```md
Objetivo:
Estado actual:
Estado deseado:
No tocar:
Validación:
```

## 2. Investigación mínima

Reúne solo lo necesario:

- Archivos relevantes.
- Comportamiento actual.
- Error o limitación.
- Restricciones conocidas.
- Ejemplos similares.

## 3. Decisión

Antes de ejecutar, cerrar:

- enfoque elegido;
- alcance;
- riesgos aceptados;
- validación mínima.

Si hay más de una ruta razonable, presenta opciones A/B/C con coste, riesgo y recomendación.

## 4. Plan

El plan debe tener pocos pasos. Si tiene más de 7, probablemente necesita dividirse.

Cada paso debe ser verificable. Evita pasos como “mejorar todo” o “revisar el repo completo” salvo que el alcance lo exija.

## 5. Prompt final

El prompt final debe ser compacto, imperativo y delimitado con tags XML.

Debe incluir:

- tarea;
- contexto mínimo;
- alcance permitido;
- zonas prohibidas;
- restricciones;
- pasos;
- validación;
- formato de salida.

## 6. Review

Después de que el agente ejecute:

- revisar diff;
- buscar cambios fuera de alcance;
- comprobar tests;
- documentar decisión o aprendizaje.
