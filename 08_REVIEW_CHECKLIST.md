# 08 - Review Checklist

## Revisión del diff

- [ ] El cambio resuelve el objetivo.
- [ ] No hay archivos tocados fuera de alcance.
- [ ] No se han añadido secretos ni datos sensibles.
- [ ] No hay cambios cosméticos innecesarios.
- [ ] El nombre de variables/funciones es claro.
- [ ] No se ha roto compatibilidad sin aviso.

## Revisión de comportamiento

- [ ] El flujo principal funciona.
- [ ] El caso de error sigue controlado.
- [ ] La UI/API mantiene contrato esperado.
- [ ] Los edge cases importantes están considerados.

## Revisión de tests

- [ ] Tests existentes pasan.
- [ ] Hay test nuevo si el cambio lo merece.
- [ ] No se han eliminado tests para hacer pasar el build.

## Resumen para PR

```md
## Qué cambia

## Por qué

## Cómo se validó

## Riesgos / follow-ups
```
