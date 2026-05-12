# ChatGPT PRP Lite

<p align="center">
  <img alt="version" src="https://img.shields.io/badge/version-v0.2-blue">
  <img alt="mode" src="https://img.shields.io/badge/mode-ChatGPT%20Folder-7c3aed">
  <img alt="files" src="https://img.shields.io/badge/files-planos-22c55e">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-lightgrey">
</p>

**PRP Lite** es una carpeta plana de Markdown para usar ChatGPT como capa de razonamiento antes de pasar trabajo a Codex, Gemini CLI, OpenCode u otro agente ejecutor.

No es un framework, no necesita base de datos vectorial y no intenta indexar todo un repositorio. Sirve para convertir ideas, bugs e issues en decisiones claras, planes cortos y prompts XML ejecutables.

## Para qué sirve

Cuando trabajas con agentes de código, el coste grande suele aparecer antes de escribir código: objetivo ambiguo, contexto excesivo, restricciones mal dichas, decisiones sin cerrar o validación inexistente.

PRP Lite fuerza un flujo simple:

```text
Idea / issue / bug
  -> investigación mínima
  -> PRP Lite
  -> diálogo de decisión
  -> plan corto
  -> prompt XML final
  -> agente ejecutor
  -> review y validación
```

La idea base:

```text
ChatGPT razona y decide.
El agente ejecutor implementa con alcance cerrado.
```

## Cómo usarlo en una carpeta de ChatGPT

1. Crea una carpeta o proyecto en ChatGPT.
2. Sube todos los archivos Markdown de este repositorio.
3. Usa `AGENTS.md` o `00_INSTRUCTIONS.md` como instrucciones del proyecto si la plataforma lo permite.
4. Pega una issue, bug, feature o idea con el contexto mínimo disponible.
5. Pide a ChatGPT que complete primero el PRP Lite y que no genere el prompt final hasta cerrar decisiones.

Prompt de arranque recomendado:

```text
Usa PRP Lite.
Trata esta tarea como feature, bugfix, refactor, investigación o review según corresponda.
Primero resume lo entendido, detecta dudas y haz preguntas de decisión multiopción.
No generes prompt final para agente ejecutor hasta que confirmemos el enfoque.
```

Cuando el enfoque ya esté cerrado:

```text
Genera el prompt final para agente ejecutor usando la estructura de 06_FINAL_AGENT_PROMPT_XML.md.
Compacta contexto, alcance, restricciones, pasos y validación.
No incluyas debate previo ni alternativas descartadas.
```

## Archivos incluidos

| Archivo | Uso |
|---|---|
| `AGENTS.md` | Instrucciones persistentes para ChatGPT o agentes compatibles. |
| `00_INSTRUCTIONS.md` | Prompt principal para activar el modo PRP Lite. |
| `01_WORKFLOW.md` | Flujo operativo de captura, decisión, plan, prompt y review. |
| `02_PRP_LITE.md` | Plantilla central para problema, contexto, alcance y validación. |
| `03_ISSUE_INVESTIGATION.md` | Investigación mínima antes de implementar. |
| `04_DECISION_DIALOGUE.md` | Formato para cerrar decisiones con opciones y recomendación. |
| `05_IMPLEMENTATION_PLAN.md` | Plan corto, riesgos, rollback y criterio de terminado. |
| `06_FINAL_AGENT_PROMPT_XML.md` | Plantilla final para entregar a un agente ejecutor. |
| `07_DEBUG_ROOT_CAUSE.md` | Flujo de debug orientado a causa raíz. |
| `08_REVIEW_CHECKLIST.md` | Checklist para revisar el resultado de un agente. |
| `09_VALIDATION_CHECKLIST.md` | Validación automática, manual y de alcance. |
| `10_GITHUB_ISSUE_TEMPLATE.md` | Plantilla de issue orientada a PRP Lite. |
| `11_CONTEXT_COMPRESSION.md` | Reglas para compactar contexto sin perder señal. |
| `12_MEMORY_NOTES.md` | Notas finales para memoria humana o futura conversación. |
| `13_EXAMPLE.md` | Ejemplo breve de uso completo. |

## Flujo recomendado

1. **Captura**: define objetivo, motivo, estado actual, estado deseado y zonas que no deben tocarse.
2. **Investigación mínima**: reúne solo archivos, errores, decisiones y restricciones necesarias.
3. **Decisión**: cierra enfoque, alcance, riesgos aceptados y validación mínima.
4. **Plan**: convierte la decisión en 3-7 pasos concretos.
5. **Prompt XML**: entrega una tarea compacta, imperativa y delimitada.
6. **Review**: comprueba diff, tests, alcance y riesgos restantes.

## Qué produce

Un buen PRP Lite deja preparado:

- objetivo concreto;
- contexto mínimo;
- decisiones tomadas;
- alcance permitido;
- zonas prohibidas;
- pasos de implementación;
- validación esperada;
- prompt XML final para otro agente.

## Convención de prompt final

Los prompts finales usan XML para separar intención, contexto, alcance y validación:

```xml
<agent_prompt>
  <task></task>
  <context></context>
  <scope></scope>
  <do_not_touch></do_not_touch>
  <constraints></constraints>
  <steps></steps>
  <validation></validation>
  <output></output>
</agent_prompt>
```

Los tags no son magia. Son barandillas: reducen ambigüedad y ayudan a que el agente no mezcle objetivo, restricciones y validación.

## Cuándo usarlo

Úsalo para:

- features pequeñas o medianas;
- bugs con contexto confuso;
- refactors que necesitan límites claros;
- issues que requieren decisión previa;
- prompts finales para Codex, Gemini CLI u OpenCode;
- preparar una PR antes de dar acceso amplio al repo.

Evítalo para:

- sustituir tests;
- delegar decisiones que nadie entiende todavía;
- guardar secretos, tokens o credenciales;
- indexar repos enormes;
- pedir “hazlo todo” sin alcance ni validación.

## Buenas prácticas

- Mantén el contexto corto, pero suficiente.
- Separa hechos, inferencias, dudas y decisiones.
- Pregunta antes de cerrar decisiones técnicas relevantes.
- No generes prompt final mientras haya bloqueantes.
- Incluye siempre validación, aunque sea manual.
- Si algo no puede validarse, dilo explícitamente.

## Licencia

MIT. Puedes copiar, adaptar y usar este kit en proyectos propios o de equipo.

