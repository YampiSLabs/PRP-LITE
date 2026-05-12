# 09 - Validation Checklist

## Validación automática

- [ ] Tests unitarios
- [ ] Tests integración
- [ ] Lint
- [ ] Typecheck
- [ ] Build
- [ ] CI

## Validación manual

- [ ] Ruta feliz
- [ ] Caso vacío
- [ ] Caso error
- [ ] Caso permisos/autenticación si aplica
- [ ] Comprobación visual si hay UI

## Validación de alcance

- [ ] No tocó zonas prohibidas.
- [ ] No cambió APIs sin documentarlo.
- [ ] No introdujo dependencias innecesarias.
- [ ] No expandió el problema original.

## Si algo falla

Registrar:

- comando;
- error;
- hipótesis;
- siguiente acción mínima.
