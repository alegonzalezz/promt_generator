# Guías de Prompting por LLM

Este directorio contiene archivos JSON completos con mejores prácticas de prompting para diferentes Large Language Models (LLMs).

## 📚 Archivos Disponibles

### 🎯 LLMs Principales

1. **[anthropic-claude.json](./anthropic-claude.json)**
   - **Modelos**: Claude 4.5 Sonnet, Claude 4.1 Opus, Claude 4 Sonnet, Claude 3.7 Sonnet, Claude Code
   - **Enfoque**: Concisión, citas XML, herramientas de conversación pasada, honestidad sobre limitaciones
   - **Ideal para**: Coding, análisis de documentos largos, escritura técnica y creativa

2. **[openai-chatgpt.json](./openai-chatgpt.json)**
   - **Modelos**: GPT-5 Thinking, GPT-5, GPT-4.5, GPT-4.1, GPT-4o, o3, o4-mini
   - **Enfoque**: Trabajo síncrono obligatorio, estilo casual, tool usage en canal de análisis
   - **Ideal para**: Razonamiento avanzado, integración con herramientas, conversaciones naturales

3. **[google-gemini.json](./google-gemini.json)**
   - **Modelos**: Gemini 3.5/3.0 Pro & Flash, Gemini 2.5/2.0/1.5 series
   - **Enfoque**: Pensamiento silencioso, máximo 4 pasos de código, formato claro estructurado
   - **Ideal para**: Ventana de contexto masiva (2M tokens), multimodal, integración Google Workspace

4. **[xai-grok.json](./xai-grok.json)**
   - **Modelos**: Grok 4, Grok 3, Grok 2, Grok 1
   - **Enfoque**: Conocimiento continuamente actualizado, acceso en tiempo real a X (Twitter), búsquedas profundas
   - **Ideal para**: Noticias breaking, eventos en tiempo real, análisis de redes sociales

### 🔍 Asistentes Especializados

5. **[perplexity-assistant.json](./perplexity-assistant.json)**
   - **Modelos**: Perplexity Pro, Sonar, Sonar Pro
   - **Enfoque**: Agente persistente, máximo 3 búsquedas, no thinking tokens antes de tools
   - **Ideal para**: Research con citas automáticas, análisis de páginas web, modo académico

6. **[proton-lumo.json](./proton-lumo.json)**
   - **Modelos**: Lumo Plus, Lumo Free
   - **Enfoque**: Personalidad tipo gato, privacidad first, encriptación extremo a extremo
   - **Ideal para**: Conversaciones privadas, manejo seguro de archivos, integración ecosistema Proton

7. **[mistral-lechat.json](./mistral-lechat.json)**
   - **Modelos**: Le Chat, Mistral Large/Medium/Small
   - **Enfoque**: Economía de lenguaje, diseño user-centric, atención alta a fechas
   - **Ideal para**: Conversaciones empáticas, widgets interactivos, enfoque europeo

### 📖 Recursos Generales

8. **[other-llms-general.json](./other-llms-general.json)**
   - **Cubre**: Sesame AI (Maya), Kagi Assistant, Fellou Browser, Raycast AI, Notion AI, Warp AI, Confer
   - **Enfoque**: Principios universales de prompting, patrones comunes, consideraciones éticas
   - **Ideal para**: Referencia rápida y mejores prácticas aplicables a cualquier LLM

## 🚀 Cómo Usar Estas Guías

### Estructura de Cada Archivo

Cada archivo JSON contiene:

```json
{
  "llm_name": "Nombre del LLM",
  "company": "Empresa",
  "models": ["Lista de modelos"],
  "knowledge_cutoff": "Fecha límite de conocimiento",
  "strengths": ["Fortalezas principales"],
  "prompting_best_practices": {
    "general_guidelines": [...],
    "specific_guidelines": [...]
  },
  "tool_usage": {...},
  "special_features": {...}
}
```

### Casos de Uso

1. **Para Desarrolladores**: Optimiza tus prompts para obtener mejores resultados en coding y análisis técnico
2. **Para Content Creators**: Aprende a obtener el tono y estilo perfecto para diferentes tipos de contenido
3. **Para Researchers**: Maximiza la precisión y verificabilidad de las respuestas
4. **Para Usuarios Generales**: Mejora la calidad de tus interacciones cotidianas con LLMs

### Ejemplo de Uso Práctico

```javascript
// Cargar guía específica
const claudeGuide = require('./anthropic-claude.json');

// Construir prompt optimizado
const prompt = `
${claudeGuide.prompting_best_practices.general_guidelines[0].rule}

Contexto: [Tu contexto específico]
Tarea: [Lo que necesitas]
Restricciones: [Limitaciones específicas]
`;
```

## 📝 Contribuir

Si encuentras información desactualizada o quieres agregar más LLMs:

1. Revisa los archivos existentes para mantener consistencia
2. Sigue la estructura JSON establecida
3. Incluye ejemplos concretos y casos de uso
4. Verifica la información con fuentes oficiales

## 🔗 Recursos Adicionales

- [AGENTS.md](../AGENTS.md) - Guías para agentes de código en este repositorio
- [Repositorio Principal](../readme.md) - Colección completa de system prompts

---

**Nota**: Estas guías están basadas en los system prompts documentados en este repositorio. Los LLMs evolucionan constantemente, así que verifica siempre la documentación oficial más reciente.
