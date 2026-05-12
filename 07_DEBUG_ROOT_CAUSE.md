# 07 - Debug Root Cause

## Problema

Qué falla:

Dónde falla:

Desde cuándo:

## Reproducción

Pasos:

Resultado esperado:

Resultado actual:

## Evidencia

Logs:

Errores:

Diff reciente:

## Hipótesis

1.
2.
3.

## Reducción

Qué se puede comprobar primero con menor coste:

## Fix mínimo

Qué cambio sería el más pequeño para confirmar la hipótesis:

## Validación

- [ ] Reproduce antes del fix
- [ ] No reproduce después del fix
- [ ] Tests relevantes pasan
- [ ] No hay cambios fuera de alcance

## Prompt de debug compacto

```xml
<agent_prompt>
  <task>Investiga la causa raíz del fallo y aplica solo el fix mínimo si la causa está confirmada.</task>
  <context></context>
  <evidence></evidence>
  <scope></scope>
  <do_not_touch></do_not_touch>
  <validation></validation>
</agent_prompt>
```
