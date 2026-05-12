# 13 - Example

## Petición

Quiero añadir un botón para exportar una tabla a CSV sin tocar el backend.

## PRP Lite resumido

Tipo: Feature UI pequeña.

Objetivo: añadir exportación CSV desde datos ya cargados en frontend.

Contexto: la tabla ya recibe datos renderizados; no hace falta endpoint nuevo.

Restricciones:

- No tocar backend.
- No cambiar contrato de API.
- No añadir dependencia pesada.

Decisión:

Usar generación CSV en cliente con función pequeña y descarga con Blob.

Plan:

1. Localizar componente de tabla.
2. Añadir helper `toCsv` si no existe.
3. Añadir botón `Export CSV`.
4. Validar con datos vacíos y datos con comas/comillas.

## Prompt final

```xml
<agent_prompt>
  <task>
    Añade un botón de exportación CSV a la tabla existente usando solo datos ya disponibles en frontend.
  </task>
  <context>
    La tabla ya renderiza los datos necesarios. No se necesita endpoint nuevo ni cambio de backend.
  </context>
  <scope>
    Componente de tabla y helper frontend relacionado si hace falta.
  </scope>
  <do_not_touch>
    Backend, contratos de API, autenticación, configuración de deploy.
  </do_not_touch>
  <constraints>
    No añadas dependencias pesadas. Escapa comas, comillas y saltos de línea correctamente.
  </constraints>
  <steps>
    1. Localiza el componente de tabla.
    2. Añade helper CSV mínimo o reutiliza uno existente.
    3. Añade botón visible de exportación.
    4. Valida datos vacíos y datos con caracteres especiales.
  </steps>
  <validation>
    Ejecuta lint/tests si existen. Haz smoke check manual de exportación.
  </validation>
  <output>
    Resume archivos modificados, validación ejecutada y cualquier riesgo restante.
  </output>
</agent_prompt>
```
