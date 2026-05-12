# 11 - Context Compression

## Regla principal

El contexto bueno no es el más largo. Es el que permite decidir y ejecutar sin ambigüedad.

## Mantener

- Objetivo.
- Estado actual.
- Estado deseado.
- Archivos relevantes.
- Restricciones.
- Decisiones tomadas.
- Validación.

## Eliminar

- Debate ya resuelto.
- Alternativas descartadas salvo que eviten repetir errores.
- Logs enormes si basta con el error clave.
- Información de herramientas externas que el chat/agente no puede usar.
- Historia personal no operativa.

## Formato comprimido

```md
## Objetivo

## Contexto mínimo

## Decisión

## Alcance

## Validación

## Prompt final
```

## Señal de exceso de contexto

Si el prompt final tiene más de 1200-1800 palabras para una tarea pequeña, probablemente contiene basura contextual.
