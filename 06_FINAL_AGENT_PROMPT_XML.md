# 06 - Final Agent Prompt XML

Usa esta plantilla para pasar la tarea final a Codex, Gemini, OpenCode u otro agente ejecutor.

```xml
<agent_prompt>
  <task>
    Describe la tarea concreta en 1-3 frases. Sé imperativo y directo.
  </task>

  <context>
    Incluye solo el contexto mínimo necesario: comportamiento actual, comportamiento deseado y hallazgos relevantes.
  </context>

  <scope>
    Lista archivos, carpetas o zonas que el agente puede modificar.
  </scope>

  <do_not_touch>
    Lista archivos, carpetas, funcionalidades o decisiones que no debe cambiar.
  </do_not_touch>

  <constraints>
    Incluye restricciones técnicas, estilo, compatibilidad, seguridad o producto.
    No incluyas secretos, tokens, claves ni credenciales.
  </constraints>

  <steps>
    1. Inspecciona los archivos relevantes.
    2. Aplica el cambio mínimo necesario.
    3. Añade o ajusta validación si corresponde.
    4. Ejecuta los checks disponibles.
    5. Devuelve resumen del cambio y riesgos restantes.
  </steps>

  <validation>
    Indica comandos concretos o checks manuales esperados. Si no puedes ejecutarlos, explica por qué.
  </validation>

  <output>
    Devuelve:
    - resumen corto;
    - archivos modificados;
    - comandos ejecutados;
    - resultado de validación;
    - riesgos o follow-ups.
  </output>
</agent_prompt>
```

## Reglas

- No incluyas debate previo.
- No incluyas alternativas descartadas.
- No incluyas herramientas personales que el agente no pueda usar.
- No metas contexto largo por miedo. Si es importante, debe estar resumido.
- No digas “investiga todo el repo” salvo que sea imprescindible.
- No dejes validación genérica si conoces comandos concretos.
- No autorices cambios fuera de alcance para “aprovechar” la tarea.

## Checklist antes de entregar

- [ ] El objetivo cabe en 1-3 frases.
- [ ] El contexto solo incluye señal necesaria.
- [ ] El alcance dice qué puede tocar.
- [ ] `do_not_touch` protege zonas sensibles.
- [ ] La validación es concreta.
- [ ] El output esperado permite revisar rápido el resultado.
